import { parseColor, rgbToHex, rgbToLab, labToRgb } from './utils';

/**
 * Represents a color in various formats that can be processed.
 */
export type ColorInput = string | [number, number, number] | { r: number, g: number, b: number };

/**
 * Internal representation of a color as an RGBA object with values from 0 to 255.
 */
interface RGBAColor {
    r: number;
    g: number;
    b: number;
    a: number; // Alpha from 0 to 1
}

/**
 * Blending modes for mixing colors.
 */
export type BlendMode =
    | 'average'    // Averages the channels.
    | 'additive'   // Adds channel values, clamping at 255.
    | 'multiply'   // Multiplies the channel values.
    | 'screen'     // Inverts, multiplies, and inverts back. Good for lightening.
    | 'overlay'    // A combination of multiply and screen.
    | 'difference' // Subtracts the darker color from the lighter color.
    | 'lighten'    // Selects the lighter of the two colors for each channel.
    | 'darken';    // Selects the darker of the two colors for each channel.

/**
 * Options for the color mixing process.
 */
export interface MixOptions {
    /** The blending algorithm to use. Defaults to 'average'. */
    mode?: BlendMode;
    /** The color space in which to perform the mixing. 'lab' is more perceptually uniform. Defaults to 'rgb'. */
    space?: 'rgb' | 'lab';
    /** The desired output format. Defaults to 'hex'. */
    output?: 'hex' | 'rgba_string' | 'rgb_array';
}


// --- Helper Functions ---

/**
 * Parses any supported color format into a consistent RGBA object.
 */
export function normalizeColor(color: ColorInput): RGBAColor {
    if (typeof color === 'string') {
        // Handle hex, rgb(), rgba() strings
        if (color.startsWith('rgba')) {
            const parts = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
            if (parts) {
                return {
                    r: parseInt(parts[1], 10),
                    g: parseInt(parts[2], 10),
                    b: parseInt(parts[3], 10),
                    a: parseFloat(parts[4]),
                };
            }
        }
        const [r, g, b] = parseColor(color);
        return { r, g, b, a: 1 };
    } else if (Array.isArray(color)) {
        const [r, g, b, a = 1] = color;
        return { r, g, b, a };
    } else if (typeof color === 'object' && 'r' in color) {
        return { r: color.r, g: color.g, b: color.b, a: (color as any).a ?? 1 };
    }
    // Fallback for invalid input
    return { r: 0, g: 0, b: 0, a: 1 };
}

/**
 * Applies a single blend function to two colors.
 * Color channels are normalized to 0-1 for calculations.
 */
export function blend(base: RGBAColor, blend: RGBAColor, mode: BlendMode): RGBAColor {
    const b = { r: base.r / 255, g: base.g / 255, b: base.b / 255 };
    const m = { r: blend.r / 255, g: blend.g / 255, b: blend.b / 255 };
    let r = 0, g = 0, b_ = 0;

    switch (mode) {
        case 'multiply':
            r = b.r * m.r;
            g = b.g * m.g;
            b_ = b.b * m.b;
            break;
        case 'screen':
            r = 1 - (1 - b.r) * (1 - m.r);
            g = 1 - (1 - b.g) * (1 - m.g);
            b_ = 1 - (1 - b.b) * (1 - m.b);
            break;
        case 'overlay':
            r = b.r < 0.5 ? 2 * b.r * m.r : 1 - 2 * (1 - b.r) * (1 - m.r);
            g = b.g < 0.5 ? 2 * b.g * m.g : 1 - 2 * (1 - b.g) * (1 - m.g);
            b_ = b.b < 0.5 ? 2 * b.b * m.b : 1 - 2 * (1 - b.b) * (1 - m.b);
            break;
        case 'difference':
            r = Math.abs(b.r - m.r);
            g = Math.abs(b.g - m.g);
            b_ = Math.abs(b.b - m.b);
            break;
        case 'additive':
            r = Math.min(1, b.r + m.r);
            g = Math.min(1, b.g + m.g);
            b_ = Math.min(1, b.b + m.b);
            break;
        case 'lighten':
            r = Math.max(b.r, m.r);
            g = Math.max(b.g, m.g);
            b_ = Math.max(b.b, m.b);
            break;
        case 'darken':
            r = Math.min(b.r, m.r);
            g = Math.min(b.g, m.g);
            b_ = Math.min(b.b, m.b);
            break;
        case 'average': // This will be handled differently, by averaging all colors at once.
        default:
             // Should not happen if 'average' is handled separately
            return base;
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b_ * 255),
        a: (base.a + blend.a) / 2, // Simple alpha averaging
    };
}

