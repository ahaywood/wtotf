# wtotf

A command-line tool to convert OTF and TTF fonts to WOFF and WOFF2 formats using Node.js, and generate the corresponding CSS @font-face definition.

## Installation

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Make the script executable:
   ```bash
   chmod +x convert.js
   ```
5. Link the package globally (optional):
   ```bash
   npm link
   ```

## Usage

If you've linked the package globally:
```bash
wtotf path/to/your/font.otf
# or
wtotf path/to/your/font.ttf
```

Or run it directly:
```bash
./convert.js path/to/your/font.otf
# or
./convert.js path/to/your/font.ttf
```

The script will create three new files in the same directory as your input file:
- `font.woff` - WOFF format font file
- `font.woff2` - WOFF2 format font file
- `font.css` - CSS file containing the @font-face definition

## Examples

```bash
wtotf MyFont.otf
```

Or

```bash
wtotf MyFont.ttf
```

This will create:
- `MyFont.woff`
- `MyFont.woff2`
- `MyFont.css`

The generated CSS file will contain the @font-face definition with both WOFF and WOFF2 formats, using the font filename as the font-family name. You can include this CSS file in your web project to use the font.

## Changelog

For a detailed list of changes between versions, please see the [CHANGELOG.md](./CHANGELOG.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

```
MIT License

Copyright (c) 2025 wtotf Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

See the full [LICENSE](./LICENSE) file for complete license text.
