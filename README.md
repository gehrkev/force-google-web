# Force Google Web

**Force Google Web** is a simple Firefox addon designed to append `&udm=14` to your Google search URL, ensuring that Google uses the 'Web' search option by default. This mode offers a cleaner, more traditional search experience by removing AI overviews, ads, and other extras.

According to [this Tedium article](https://tedium.co/2024/05/17/google-web-search-make-default/), using the Web view can enhance your search experience by focusing on core search results.

## Features
- Automatically appends `&udm=14` to Google search URLs.
- Works from the address bar and Google homepage.
- Provides a cleaner search interface by default.

## Prerequisites
- Firefox browser.

## Installation
1. **Prepare the Files:**
   - Make sure you have `background.js` and `manifest.json` ready.
   
2. **Compress the Files:**
   - Select both `background.js` and `manifest.json`.
   - Compress them into a ZIP file. Ensure the ZIP file contains only these files directly (not in a directory).

3. **Install the Addon:**
   - Open Firefox.
   - Go to the Addons settings page (`about:addons`).
   - Click the cog icon and select "Install Add-on From File".
   - Choose the ZIP file you created and install it.

## Usage
Once installed, the addon will automatically modify Google search URLs to use the 'Web' search option. Simply search as you normally would from the address bar or the Google homepage, and enjoy a cleaner search experience.
