
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
