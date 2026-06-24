Golf Club Selector - iPhone/GitHub Pages Setup

Files in this folder:
- index.html: the app
- manifest.webmanifest: makes it installable on iPhone Home Screen
- service-worker.js: allows offline use after the first successful visit
- icon-192.png and icon-512.png: Home Screen icons

Simple GitHub Pages upload steps:
1. Go to github.com and sign in.
2. Create a new repository named golf-club-selector.
3. Choose Public. Do not worry about adding a README.
4. Upload all files from this folder into the repository root.
5. Go to Settings > Pages.
6. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / root
7. Click Save.
8. After GitHub publishes it, open the Pages link on your iPhone in Safari.
9. Tap Share > Add to Home Screen.
10. Open it once while online. After that it should work offline.

Your URL will usually look like:
https://YOUR-GITHUB-USERNAME.github.io/golf-club-selector/
