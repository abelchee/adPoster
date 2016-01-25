'use strict';
var siteList = {
    ourstep: {
        url: 'http://www.oursteps.com.au/bbs/home.php?mod=space&do=thread&view=me',
        init: 'link',
        ctrl: function(adId, siteId) {
            var ad = adList[adId];
            var config = ad.sites[siteId];
            this.link = () => {
                return new Promise(
                    (resolve) => {
                        if ($('a:contains("' + ad.title + '")').length > 0) {
                            resolve('edit');
                            $('a:contains("' + ad.title + '")').removeAttr('target')[0].click();
                        } else {
                            resolve('clickNew');
                            window.location.href = 'http://www.oursteps.com.au/bbs/forum.php?mod=forumdisplay&fid=' + config.fid;
                        }

                    });
            };
            this.edit = () => {
                return new Promise(
                    (resolve) => {
                        resolve('delete');
                        $('a:contains("编辑")')[0].click();
                    });
            };
            this.delete = () => {
                return new Promise(
                    (resolve) => {
                        resolve('afterDelete');
                        $('#delete').attr('value', '1');
                        $('#postform').submit();
                    });
            };
            this.afterDelete = () => {
                return new Promise(
                    (resolve) => {
                        resolve('clickNew');
                    });
            };
            this.clickNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#newspecial')[0].click();
                        resolve('enterNew');
                    });
            };
            this.enterNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#subject').val(ad.title);
                        $('#typeid_ctrl')[0].click();
                        $('#typeid_ctrl_menu>ul>li:contains("' + config.select + '")')[0].click();
                        $('#e_textarea').val(ad.content);
                        $('#e_image')[0].click();
                        resolve('end');
                    });
            };
            this.end = () => {
                return new Promise(
                    (resolve) => {
                        resolve();
                    });

            };
        }
    },
    ourstepUp: {
        url: 'http://www.oursteps.com.au/bbs/home.php?mod=space&do=thread&view=me',
        init: 'link',
        ctrl: function(adId, siteId) {
            var ad = adList[adId];
            var config = ad.sites[siteId];
            this.link = () => {
                return new Promise(
                    (resolve) => {
                        if ($('a:contains("' + ad.title + '")').length > 0) {
                            resolve('up');
                            $('a:contains("' + ad.title + '")').removeAttr('target')[0].click();
                        } else {
                            resolve('clickNew');
                            window.location.href = 'http://www.oursteps.com.au/bbs/forum.php?mod=forumdisplay&fid=' + config.fid;
                        }

                    });
            };
            this.up = () => {
                return new Promise(
                    (resolve) => {
                        resolve('close');
                        $('#fastpostmessage').val('顶顶顶顶顶顶顶顶');
                        $('#fastpostsubmit')[0].click();
                        window.location.href = 'http://www.oursteps.com.au/bbs/forum.php?mod=forumdisplay&fid=' + config.fid;
                    });
            };
            this.clickNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#newspecial')[0].click();
                        resolve('enterNew');
                    });
            };
            this.enterNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#subject').val(ad.title);
                        $('#typeid_ctrl')[0].click();
                        $('#typeid_ctrl_menu>ul>li:contains("' + config.select + '")')[0].click();
                        $('#e_textarea').val(ad.content);
                        $('#e_image')[0].click();
                        resolve('end');
                    });
            };
            this.end = () => {
                return new Promise(
                    (resolve) => {
                        resolve(false);
                    });

            };
            this.close = () => {
                return new Promise(
                    (resolve) => {
                        resolve(true);
                    });

            };
        }
    },
    freeoz: {
        url: 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my',
        init: 'link',
        ctrl: function(adId, siteId) {
            var ad = adList[adId];
            var config = ad.sites[siteId];
            this.link = () => {
                return new Promise(
                    (resolve) => {
                        if ($('a:contains("' + ad.title + '")').length > 0) {
                            resolve('edit');
                            $('a:contains("' + ad.title + '")').removeAttr('target')[0].click();
                        } else {
                            resolve('clickNew');
                            window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my';
                        }

                    });
            };
            this.edit = () => {
                return new Promise(
                    (resolve) => {
                        resolve('delete');
                        $('a:contains("编辑")')[0].click();
                    });
            };
            this.delete = () => {
                return new Promise(
                    (resolve) => {
                        $('#extra_additional_b')[0].click();
                        resolve('afterDelete');
                        $('#delete').attr('value', '1');
                        $('#postform').submit();
                    });
            };
            this.afterDelete = () => {
                return new Promise(
                    (resolve) => {
                        resolve('clickNew');
                    });
            };
            this.clickNew = () => {
                return new Promise(
                    (resolve) => {
                        resolve('enterNew');
                        window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=post&action=newthread&fid=' + config.fid;
                    });
            };
            this.enterNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#subject').val(ad.title);
                        $('#typeid_ctrl')[0].click();
                        $('#typeid_ctrl_menu>ul>li:contains("' + config.select + '")')[0].click();
                        $('#e_textarea').val(ad.content);
                        $('#e_image')[0].click();
                        resolve('end');
                    });
            };
            this.end = () => {
                return new Promise(
                    (resolve) => {
                        resolve();
                    });

            };
        }
    },
    freeozUp: {
        url: 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my',
        init: 'link',
        ctrl: function(adId, siteId) {
            var ad = adList[adId];
            var config = ad.sites[siteId];
            this.link = () => {
                return new Promise(
                    (resolve) => {
                        if ($('a:contains("' + ad.title + '")').length > 0) {
                            resolve('up');
                            $('a:contains("' + ad.title + '")').removeAttr('target')[0].click();
                        } else {
                            resolve('clickNew');
                            window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my';
                        }

                    });
            };
            this.up = () => {
                return new Promise(
                    (resolve) => {
                        resolve('close');
                        $('#fastpostmessage').val('顶顶顶顶顶顶顶顶');
                        $('#fastpostsubmit')[0].click();
                        window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my';
                    });
            };
            this.clickNew = () => {
                return new Promise(
                    (resolve) => {
                        resolve('enterNew');
                        window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=post&action=newthread&fid=' + config.fid;
                    });
            };
            this.enterNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#subject').val(ad.title);
                        $('#typeid_ctrl')[0].click();
                        $('#typeid_ctrl_menu>ul>li:contains("' + ad.select + '")')[0].click();
                        $('#e_textarea').val(ad.content);
                        $('#e_image')[0].click();
                        resolve('end');
                    });
            };
            this.end = () => {
                return new Promise(
                    (resolve) => {
                        resolve(false);
                    });

            };
            this.close = () => {
                return new Promise(
                    (resolve) => {
                        resolve(true);
                    });

            };
        }
    },
    dida: {
        url: 'http://bbs.tigtag.com/forum.php?mod=guide&view=my',
        init: 'link',
        ctrl: function(adId, siteId) {
            var ad = adList[adId];
            var config = ad.sites[siteId];
            this.link = () => {

                return new Promise(
                    (resolve) => {
                        if ($('a:contains("' + ad.title + '")').length > 0) {
                            resolve('edit');
                            $('a:contains("' + ad.title + '")').removeAttr('target')[0].click();
                        } else {
                            resolve('clickNew');
                            window.location.href = 'http://bbs.tigtag.com/forum.php?mod=forumdisplay&fid=' + config.fid;
                        }

                    });
            };
            this.edit = () => {
                return new Promise(
                    (resolve) => {
                        function callBack() {
                            if (('a:contains("编辑")').length === 0) {
                                setTimeout(callBack, 1000);
                            } else {
                                resolve('delete');
                                $('a:contains("编辑")')[0].click();
                            }
                        }
                        setTimeout(callBack, 1000);
                    });
            };
            this.delete = () => {
                return new Promise(
                    (resolve) => {
                        resolve('clickNew');
                        $('#delete').attr('value', '1');
                        $('#postform').submit();
                    });
            };
            this.clickNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#newspecial')[0].click();
                        resolve('enterNew');
                    });
            };
            this.enterNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#subject').val(ad.title);
                        $('#typeid_ctrl')[0].click();
                        $('#typeid_ctrl_menu>ul>li:contains("' + config.select + '")')[0].click();
                        $('#e_iframe').contents().find('body').html(ad.content.replace(/\n/g, '<br/>'))
                        $('#e_textarea').val(ad.content);
                        $('#e_image')[0].click();
                        resolve('end');
                    });
            };
            this.end = () => {
                return new Promise(
                    (resolve) => {
                        resolve();
                    });

            };
        }
    },
    didaUp: {
        url: 'http://bbs.tigtag.com/forum.php?mod=guide&view=my',
        init: 'link',
        ctrl: function(adId, siteId) {
            var ad = adList[adId];
            var config = ad.sites[siteId];
            this.link = () => {
                return new Promise(
                    (resolve) => {
                        if ($('a:contains("' + ad.title + '")').length > 0) {
                            resolve('up');
                            $('a:contains("' + ad.title + '")').removeAttr('target')[0].click();
                        } else {
                            resolve('clickNew');
                            window.location.href = 'http://bbs.tigtag.com/forum.php?mod=forumdisplay&fid=' + config.fid;
                        }

                    });
            };
            this.up = () => {
                return new Promise(
                    (resolve) => {
                        function callBack() {
                            if ($('#fastpostmessage').length === 0) {
                                setTimeout(callBack, 1000);
                            } else {
                                $('#fastpostmessage').val('顶顶顶顶顶顶顶顶顶顶顶');
                                $('#fastpostsubmit')[0].click();
                                resolve('close');
                                window.location.href = 'http://bbs.tigtag.com/forum.php?mod=guide&view=my';
                            }
                        }
                        setTimeout(callBack, 1000);
                    });
            };
            this.clickNew = () => {
                return new Promise(
                    (resolve) => {
                        $('#newspecial')[0].click();
                        resolve('enterNew');
                    });
            };
            this.enterNew = () => {
                var me = adList.ford;
                return new Promise(
                    (resolve) => {
                        $('#subject').val(ad.title);
                        $('#typeid_ctrl')[0].click();
                        $('#typeid_ctrl_menu>ul>li:contains("' + config.select + '")')[0].click();
                        $('#e_textarea').val(ad.content);
                        $('#e_image')[0].click();
                        resolve('end');
                    });
            };
            this.end = () => {
                return new Promise(
                    (resolve) => {
                        resolve(false);
                    });

            };
            this.close = () => {
                return new Promise(
                    (resolve) => {
                        resolve(true);
                    });

            };
        }
    },
    todaySydneyUp: {
        url: 'http://www.sydneytoday.com/my-posts',
        init: 'up',
        ctrl: function(adId, siteId) {
            var ad = adList[adId];
            var config = ad.sites[siteId];
            this.up = () => {
                return new Promise(
                    (resolve) => {
                        resolve(false);
                        $('a:contains("悉尼北区转让2000年Ford Laser Rego至明年1月")').parent().parent().find('a:contains("顶上首页")')[0].click();
                    });
            };
        }
    }
};
