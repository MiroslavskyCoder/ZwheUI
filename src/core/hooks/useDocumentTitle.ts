import { useLayoutEffect } from 'react';

export const useDocumentTitle = (title: string) => {
    useLayoutEffect(() => {
        if (typeof title === 'string' && title.trim().length > 0) {
            document.title = title.trim();
        }
    }, [title]);
};
