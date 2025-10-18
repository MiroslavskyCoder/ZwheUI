export type NestedCSSProperties = {
  [key: string]: string | number | CSSProperties | undefined
}

export type CSSProperties = {
  [key: string]: string | number | NestedCSSProperties | undefined
}

export type MediaQuery = {
  [key: string]: CSSProperties
}

export type StyleDefinition = CSSProperties & {
  '@media'?: {
    [query: string]: CSSProperties
  }
}

export interface StyleOptions {
  prefix?: string
  cache?: boolean
}

export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    backgroundSecondary: string
    border: string
    text: string
    textSecondary: string
    [key: string]: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    [key: string]: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
    [key: string]: string
  }
  typography: {
    fontSizes: {
      [key: string]: string
    }
    fontWeights: {
      [key: string]: number
    }
    lineHeights: {
      [key: string]: string | number
    }
  },
  radii: {
    [key: string]: string;
  };
  blur: {
    [key: string]: string;
  },
  brightness: { 
    [key: string]: string; 
  },
  contrast: {
    [key: string]: string;
  },
  grayscale: {
    [key: string]: string;
  },
  hueRotate: {
    [key: string]: string;
  },
  invert: {
    [key: string]: string;
  },
  opacity: {
    [key: string]: string;
  },
  saturate: {
    [key: string]: string;
  },
  sepia: {
    [key: string]: string;
  },
}
 