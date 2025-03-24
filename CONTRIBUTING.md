# Contributing to wtotf

Thank you for considering contributing to wtotf! This document outlines the process for contributing to the project.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [the issue list](https://github.com/OWNER/wtotf/issues) as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible by filling out [the required template](https://github.com/OWNER/wtotf/blob/main/.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please check [the issue list](https://github.com/OWNER/wtotf/issues) as you might find that you don't need to create one. When you are creating an enhancement suggestion, please include as many details as possible by filling out [the required template](https://github.com/OWNER/wtotf/blob/main/.github/ISSUE_TEMPLATE/feature_request.md).

### Pull Requests

- Fill in [the required template](https://github.com/OWNER/wtotf/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
- Do not include issue numbers in the PR title
- Follow the JavaScript styleguide
- Include tests when adding features
- Update documentation as needed
- End all files with a newline

## Development Process

### Setting Up the Development Environment

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/wtotf.git`
3. Install dependencies: `npm install`
4. Make the script executable: `chmod +x convert.js`
5. Link the package locally: `npm link`

### Testing

Currently, the project does not have automated tests. When contributing, please manually test your changes with various font files to ensure they work as expected.

### Styleguides

#### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

#### JavaScript Styleguide

* Use ES modules for imports/exports
* Prefer const over let when possible
* Use async/await for asynchronous operations
* Add comments for complex operations

## License

By contributing to wtotf, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
