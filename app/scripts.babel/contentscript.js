'use strict';
$(() => {
    chrome.runtime.sendMessage({
        action: 'read'
    }, (response) => {
        console.log(response);
        if (response.state) {
            var ctrl = new siteList[response.siteId].ctrl(response.id, response.siteId);
            ctrl[response.state]().then((state) => {
                chrome.runtime.sendMessage({
                    action: 'update',
                    state: state
                });
            });
        }
    });
});
