import { useState, useEffect } from 'react';

type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error';

export const useScript = (src: string): ScriptStatus => {
    const [status, setStatus] = useState<ScriptStatus>(src ? 'loading' : 'idle');

    useEffect(() => {
        if (!src) {
            setStatus('idle');
            return;
        }

        let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);

            const setAttribute = (key: string, value: string) => {
                script.setAttribute(key, value);
            };
            setAttribute('data-status', 'loading');

            const setState = (event: Event) => {
                const newStatus = event.type === 'load' ? 'ready' : 'error';
                setStatus(newStatus);
                setAttribute('data-status', newStatus);
            };

            script.addEventListener('load', setState);
            script.addEventListener('error', setState);

            return () => {
                if (script) {
                    script.removeEventListener('load', setState);
                    script.removeEventListener('error', setState);
                }
            };
        } else {
            setStatus(script.getAttribute('data-status') as ScriptStatus || 'ready');
            // FIX: Add an explicit return to ensure all paths in the useEffect callback either return a cleanup function or undefined. This can help resolve misleading static analysis errors.
            return;
        }
    }, [src]);

    return status;
};
