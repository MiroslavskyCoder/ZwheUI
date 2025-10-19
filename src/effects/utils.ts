export const createImageData = (width: number, height: number): ImageData => {
    // A detached canvas is the easiest way to create a valid ImageData object.
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not create 2D context for image processing');
    return ctx.createImageData(width, height);
};

export const applyConvolution = (imageData: ImageData, kernel: number[], offset: number = 0): ImageData => {
    const { width, height, data } = imageData;
    const newImageData = createImageData(width, height);
    const newData = newImageData.data;
    const kernelSize = Math.sqrt(kernel.length);
    const halfKernel = Math.floor(kernelSize / 2);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const dstIdx = (y * width + x) * 4;
            let r = 0, g = 0, b = 0;

            for (let ky = 0; ky < kernelSize; ky++) {
                for (let kx = 0; kx < kernelSize; kx++) {
                    const srcX = x + kx - halfKernel;
                    const srcY = y + ky - halfKernel;

                    if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
                        const srcIdx = (srcY * width + srcX) * 4;
                        const kernelVal = kernel[ky * kernelSize + kx];
                        r += data[srcIdx] * kernelVal;
                        g += data[srcIdx + 1] * kernelVal;
                        b += data[srcIdx + 2] * kernelVal;
                    }
                }
            }

            newData[dstIdx] = Math.max(0, Math.min(255, r + offset));
            newData[dstIdx + 1] = Math.max(0, Math.min(255, g + offset));
            newData[dstIdx + 2] = Math.max(0, Math.min(255, b + offset));
            newData[dstIdx + 3] = data[dstIdx + 3];
        }
    }

    return newImageData;
};