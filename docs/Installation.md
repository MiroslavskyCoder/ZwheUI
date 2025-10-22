# Installation

ZwheUI is a React component library designed for modern web applications. As it is not published on the npm registry, you must install it directly from its GitHub repository.

## Prerequisites

Before you begin, ensure your development environment meets the following requirements:
- **Node.js**: Version 16.x or later.
- **npm** or **yarn**: A compatible version for your Node.js installation.
- **React**: Version 18.x or 19.x.
- **Tailwind CSS**: ZwheUI is built on top of Tailwind CSS for its base styles and utilities. Your project must have Tailwind CSS configured.

## Installation from GitHub

You can install the library directly from the GitHub repository using your preferred package manager.

### Using npm

Run the following command in your project's root directory:
```bash
npm install github:MiroslavskyCoder/ZwheUI
```

This command performs the following actions:
1.  Fetches the latest commit from the `main` branch of the specified repository.
2.  Installs the package into your `node_modules` directory.
3.  Adds a dependency to your `package.json` file that points directly to the GitHub repository.

Your `package.json` will look something like this:
```json
"dependencies": {
  "zwheui": "github:MiroslavskyCoder/ZwheUI"
}
```

### Using yarn

Run the following command:
```bash
yarn add github:MiroslavskyCoder/ZwheUI
```

This achieves the same result as the npm command, adding the GitHub dependency to your project.

## CSS Setup

ZwheUI requires its stylesheet to be imported into your application for components to be styled correctly.

### 1. Configure Tailwind CSS

If you haven't already, make sure your `tailwind.config.js` is configured to scan the ZwheUI components for class names. This is crucial for Tailwind's Just-in-Time (JIT) compiler to generate the necessary utility classes.

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/zwheui/dist/**/*.{js,ts,jsx,tsx}", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2. Import the Stylesheet

In your application's main entry point (e.g., `src/index.js`, `src/main.tsx`, or `src/App.js`), import the library's pre-built CSS file. This should be done after your main Tailwind CSS imports.

```javascript
// src/index.css or your main stylesheet
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ... your other base styles ... */
```

```javascript
// src/index.js or src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Your main stylesheet with Tailwind directives

// Import ZwheUI styles
import 'zwheui/dist/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Next Steps

With the library installed and styles configured, you're ready to start using the components. Proceed to the [Getting Started](./GettingStarted.md) guide to learn how to set up the necessary providers and begin building your UI.
