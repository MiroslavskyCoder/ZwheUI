# Contributing to ZwheUI

Thank you for your interest in contributing to the ZwheUI library! We welcome contributions from the community to help us improve and grow. Whether you're fixing a bug, adding a new feature, or improving documentation, your help is greatly appreciated.

Please take a moment to review this document to make the contribution process easy and effective for everyone involved.

## Code of Conduct

This project and everyone participating in it is governed by a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

There are many ways to contribute to ZwheUI:

-   **Reporting Bugs**: If you find a bug, please create an issue in our GitHub repository.
-   **Suggesting Enhancements**: If you have an idea for a new feature or an improvement to an existing one, create an issue to discuss it.
-   **Writing Documentation**: Good documentation is crucial. We welcome any improvements, from fixing typos to writing new guides.
-   **Submitting Pull Requests**: If you're ready to contribute code, we'd love to review your work.

## Reporting Bugs

Before creating a bug report, please check the existing issues to see if someone has already reported it.

When creating a bug report, please include as many details as possible:

1.  **A clear and descriptive title**.
2.  **A detailed description of the problem**. Explain the issue and include steps to reproduce it.
3.  **Code examples**. Include a minimal, reproducible example of the issue.
4.  **Expected vs. Actual Behavior**: What did you expect to happen, and what happened instead?
5.  **Environment**: Include your browser, operating system, and library version.

## Submitting a Pull Request (PR)

1.  **Fork the Repository**: Start by forking the main ZwheUI repository on GitHub.
2.  **Clone Your Fork**: Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/YourUsername/ZwheUI.git
    cd ZwheUI
    ```
3.  **Create a New Branch**: Create a descriptive branch name for your changes.
    ```bash
    git checkout -b feature/add-new-component
    # or
    git checkout -b fix/button-style-issue
    ```
4.  **Make Your Changes**: Write your code. Follow the coding style and principles of the project.
    -   **Add a new component**: If adding a new component, please include:
        -   The component file in `src/components/ComponentName/ComponentName.tsx`.
        -   A documentation file in `src/components/ComponentName/ComponentName.md`.
        -   A demo file in `demo/ComponentName.tsx`.
        -   Exports from `src/components/index.ts`.
    -   **Keep changes focused**: Each PR should address a single bug or feature.
5.  **Run Tests**: Ensure all existing tests pass. If you're adding a new feature, please add corresponding tests.
6.  **Commit Your Changes**: Use a clear and descriptive commit message.
    ```bash
    git commit -m "feat: Add new 'AwesomeComponent'"
    ```
7.  **Push to Your Fork**:
    ```bash
    git push origin feature/add-new-component
    ```
8.  **Open a Pull Request**: Go to the ZwheUI repository on GitHub and open a new pull request from your forked branch. Provide a clear description of the changes you've made.

## Coding Style

-   **TypeScript**: All code should be written in TypeScript with strict typing.
-   **Formatting**: We use Prettier for automatic code formatting. Please run it before committing.
-   **Component Structure**: Follow the existing patterns. Use composition, create a custom `useStyles` hook for styling, and ensure components are accessible.
-   **Naming**: Component files should be PascalCase (e.g., `MyComponent.tsx`). Hooks should be camelCase with the `use` prefix (e.g., `useMyHook.ts`).

Thank you again for your contribution!
