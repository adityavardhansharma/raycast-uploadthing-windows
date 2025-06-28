# UploadThing for Raycast (Windows Version)

> **⚠️ Temporary Fork Notice**  
> This is an unofficial Windows-compatible fork of the [original UploadThing Raycast extension](https://github.com/raycast/extensions/tree/main/extensions/uploadthing). This fork exists only until UploadThing or Raycast officially supports Windows development environments.

## Overview

A Raycast extension that allows you to upload files to UploadThing with a single click. This fork has been modified to run properly on Windows development environments while maintaining full compatibility with the original extension's functionality.

## Features

- 📤 **Upload Files**: Select and upload multiple files to your UploadThing app
- 📋 **Upload from Clipboard**: Upload files directly from your clipboard
- 📁 **List Files**: Browse and manage files in your UploadThing app
- 🔐 **Secure Token Storage**: Encrypted storage of your UploadThing API token

## Changes Made for Windows Compatibility

### Crypto Polyfill Fix
**Problem**: The original extension's crypto polyfill was incompatible with Raycast's Windows environment, causing runtime errors.

**Solution**: Modified `src/lib/web-polyfill.ts` to safely check for existing crypto availability:
```typescript
// Before (causing errors on Windows)
globalThis.crypto = Crypto as any;

// After (Windows compatible)
if (!globalThis.crypto) {
  (globalThis as any).crypto = Crypto;
}
```

## Prerequisites

- [Raycast](https://raycast.com/) installed on your system
- [Node.js](https://nodejs.org/) (v20 or higher)
- [PNPM](https://pnpm.io/) package manager
- An [UploadThing](https://uploadthing.com/) account and API token

## Local Development Setup

### 1. Clone this Repository
```bash
git clone https://github.com/adityavardhansharma/raycast-uploadthing-windows.git
cd raycast-uploadthing-windows
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Start Development Server
```bash
pnpm run dev
```

### 4. Configure in Raycast
1. Open Raycast
2. Search for "UploadThing" commands
3. When prompted, enter your UploadThing API token
4. The extension is now ready to use!

## Getting Your UploadThing Token

1. Go to [UploadThing Dashboard](https://uploadthing.com/dashboard)
2. Navigate to your app settings
3. Copy your API token
4. Paste it into the Raycast extension when prompted

## Available Commands

- **Upload Files**: Select files from your filesystem to upload
- **Upload from Clipboard**: Upload files currently in your clipboard
- **List Files**: View and manage files in your UploadThing storage

## Building for Distribution

```bash
pnpm run build
```
## Credits

- **Original Extension**: [UploadThing team](https://github.com/pingdotgg) and [Raycast Extensions](https://github.com/raycast/extensions)
- **Windows Compatibility**: Community fork for development purposes

---

**📝 Note**: This fork will be archived once the original UploadThing extension officially supports Windows development environments. Please use the official extension when available. 
