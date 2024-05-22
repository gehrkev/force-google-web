# force-google-web
Simple Firefox addon to append ```&amp;udm=14``` to your Google search address (from the address bar and Google homepage), forcing it to use the 'Web' search option.

According to [this Tedium arcticle](https://tedium.co/2024/05/17/google-web-search-make-default/), using the Web view removes AI overviews, ads, and other extras, providing a cleaner, more traditional search experience.
To do so, you need to append ```&udm=14``` to your web address. This simple addon forces that so the Web view is the default option.

# How to use it
To use it, simply compress both *background.js* and *manifest.json* into a zip file (it's important to zip only the files, not a directory containing it) and, from the Addons settings page, click the cog icon and open "Install Add-on From File".
