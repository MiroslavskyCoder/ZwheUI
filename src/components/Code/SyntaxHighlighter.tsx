
import React from 'react';
import { useStyles } from '../../core';

interface SyntaxHighlighterProps {
    code: string;
}

const tokenColors = {
    keyword: '#c792ea',
    tag: '#f07178',
    punctuation: '#89ddff',
    attribute: '#ffcb6b',
    string: '#c3e88d',
    comment: '#546e7a',
    number: '#f78c6c',
    default: 'inherit',
};

// Simple regex-based tokenizer
const tokenize = (code: string) => {
    const rules = [
        { type: 'comment', regex: /\/\*[\s\S]*?\*\/|\/\/.*/g },
        { type: 'string', regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*`|`(?:\\.|[^`\\])*`/g },
        { type: 'tag', regex: /<\/?([A-Z][a-zA-Z0-9]*)/g },
        { type: 'keyword', regex: /\b(import|from|export|const|let|var|return|=>|if|else|new|React|useState|useEffect|type|interface|extends)\b/g },
        { type: 'attribute', regex: /([a-zA-Z0-9]+)=/g },
        { type: 'number', regex: /\b\d+\b/g },
        { type: 'punctuation', regex: /[{}()[\].,:;]/g },
        { type: 'tag', regex: /[<>]/g },
    ];

    let remainingCode = code;
    const tokens: { type: string; value: string; index: number }[] = [];

    rules.forEach(({ type, regex }) => {
        let match;
        while ((match = regex.exec(code)) !== null) {
            tokens.push({ type, value: match[0], index: match.index });
        }
    });

    // Sort tokens by their starting index
    tokens.sort((a, b) => a.index - b.index);

    const result: React.ReactNode[] = [];
    let lastIndex = 0;

    // Filter out overlapping tokens
    const finalTokens = tokens.filter((token, i) => {
        if (i > 0 && token.index < tokens[i - 1].index + tokens[i - 1].value.length) {
            return false;
        }
        return true;
    });


    finalTokens.forEach(token => {
        // Add untokenized text
        if (token.index > lastIndex) {
            result.push(code.substring(lastIndex, token.index));
        }
        // Add tokenized text
        result.push(
            <span key={`${token.index}-${token.type}`} style={{ color: (tokenColors as any)[token.type] }}>
                {token.value}
            </span>
        );
        lastIndex = token.index + token.value.length;
    });

    // Add any remaining text
    if (lastIndex < code.length) {
        result.push(code.substring(lastIndex));
    }

    return result;
};


export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code }) => {
    const createStyle = useStyles('syntax-highlighter');
    const preClass = createStyle({
        margin: 0,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
    });
    
    return (
        <pre className={preClass}>
            <code>
                {tokenize(code)}
            </code>
        </pre>
    );
};