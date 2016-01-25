'use strict';
$(() => {
    Object.keys(adList).forEach((k) => {
        var v = adList[k];
        $('<button id="' + k + '">' + v.title + '</button>').appendTo($('#container')).on('click', (function(adId) {
            return () => {
                chrome.extension.sendRequest({
                    id: adId
                });
            };
        })(k));
    });
});
