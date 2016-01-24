'use strict';

chrome.runtime.onInstalled.addListener(details => {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({
    text: '\'Al'
});
var tabs = {};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var tab = sender.tab;
        if (tab.id in tabs) {
            if (request.action === 'read') {
                sendResponse({
                    id: tabs[tab.id].adId,
                    siteId: tabs[tab.id].siteId,
                    state: tabs[tab.id].state
                });
            } else {
                console.log(request);
                if (request.state && request.state !== true) {
                    tabs[tab.id].state = request.state;
                } else if (request.state === true) {
                    chrome.tabs.remove(tab.id);
                    delete tabs[tab.id];
                } else {
                    delete tabs[tab.id];
                }

            }
        }
    });
chrome.extension.onRequest.addListener(
    (request) => {
        console.log(request);
        chrome.tabs.create({
            url: adList[request.id].sites[request.siteId].url
        }, function(tab) {
            tabs[tab.id] = {
                tab: tab,
                id: tab.id,
                adId: request.id,
                siteId: request.siteId,
                state: adList[request.id].sites[request.siteId].init
            };
        });
    }
);
