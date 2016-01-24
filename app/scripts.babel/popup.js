'use strict';
$(() => {
    Object.keys(adList).forEach((k) => {
        var v = adList[k];
        Object.keys(v.sites).forEach((site) => {
            $('<button id="' + k + '" data-site="' + site + '"  >' + v.title + ': ' + site + '</button>').appendTo($('#container')).on('click', (function(adId, siteId) {
                return () => {
                    chrome.extension.sendRequest({
                        id: adId,
                        siteId: siteId
                    });
                };
            })(k, site));
        });
    });
});
