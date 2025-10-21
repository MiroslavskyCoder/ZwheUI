import React, { useState, useRef, useEffect } from 'react';
import { useStyles, useTheme } from '../../core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeEditorProps {
    value: string;
    onChange?: (value: string) => void;
    language?: string;
    showLineNumbers?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language = 'tsx', showLineNumbers = false }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('code-editor');
    const preRef = useRef<HTMLDivElement>(null);
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
    };

    const containerClass = createStyle({
        position: 'relative',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '8px',
    });

    const highlighterContainerClass = createStyle({
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
        whiteSpace: 'pre',
        wordWrap: 'normal',
        paddingLeft: showLineNumbers ? '3.5em' : commonStyles.padding,
    });


    return (
        <div className={containerClass}>
            <textarea
                ref={textAreaRef}
                value={value}
                onChange={e => (onChange ? onChange : () => {})(e.target.value)}
                onScroll={handleScroll}
                className={textareaClass}
                spellCheck="false"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
            />
            <div ref={preRef} className={highlighterContainerClass} aria-hidden="true">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    showLineNumbers={showLineNumbers}
                    lineNumberStyle={{
                        minWidth: '2.25em',
                        paddingRight: '1em',
                        textAlign: 'right',
                        opacity: 0.5,
                        userSelect: 'none',
                    }}
                    customStyle={{
                        ...commonStyles,
                        margin: 0,
                        padding: commonStyles.padding,
                        background: 'transparent',
                        whiteSpace: 'pre',
                        wordWrap: 'normal',
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: 'monospace',
                            fontSize: '13px',
                            lineHeight: '1.5',
                        }
                    }}
                >
                    {value.endsWith('\n') ? value : `${value}\n`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};