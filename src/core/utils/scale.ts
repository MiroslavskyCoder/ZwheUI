
export type Scale = {
    (value: number): number;
    invert: (value: number) => number;
};

// Basic linear scale implementation
export const createLinearScale = (domain: [number, number], range: [number, number]): Scale => {
    const scale = (value: number): number => {
        if (domain[1] === domain[0]) return range[0];
        const ratio = (value - domain[0]) / (domain[1] - domain[0]);
        return range[0] + ratio * (range[1] - range[0]);
    };

    scale.invert = (pixel: number): number => {
        if (range[1] === range[0]) return domain[0];
        const ratio = (pixel - range[0]) / (range[1] - range[0]);
        return domain[0] + ratio * (domain[1] - domain[0]);
    };

    return scale;
};
