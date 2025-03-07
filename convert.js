#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import ttf2woff from 'ttf2woff';
import ttf2woff2 from 'ttf2woff2';

function generateCSSContent(fontFamily, relativePaths) {
    return `@font-face {
    font-family: '${fontFamily}';
    src: url('${relativePaths.woff2}') format('woff2'),
         url('${relativePaths.woff}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}`;
}

function convertFont(inputPath) {
    // Check if file exists
    if (!fs.existsSync(inputPath)) {
        console.error(`Error: File ${inputPath} not found`);
        process.exit(1);
    }

    // Check if file is OTF
    if (!inputPath.toLowerCase().endsWith('.otf')) {
        console.error('Error: Input file must be an OTF file');
        process.exit(1);
    }

    // Read the input file
    const input = fs.readFileSync(inputPath);
    const baseName = path.basename(inputPath, '.otf');
    const dirName = path.dirname(inputPath);
    const fontFamily = baseName.replace(/[^a-zA-Z0-9]/g, '-');

    const outputFiles = {
        woff: `${baseName}.woff`,
        woff2: `${baseName}.woff2`
    };

    // Convert to WOFF
    try {
        const woffResult = ttf2woff(input);
        const woffPath = path.join(dirName, outputFiles.woff);
        fs.writeFileSync(woffPath, Buffer.from(woffResult.buffer));
        console.log(`✅ Created WOFF file: ${woffPath}`);
    } catch (error) {
        console.error('❌ Error converting to WOFF:', error.message);
    }

    // Convert to WOFF2
    try {
        const woff2Result = ttf2woff2(input);
        const woff2Path = path.join(dirName, outputFiles.woff2);
        fs.writeFileSync(woff2Path, woff2Result);
        console.log(`✅ Created WOFF2 file: ${woff2Path}`);
    } catch (error) {
        console.error('❌ Error converting to WOFF2:', error.message);
    }

    // Generate and save CSS file
    try {
        const cssContent = generateCSSContent(fontFamily, outputFiles);
        const cssPath = path.join(dirName, `${baseName}.css`);
        fs.writeFileSync(cssPath, cssContent);
        console.log(`✅ Created CSS file: ${cssPath} \n\n${cssContent}`);
    } catch (error) {
        console.error('❌ Error generating CSS:', error.message);
    }
}

// Get the input file path from command line arguments
const inputFile = process.argv[2];

if (!inputFile) {
    console.error('Please provide an input OTF file path');
    console.error('Usage: wtotf <input-file.otf>');
    process.exit(1);
}

convertFont(inputFile);
