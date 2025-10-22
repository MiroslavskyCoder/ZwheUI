import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useStyles, useTheme } from '../../core';
import { Link } from '../Link/Link';
import { CodeEditor } from '../Code/CodeEditor';

interface MarkdownProps {
    children: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('markdown');

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
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
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

    const components = {
        // @ts-ignore
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <div style={{ height: '350px' }}>
                    <CodeEditor value={String(children).replace(/\n$/, '')}/> 
                </div> 
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
        // @ts-ignore
        a: ({ href, children }) => <Link href={href} target="_blank" rel="noopener noreferrer">{children}</Link>
    };

    return (
        <div className={containerClass}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                // @ts-ignore
                components={components}
            >
                {children}
            </ReactMarkdown>
        </div>
    );
};
