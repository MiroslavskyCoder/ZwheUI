// A simple polyfill for the Buffer methods we need in the browser
export class Bufferish {
    constructor(arrayBuffer) {
        this.arrayBuffer = arrayBuffer;
        this.dataView = new DataView(arrayBuffer);
        this.length = arrayBuffer.byteLength;
    }
    
    static from(bufferish) {
        const newArrayBuffer = bufferish.arrayBuffer.slice(0);
        return new Bufferish(newArrayBuffer);
    }

    static alloc(size) {
        return new Bufferish(new ArrayBuffer(size));
    }

    readInt16LE(offset) {
        return this.dataView.getInt16(offset, true);
    }

    writeInt16LE(value, offset) {
        this.dataView.setInt16(offset, value, true);
    }

    readFloatLE(offset) {
        return this.dataView.getFloat32(offset, true);
    }

    writeFloatLE(value, offset) {
        this.dataView.setFloat32(offset, value, true);
    }

    readInt8(offset) {
        return this.dataView.getInt8(offset);
    }

    writeInt8(value, offset) {
        this.dataView.setInt8(offset, value);
    }
}
