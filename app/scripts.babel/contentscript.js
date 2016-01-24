'use strict';
$(() => {
    chrome.runtime.sendMessage({
        action: 'read'
    }, (response) => {
        console.log(response);
        if (response.state) {
            adList[response.id].sites[response.siteId][response.state]().then((state) => {
                chrome.runtime.sendMessage({
                    action: 'update',
                    state: state
                });
            });
        }
    });
});
