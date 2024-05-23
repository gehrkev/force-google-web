browser.webRequest.onBeforeRequest.addListener(
    function (details) {
        let url = new URL(details.url);

        if (url.hostname === "www.google.com" && url.pathname === "/search") {
            if (!url.search.includes('udm=14')) {
                url.searchParams.append('udm', '14');
                return {redirectUrl: url.toString()};
            }
        }
    },
    {
        urls: ["*://www.google.com/*"],
        types: ["main_frame"]
    },
    ["blocking"]
);