import React, { useState, useRef, useEffect } from 'react';
import { useStyles, useTheme } from '../../core';
import { SyntaxHighlighter } from './SyntaxHighlighter';

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('code-editor');
    const preRef = useRef<HTMLPreElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleScroll = () => {
        if (preRef.current && textAreaRef.current) {
            preRef.current.scrollTop = textAreaRef.current.scrollTop;
            preRef.current.scrollLeft = textAreaRef.current.scrollLeft;
        }
    };
    
    const commonStyles = {
        margin: 0,
        padding: '1rem',
        border: 'none',
        fontFamily: 'monospace',
        fontSize: '13px',
        lineHeight: '1.5',
        tabSize: 2,
        MozTabSize: 2,
        whiteSpace: 'pre-wrap' as 'pre-wrap',
        wordBreak: 'break-word' as 'break-word',
    };

    const containerClass = createStyle({
        position: 'relative',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '8px',
    });

    const highlighterClass = createStyle({
        ...commonStyles,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        pointerEvents: 'none',
        color: theme.colors.text
    });
    
    const textareaClass = createStyle({
        ...commonStyles,
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        background: 'transparent',
        color: 'transparent',
        caretColor: theme.colors.text,
        resize: 'none',
        outline: 'none',
    });


    return (
        <div className={containerClass}>
            <textarea
                ref={textAreaRef}
                value={value}
                onChange={e => onChange(e.target.value)}
                onScroll={handleScroll}
                className={textareaClass}
                spellCheck="false"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
            />
            <div ref={preRef as any} className={highlighterClass}>
                <SyntaxHighlighter code={value} />
            </div>
        </div>
    );
};
