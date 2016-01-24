'use strict';
var adList = {
    roomKillara: {
        title: '悉尼北区█近Chatswood█一房招租，Gordon火车站700米',
        content: `
现有一房招租。寻爱洁，[b][color=Red]不吸烟（这个很介意，必要条件）[/color][/b]，容易相处的租客，IT人士优先。租金260/w，包家具，水电上网。联系方式：0481 081 960 微信或QQ： 34566190 （请注明租房）

入住时间： 3月1号以后

[b]关于房间：[/b]

屋子面积 3×4.6，有入墙大衣柜和储物间。和旁边的房间共享一个卫生间和一个淋浴间。 

[b]周边环境：[/b]

1. 交通：
离Gordon火车站最近，700米，其次Killara-800米。Gordon火车站旁边有bus站，达Macquarie大学（非高峰期10多分钟）。Gordon算是个大站，火车班次比较多

2. 购物：
离Shopping center 1000米，內有Woolworth，晚上开到8点；车站周围还有果蔬店，亚洲杂货店，各式餐馆，咖啡店,Pizza店等。最近的华人社区是chatswood，开车10分钟，也有train直达（三站）。

3. 其它：
离图书馆 1000米。整个区环境优雅，治安很好，典型的人少树多。

[b]现在居住人员情况及对租客的要求：[/b]
房东是友善，易相处的80后couple，双职工，均IT人士。长久以来，租客一直是IT人士，年龄相仿，大家相处的很开心，所以如果你是一位好相处的IT人士

请赶快联系我们吧，欢迎入住！
        `,
        sites: {
            ourstep: {
                url: 'http://www.oursteps.com.au/bbs/home.php?mod=space&do=thread&view=me',
                init: 'link',
                link: function() {
                    var me = adList.roomKillara;
                    return new Promise(
                        (resolve) => {
                            if ($('a:contains("' + me.title + '")').length > 0) {
                                resolve('edit');
                                $('a:contains("' + me.title + '")').removeAttr('target')[0].click();
                            } else {
                                resolve('clickNew');
                                window.location.href = 'http://www.oursteps.com.au/bbs/forum.php?mod=forumdisplay&fid=95';
                            }

                        });
                },
                edit: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('delete');
                            $('a:contains("编辑")')[0].click();
                        });
                },
                delete: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('afterDelete');
                            $('#delete').attr('value', '1');
                            $('#postform').submit();
                        });
                },
                afterDelete: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('clickNew');
                        });
                },
                clickNew: function() {
                    return new Promise(
                        (resolve) => {
                            $('#newspecial')[0].click();
                            resolve('enterNew');
                        });
                },
                enterNew: function() {
                    var me = adList.roomKillara;
                    return new Promise(
                        (resolve) => {
                            $('#subject').val(me.title);
                            $('#typeid_ctrl')[0].click();
                            $('#typeid_ctrl_menu>ul>li:contains("NSW")')[0].click();
                            $('#e_textarea').val(me.content);
                            $('#e_image')[0].click();
                            resolve('end');
                        });
                },
                end: () => {
                    return new Promise(
                        (resolve) => {
                            resolve();
                        });

                }
            },
            freeoz: {
                url: 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my',
                init: 'link',
                link: function() {
                    var me = adList.roomKillara;
                    return new Promise(
                        (resolve) => {
                            if ($('a:contains("' + me.title + '")').length > 0) {
                                resolve('edit');
                                $('a:contains("' + me.title + '")').removeAttr('target')[0].click();
                            } else {
                                resolve('clickNew');
                                window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my';
                            }

                        });
                },
                edit: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('delete');
                            $('a:contains("编辑")')[0].click();
                        });
                },
                delete: function() {
                    return new Promise(
                        (resolve) => {
                            $('#extra_additional_b')[0].click();
                            resolve('afterDelete');
                            $('#delete').attr('value', '1');
                            $('#postform').submit();
                        });
                },
                afterDelete: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('clickNew');
                        });
                },
                clickNew: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('enterNew');
                            window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=post&action=newthread&fid=7068';
                        });
                },
                enterNew: function() {
                    var me = adList.roomKillara;
                    return new Promise(
                        (resolve) => {
                            $('#subject').val(me.title);
                            $('#typeid_ctrl')[0].click();
                            $('#typeid_ctrl_menu>ul>li:contains("悉尼")')[0].click();
                            $('#e_textarea').val(me.content);
                            $('#e_image')[0].click();
                            resolve('end');
                        });
                },
                end: () => {
                    return new Promise(
                        (resolve) => {
                            resolve();
                        });

                }

            },
            dida: {
                url: 'http://bbs.tigtag.com/forum.php?mod=guide&view=my',
                init: 'link',
                link: function() {
                    var me = adList.roomKillara;
                    return new Promise(
                        (resolve) => {
                            if ($('a:contains("' + me.title + '")').length > 0) {
                                resolve('edit');
                                $('a:contains("' + me.title + '")').removeAttr('target')[0].click();
                            } else {
                                resolve('clickNew');
                                window.location.href = 'http://bbs.tigtag.com/forum.php?mod=forumdisplay&fid=48';
                            }

                        });
                },
                edit: function() {
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
                },
                delete: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('clickNew');
                            $('#delete').attr('value', '1');
                            $('#postform').submit();
                        });
                },
                clickNew: function() {
                    return new Promise(
                        (resolve) => {
                            $('#newspecial')[0].click();
                            resolve('enterNew');
                        });
                },
                enterNew: function() {
                    var me = adList.roomKillara;
                    return new Promise(
                        (resolve) => {
                            $('#subject').val(me.title);
                            $('#typeid_ctrl')[0].click();
                            $('#typeid_ctrl_menu>ul>li:contains("悉尼")')[0].click();
                            $('#e_iframe').contents().find('body').html(me.content.replace(/\n/g, '<br/>'))
                            $('#e_textarea').val(me.content);
                            $('#e_image')[0].click();
                            resolve('end');
                        });
                },
                end: () => {
                    return new Promise(
                        (resolve) => {
                            resolve();
                        });

                }

            }
        }
    },
    ford: {
        title: '悉尼北区转让2000年Ford Laser Rego至明年1月',
        content: `
现转让Ford Laser 自动档 ，1.6排量，省油，15w公里，两厢4门 hatch back，后排椅子放下后很能装东西，空调也很给力，有dvd player等。2把钥匙，log book全。车里外都保养的很好，有一点小挂蹭，无事故。rego到2017年1月

转让价4500，适合新手练车，家庭代步

车在悉尼Gordon，有兴趣的可以联系电话 0481 081 960 看车，谢谢.
        `,
        sites: {
            ourstep: {
                url: 'http://www.oursteps.com.au/bbs/home.php?mod=space&do=thread&view=me',
                init: 'link',
                link: function() {
                    var me = adList.ford;
                    return new Promise(
                        (resolve) => {
                            if ($('a:contains("' + me.title + '")').length > 0) {
                                resolve('up');
                                $('a:contains("' + me.title + '")').removeAttr('target')[0].click();
                            } else {
                                resolve('clickNew');
                                window.location.href = 'http://www.oursteps.com.au/bbs/forum.php?mod=forumdisplay&fid=109';
                            }

                        });
                },
                up: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('close');
                            $('#fastpostmessage').val('顶顶顶顶顶顶顶顶');
                            $('#fastpostsubmit')[0].click();
                            window.location.href = 'http://www.oursteps.com.au/bbs/forum.php?mod=forumdisplay&fid=109';
                        });
                },
                clickNew: function() {
                    return new Promise(
                        (resolve) => {
                            $('#newspecial')[0].click();
                            resolve('enterNew');
                        });
                },
                enterNew: function() {
                    var me = adList.ford;
                    return new Promise(
                        (resolve) => {
                            $('#subject').val(me.title);
                            $('#typeid_ctrl')[0].click();
                            $('#typeid_ctrl_menu>ul>li:contains("NSW")')[0].click();
                            $('#e_textarea').val(me.content);
                            $('#e_image')[0].click();
                            resolve('end');
                        });
                },
                end: () => {
                    return new Promise(
                        (resolve) => {
                            resolve(false);
                        });

                },
                close: () => {
                    return new Promise(
                        (resolve) => {
                            resolve(true);
                        });

                }
            },
            freeoz: {
                url: 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my',
                init: 'link',
                link: function() {
                    var me = adList.ford;
                    return new Promise(
                        (resolve) => {
                            if ($('a:contains("' + me.title + '")').length > 0) {
                                resolve('up');
                                $('a:contains("' + me.title + '")').removeAttr('target')[0].click();
                            } else {
                                resolve('clickNew');
                                window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my';
                            }

                        });
                },
                up: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('close');
                            $('#fastpostmessage').val('顶顶顶顶顶顶顶顶');
                            $('#fastpostsubmit')[0].click();
                            window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=guide&view=my';
                        });
                },
                clickNew: function() {
                    return new Promise(
                        (resolve) => {
                            resolve('enterNew');
                            window.location.href = 'http://www.freeoz.org/ibbs/forum.php?mod=post&action=newthread&fid=7070';
                        });
                },
                enterNew: function() {
                    var me = adList.ford;
                    return new Promise(
                        (resolve) => {
                            $('#subject').val(me.title);
                            $('#typeid_ctrl')[0].click();
                            $('#typeid_ctrl_menu>ul>li:contains("悉尼")')[0].click();
                            $('#e_textarea').val(me.content);
                            $('#e_image')[0].click();
                            resolve('end');
                        });
                },
                end: () => {
                    return new Promise(
                        (resolve) => {
                            resolve(false);
                        });

                },
                close: () => {
                    return new Promise(
                        (resolve) => {
                            resolve(true);
                        });

                }
            },
            dida: {
                url: 'http://bbs.tigtag.com/forum.php?mod=guide&view=my',
                init: 'link',
                link: function() {
                    var me = adList.ford;
                    return new Promise(
                        (resolve) => {
                            if ($('a:contains("' + me.title + '")').length > 0) {
                                resolve('up');
                                $('a:contains("' + me.title + '")').removeAttr('target')[0].click();
                            } else {
                                resolve('clickNew');
                                window.location.href = 'http://bbs.tigtag.com/forum.php?mod=forumdisplay&fid=182';
                            }

                        });
                },
                up: function() {
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
                },
                clickNew: function() {
                    return new Promise(
                        (resolve) => {
                            $('#newspecial')[0].click();
                            resolve('enterNew');
                        });
                },
                enterNew: function() {
                    var me = adList.ford;
                    return new Promise(
                        (resolve) => {
                            $('#subject').val(me.title);
                            $('#typeid_ctrl')[0].click();
                            $('#typeid_ctrl_menu>ul>li:contains("NSW")')[0].click();
                            $('#e_textarea').val(me.content);
                            $('#e_image')[0].click();
                            resolve('end');
                        });
                },
                end: () => {
                    return new Promise(
                        (resolve) => {
                            resolve(false);
                        });

                },
                close: () => {
                    return new Promise(
                        (resolve) => {
                            resolve(true);
                        });

                }
            }
        }
    }
};
console.log(Object.keys(adList).length);
