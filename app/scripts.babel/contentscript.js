'use strict';
$(() => {
    console.log($('a:contains("悉尼北区转让2000年Ford Laser Rego至明年1月")').parent().parent().find('a:contains("顶上首页")'));
    chrome.runtime.sendMessage({
        action: 'read'
    }, (response) => {
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
