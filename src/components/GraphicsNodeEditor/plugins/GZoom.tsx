import React, { useEffect } from 'react';
import { useGraphicsContext } from '../GraphicsContext';

export const GZoom: React.FC = () => {
    const { editorRef, zoom, setZoom, pan, setPan } = useGraphicsContext();

    useEffect(() => {
        const editorElement = editorRef.current;
        if (!editorElement) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const rect = editorElement.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const zoomFactor = 1.1;
            const newZoom = e.deltaY < 0 ? zoom * zoomFactor : zoom / zoomFactor;
            
            // Mouse position in canvas coordinates before zoom
            const mouseInCanvasX_before = (mouseX - pan.x) / zoom;
            const mouseInCanvasY_before = (mouseY - pan.y) / zoom;

            // The new pan should be such that the mouse position in canvas coordinates remains the same after zoom
            const newPanX = mouseX - mouseInCanvasX_before * newZoom;
            const newPanY = mouseY - mouseInCanvasY_before * newZoom;

            setZoom(newZoom);
            setPan({ x: newPanX, y: newPanY });
        };

        editorElement.addEventListener('wheel', handleWheel);
        return () => {
            editorElement.removeEventListener('wheel', handleWheel);
        };
    }, [editorRef, zoom, setZoom, pan, setPan]);

    return null; // This is a logic-only component
};