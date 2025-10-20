
export function hexToRgba(hex: string, alpha: number = 1): string {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${alpha})`;
    }
    throw new Error('Bad Hex');
}

export function parseColor(color: string): [number, number, number] {
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  if (color.startsWith('rgb')) {
    const parts = color.match(/(\d+)/g);
    if (parts && parts.length >= 3) {
      return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
    }
  }

  return [0, 0, 0]; // default fallback
}

export function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (c: number) => `0${Math.round(c).toString(16)}`.slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function rgbToHsl(r: number, g: number, b: number): { h: number, s: number, l: number } {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
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
}

export function hslToRgb(h: number, s: number, l: number): { r: number, g: number, b: number } {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// --- LAB Conversions ---
function pivotRgb(n: number) {
    return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
}
function pivotXyz(n: number) {
    return n > 0.008856 ? Math.pow(n, 1 / 3) : (7.787 * n) + (16 / 116);
}

export function rgbToLab(r: number, g: number, b: number): { L: number, a: number, b: number } {
    let R = pivotRgb(r / 255) * 100;
    let G = pivotRgb(g / 255) * 100;
    let B = pivotRgb(b / 255) * 100;
    
    let X = R * 0.4124564 + G * 0.3575761 + B * 0.1804375;
    let Y = R * 0.2126729 + G * 0.7151522 + B * 0.0721750;
    let Z = R * 0.0193339 + G * 0.1191920 + B * 0.9503041;
    
    X = pivotXyz(X / 95.047);
    Y = pivotXyz(Y / 100.000);
    Z = pivotXyz(Z / 108.883);

    const L = Math.max(0, 116 * Y - 16);
    const a = 500 * (X - Y);
    const B_lab = 200 * (Y - Z);

    return { L, a, b: B_lab };
}


function pivotLab(n: number) {
    const n3 = Math.pow(n, 3);
    return n3 > 0.008856 ? n3 : (n - 16 / 116) / 7.787;
}
function pivotRgbInverse(n: number) {
    return n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n;
}

export function labToRgb(L: number, a: number, b_lab: number): { r: number, g: number, b: number } {
    let y = (L + 16) / 116;
    let x = a / 500 + y;
    let z = y - b_lab / 200;

    let X = pivotLab(x) * 95.047;
    let Y = pivotLab(y) * 100.000;
    let Z = pivotLab(z) * 108.883;
    
    X /= 100;
    Y /= 100;
    Z /= 100;

    let R = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
    let G = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
    let B = X * 0.0557 + Y * -0.2040 + Z * 1.0570;

    R = pivotRgbInverse(R);
    G = pivotRgbInverse(G);
    B = pivotRgbInverse(B);

    const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val * 255)));

    return { r: clamp(R), g: clamp(G), b: clamp(B) };
}
