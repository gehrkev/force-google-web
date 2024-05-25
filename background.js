browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        let url = new URL(details.url);

        if (url.hostname === "www.google.com" && url.pathname === "/search") {
            // Check if the URL is using a non-web search mode (e.g., image, news, video, etc.)
            let isNonWebSearch = url.searchParams.has('tbm') ||
                url.searchParams.has('tbs') ||
                url.searchParams.has('source');

            // Check if 'udm=14' needs to be added or removed
            if (!isNonWebSearch) {
                // For web searches, ensure 'udm=14' is set if not already present or empty
                if (!url.searchParams.has('udm') || url.searchParams.get('udm') === '') {
                    url.searchParams.set('udm', '14');
                    return { redirectUrl: url.toString() };
                }
            } else {
                // For non-web searches (e.g., image search), remove 'udm' if present
                if (url.searchParams.has('udm')) {
                    url.searchParams.delete('udm');
                    return { redirectUrl: url.toString() };
                }
            }
        } else if (url.hostname === "www.google.com" && url.pathname === "/") {
            // Handle searches initiated from Google homepage
            let searchQuery = url.searchParams.get('q');

            // Redirect to search page with 'udm=14' appended
            if (searchQuery && !url.searchParams.has('udm')) {
                url = new URL(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&udm=14`);
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