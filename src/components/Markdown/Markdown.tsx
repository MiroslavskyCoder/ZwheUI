import React, { useRef } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useStyles, useTheme } from '../../core';
import { Link } from '../Link/Link';

interface MarkdownProps {
    children: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('markdown'); 

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
        fontSize: theme.typography.fontSizes.base,
        color: theme.colors.text,
        lineHeight: theme.typography.lineHeights.relaxed,
        '& h1, & h2, & h3': {
            borderBottom: `1px solid ${theme.colors.border}`,
            paddingBottom: '0.5em',
            marginBottom: '1em',
        },
        '& h1': { fontSize: '2em', fontWeight: '600' },
        '& h2': { fontSize: '1.5em', fontWeight: '600' },
        '& h3': { fontSize: '1.25em', fontWeight: '600' },
        '& a': {
            color: theme.colors.primary,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' }
        },
        '& p': {
            marginBottom: '1em',
        },
        '& code': { 
            padding: '0.2em 0.4em',
            borderRadius: '3px',
            fontFamily: 'monospace',
            fontSize: '85%',
        },
        '& pre': {
            background: '#1e1e1e',
            padding: '1em',
            borderRadius: '8px',
            overflowX: 'auto',
        },
        '& pre > code': {
            padding: 0,
            backgroundColor: 'transparent',
            fontSize: '100%',
        },
        '& blockquote': {
            paddingLeft: '1em',
            borderLeft: `4px solid ${theme.colors.border}`,
            color: theme.colors.textSecondary,
            margin: '1em 0',
        },
        '& table': {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '1em',
            display: 'table',
        },
        '& th, & td': {
            border: `1px solid ${theme.colors.border}`,
            padding: '0.5em 0.75em',
        },
        '& th': {
            backgroundColor: theme.colors.backgroundSecondary,
            fontWeight: 600,
        },
        '& ul, & ol': {
            paddingLeft: '2em',
            marginBottom: '1em',
        }
    }); 

    const components: Components = {
        // @ts-ignore
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? ( 
                <SyntaxHighlighter
                    // @ts-ignore
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div" 
                    customStyle={{
                        ...commonStyles,
                        margin: 0,
                        padding: commonStyles.padding,
                        background: 'transparent',
                        whiteSpace: 'pre',
                        wordWrap: 'normal',
                    }}
                    lineNumberStyle={{
                        minWidth: '2.25em',
                        paddingRight: '1em',
                        textAlign: 'right',
                        opacity: 0.5,
                        userSelect: 'none',
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: 'monospace',
                            fontSize: '13px',
                            lineHeight: '1.5',
                        }
                    }}
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter> 
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
        a: ({ href, children }) => <Link href={href} target="_blank" rel="noopener noreferrer">{children}</Link>
    };

    return (
        <div className={containerClass}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={components}
            >
                {children}
            </ReactMarkdown>
        </div>
    );
};