/**
 * Formats the final RGBA color into the desired output format.
 */
export function formatOutput(color: RGBAColor, format: MixOptions['output']): string | [number, number, number] {
    const { r, g, b, a } = color;
    switch (format) {
        case 'rgba_string':
            return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
        case 'rgb_array':
            return [r, g, b];
        case 'hex':
        default:
            return rgbToHex(r, g, b);
    }
}


/**
 * The main color mixing engine. Mixes an array of colors using various options.
 * This is a more powerful and flexible replacement for the original MixColor function.
 * 
 * @param colors An array of colors in any supported format.
 * @param options Configuration for the mixing process.
 * @returns The final mixed color in the specified output format.
 */
export function mix(colors: ColorInput[], options: MixOptions = {}): string | [number, number, number] {
    const {
        mode = 'average',
        space = 'rgb',
        output = 'hex'
    } = options;

    if (colors.length === 0) {
        return formatOutput({ r: 0, g: 0, b: 0, a: 1 }, output);
    }

    if (colors.length === 1) {
        return formatOutput(normalizeColor(colors[0]), output);
    }

    const normalizedColors = colors.map(normalizeColor);

    let resultColor: RGBAColor;

    if (space === 'lab' && mode === 'average') {
        // Averaging in LAB space
        const labColors = normalizedColors.map(c => rgbToLab(c.r, c.g, c.b));
        const avgLab = labColors.reduce((acc, lab) => ({ L: acc.L + lab.L, a: acc.a + lab.a, b: acc.b + lab.b }), { L: 0, a: 0, b: 0 });
        avgLab.L /= labColors.length;
        avgLab.a /= labColors.length;
        avgLab.b /= labColors.length;
        
        const { r, g, b } = labToRgb(avgLab.L, avgLab.a, avgLab.b);
        const avgAlpha = normalizedColors.reduce((sum, c) => sum + c.a, 0) / normalizedColors.length;

        resultColor = {
            r: Math.round(r),
            g: Math.round(g),
            b: Math.round(b),
            a: avgAlpha
        };
    } else {
        // Handle 'average' mode in RGB space separately for efficiency
        if (mode === 'average') {
            const sum = normalizedColors.reduce((acc, c) => ({
                r: acc.r + c.r,
                g: acc.g + c.g,
                b: acc.b + c.b,
                a: acc.a + c.a,
            }), { r: 0, g: 0, b: 0, a: 0 });

            resultColor = {
                r: Math.round(sum.r / normalizedColors.length),
                g: Math.round(sum.g / normalizedColors.length),
                b: Math.round(sum.b / normalizedColors.length),
                a: sum.a / normalizedColors.length,
            };
        } else {
            // Sequential blending for other modes
            resultColor = normalizedColors[0];
            for (let i = 1; i < normalizedColors.length; i++) {
                resultColor = blend(resultColor, normalizedColors[i], mode);
            }
        }
    }

    return formatOutput(resultColor, output);
}

/**
 * An alias for the more powerful `mix` function, for backward compatibility
 * and to fulfill the original naming request.
 * Mixes multiple colors together by averaging their RGB components by default.
 *
 * @param {...ColorInput[]} colors - A variable number of Color inputs to mix.
 * @returns {string | [number, number, number]} The resulting mixed color, as a hex string by default.
 */
export function MixColor(...colors: ColorInput[]): string | [number, number, number] {
    return mix(colors);
}
