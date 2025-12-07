# recon-visualizer

A lightweight web app that lets you upload ZIP archives, inspect and preview their contents in the browser, and download individual files — without manually unzipping them on your machine. The project focuses on convenience and privacy by supporting client-side extraction so files can remain in the user's browser.

## Main purpose / What this website does
- Upload ZIP archives (or drag-and-drop) into the web UI.
- Extract the archive and display its folder/file structure as a navigable tree.
- Preview common file types directly in the browser (plain text, Markdown, JSON, source code, images, etc.).
- Download individual files from the extracted archive without downloading the full archive again.
- Option to perform extraction fully client-side so uploaded data never leaves the browser.

This tool is useful for security/recon workflows, developers inspecting packaged artifacts, or anyone who needs a quick way to browse ZIP contents without extracting locally.

## Features
- Visual, collapsible file tree for browsing extracted archives.
- In-browser previews for text and image formats.
- Download buttons for single files.
- Client-side extraction mode (privacy-first).
- Simple, minimal UI aimed at speed and clarity.

## Supported file types (examples)
- Text: .txt, .md, .log, .csv
- Code: .js, .ts, .py, .java, .html, .css
- Data: .json, .yaml
- Images: .png, .jpg, .gif, .svg
- Other binaries: offered for download

## Installation (local)
1. Clone the repository:
   git clone https://github.com/Durgaprasad-123/recon-visualizer.git
2. Change into the project directory:
   cd recon-visualizer
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev

Adjust the commands above if you use yarn or have different npm scripts (e.g., npm start).

## Development notes
- The codebase uses TypeScript and modern frontend tooling (e.g., Vite, CRA, or similar). Check package.json to confirm scripts and build steps.
- If the app supports both client- and server-side extraction, see the API/server folder (if present) for configuration and environment variables.

## Deployment
This project can be deployed as a static site when extraction runs entirely in the browser. If you have server-side processing, deploy serverless functions or a small backend alongside the static frontend.

Recommended platforms:
- Vercel (recommended for static + serverless)
- Netlify
- GitHub Pages (static-only)

Vercel quick setup:
1. Go to https://vercel.com/ and connect your GitHub account.
2. Import this repository (Durgaprasad-123/recon-visualizer).
3. Set the Build Command to the project build script (commonly `npm run build`).
4. Set the Output Directory to `dist` (Vite) or `build` (Create React App) depending on your setup.
5. Add any necessary environment variables in the Vercel project settings.
6. Deploy — Vercel will build and publish automatically on push.


Netlify quick setup:
- Connect repo, set the build command (`npm run build`) and publish directory (`dist` or `build`).
- Add environment variables in Site settings if needed.

GitHub Pages (static-only):
- Build locally (npm run build) and push the built files to the gh-pages branch or configure GitHub Pages to serve from the repository's /docs folder or the gh-pages branch using a deploy script.

If your app uses server-side extraction:
- Deploy the API as serverless functions on Vercel/Netlify or as a small Node server on a VPS or cloud provider.
- Enforce file-size limits, scan uploads if possible, and delete temporary files after processing.

## Environment variables and secrets
- If the project requires API keys or secret configuration, do not commit them to the repo.
- Configure runtime secrets in your hosting platform’s environment settings (Vercel, Netlify, etc.).

## Usage
1. Open the deployed site in your browser.
2. Click the Upload button or drag a ZIP file onto the upload area.
3. Wait for extraction to complete.
4. Browse folders and click files to preview them.
5. Use the download button to save any individual file locally.

## Privacy & Security
- Client-side extraction: files are processed in the user's browser and never sent to a server.
- Server-side extraction: ensure uploads are limited by size, scanned for malware if necessary, and removed promptly after processing.
- Never store sensitive files unless required; if stored, protect them with proper authentication and access controls.

## Contributing
Contributions welcome. Suggested workflow:
1. Fork the repo and create a feature branch.
2. Make changes and run tests (if any).
3. Open a pull request with a clear description of changes.
