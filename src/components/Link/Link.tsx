import React, { useState, useEffect } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
}

// Using a module-level variable to cache the result of the import attempt.
// This prevents redundant network requests for the module.
let cachedRouterLink: React.ComponentType<any> | 'failed' | null = null;

export const Link: React.FC<LinkProps> = ({ children, className = '', to, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('link');
    const [RouterLink, setRouterLink] = useState(() => cachedRouterLink);

    useEffect(() => {
        // Only attempt to import if the `to` prop is used and we haven't tried yet.
        if (to && RouterLink === null) {
            import('react-router-dom')
                .then(module => {
                    const LinkComponent = module.Link;
                    cachedRouterLink = LinkComponent; // Cache the successful import
                    setRouterLink(() => LinkComponent);
                })
                .catch(() => {
                    console.warn(
                        '[ZwheUI] `react-router-dom` is not installed or could not be found. ' +
                        'The `Link` component with a `to` prop will fall back to a standard `<a>` tag. ' +
                        'For client-side routing, please install `react-router-dom`.'
                    );
                    cachedRouterLink = 'failed'; // Cache the failure
                    setRouterLink('failed');
                });
        }
    }, [to]);

    const linkClass = createStyle({
        color: theme.colors.primary,
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: '#93c5fd', // Lighter blue
            textDecoration: 'underline',
        },
    });

    const combinedClassName = `${linkClass} ${className}`;

    // Render RouterLink if `to` is provided and the component has been successfully imported.
    if (to && RouterLink && RouterLink !== 'failed') {
        const TheRouterLink = RouterLink;
        return (
            <TheRouterLink to={to} className={combinedClassName} {...props}>
                {children}
            </TheRouterLink>
        );
    }
    
    // Fallback to a standard <a> tag in all other cases:
    // 1. If `to` is not provided (using `href` instead).
    // 2. While the dynamic import is in progress.
    // 3. If the dynamic import failed.
    return (
        <a href={to || props.href} className={combinedClassName} {...props}>
            {children}
        </a>
    );
};
