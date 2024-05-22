// background.js
browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        let url = new URL(details.url);

        // Modify the search URL only if it matches Google search
        if (url.hostname === "www.google.com" && url.pathname === "/search") {
            // Check if &udm=14 is already present
            if (!url.search.includes('&udm=14')) {
                // Append &udm=14 to the existing query parameters
                url.searchParams.append('udm', '14');
                return { redirectUrl: url.toString() };
            }
        }
    },
    {
        urls: ["*://www.google.com/*"],
        types: ["main_frame"]
    },
    ["blocking"]
);