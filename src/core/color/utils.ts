/**
 * A collection of color utility functions.
 */

// --- Parsers ---

/**
 * Parses a color string (hex, rgb, rgba) into an array of [r, g, b].
 * Returns black for invalid colors.
 */
export const parseColor = (color: string): [number, number, number] => {
    if (color.startsWith('#')) {
        let hex = color.slice(1);
        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }
        if (hex.length === 6) {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return [r, g, b];
        }
    }
    const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
        return [parseInt(rgbMatch[1], 10), parseInt(rgbMatch[2], 10), parseInt(rgbMatch[3], 10)];
    }
    return [0, 0, 0];
};

// --- Converters ---

export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const [r, g, b] = parseColor(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const componentToHex = (c: number): string => {
  const hex = Math.round(c).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const rgbToHsl = (r: number, g: number, b: number): { h: number, s: number, l: number } => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
};

export const hslToRgb = (h: number, s: number, l: number): { r: number, g: number, b: number } => {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
};

export const rgbToHsv = (r: number, g: number, b: number): { h: number, s: number, v: number } => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, v = max;
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max !== min) {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, v: v * 100 };
};

export const hsvToRgb = (h: number, s: number, v: number): { r: number, g: number, b: number } => {
    h /= 360; s /= 100; v /= 100;
    let r, g, b;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
        default: r=0; g=0; b=0; break;
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
};

export const rgbToCmyk = (r: number, g: number, b: number): { c: number, m: number, y: number, k: number } => {
    r /= 255; g /= 255; b /= 255;
    const k = 1 - Math.max(r, g, b);
    if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k);
    return { c: c * 100, m: m * 100, y: y * 100, k: k * 100 };
};

export const cmykToRgb = (c: number, m: number, y: number, k: number): { r: number, g: number, b: number } => {
    c /= 100; m /= 100; y /= 100; k /= 100;
    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);
    return { r, g, b };
};

// --- D65 constants for XYZ/Lab conversions ---
const Xn = 95.047;
const Yn = 100.0;
const Zn = 108.883;

export const rgbToXyz = (r: number, g: number, b: number): { x: number, y: number, z: number } => {
    r /= 255; g /= 255; b /= 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    r *= 100; g *= 100; b *= 100;
    return {
        x: r * 0.4124 + g * 0.3576 + b * 0.1805,
        y: r * 0.2126 + g * 0.7152 + b * 0.0722,
        z: r * 0.0193 + g * 0.1192 + b * 0.9505
    };
};

export const xyzToRgb = (x: number, y: number, z: number): { r: number, g: number, b: number } => {
    x /= 100; y /= 100; z /= 100;
    let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    let b = x * 0.0557 + y * -0.2040 + z * 1.0570;
    r = r > 0.0031308 ? 1.055 * Math.pow(r, 1/2.4) - 0.055 : 12.92 * r;
    g = g > 0.0031308 ? 1.055 * Math.pow(g, 1/2.4) - 0.055 : 12.92 * g;
    b = b > 0.0031308 ? 1.055 * Math.pow(b, 1/2.4) - 0.055 : 12.92 * b;
    return { r: r * 255, g: g * 255, b: b * 255 };
};

export const xyzToLab = (x: number, y: number, z: number): { L: number, a: number, b: number } => {
    x /= Xn; y /= Yn; z /= Zn;
    x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16/116);
    y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16/116);
    z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16/116);
    return {
        L: (116 * y) - 16,
        a: 500 * (x - y),
        b: 200 * (y - z)
    };
};

export const labToXyz = (L: number, a: number, b: number): { x: number, y: number, z: number } => {
    let y = (L + 16) / 116;
    let x = a / 500 + y;
    let z = y - b / 200;
    const x3 = Math.pow(x, 3);
    const y3 = Math.pow(y, 3);
    const z3 = Math.pow(z, 3);
    x = x3 > 0.008856 ? x3 : (x - 16/116) / 7.787;
    y = y3 > 0.008856 ? y3 : (y - 16/116) / 7.787;
    z = z3 > 0.008856 ? z3 : (z - 16/116) / 7.787;
    return { x: x * Xn, y: y * Yn, z: z * Zn };
};

export const rgbToLab = (r: number, g: number, b: number): { L: number, a: number, b: number } => {
    const { x, y, z } = rgbToXyz(r, g, b);
    return xyzToLab(x, y, z);
};

export const labToRgb = (L: number, a: number, b: number): { r: number, g: number, b: number } => {
    const { x, y, z } = labToXyz(L, a, b);
    return xyzToRgb(x, y, z);
};
