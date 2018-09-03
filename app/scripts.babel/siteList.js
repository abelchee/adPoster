'use strict';
var siteList = {
  ourstep: {
    url: 'http://www.oursteps.com.au/bbs/home.php?mod=space&do=thread&view=me',
    init: 'link',
    ctrl: function (adId, siteId) {
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
    ctrl: function (adId, siteId) {
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
    ctrl: function (adId, siteId) {
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
    ctrl: function (adId, siteId) {
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
    ctrl: function (adId, siteId) {
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
            $('#typeoption_money_522').val(config.rental);
            $('#typeoption_acreage_522').val(config.area);
            $('#typeoption_zftype_522:nth-of-type(1)')[1].click();
            $('#typeoption_zfhuxing_522:nth-of-type(1)')[3].click();
            $('#typeoption_water_electricity:nth-of-type(1)')[0].click();
            $('#typeoption_internet_price:nth-of-type(1)')[0].click();
            $('#typeoption_source:nth-of-type(1)')[0].click();
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
  }, yiyi: {
    url: 'http://www.yeeyi.com/bbs/forum.php?mod=guide&view=my',
    init: 'link',
    ctrl: function (adId, siteId) {
      var ad = adList[adId];
      var config = ad.sites[siteId];
      this.link = () => {

        return new Promise(
          (resolve) => {
            if ($('a:contains("' + ad.title + '")').length > 0) {
              resolve('edit');
              $('a:contains("' + ad.title + '")').removeAttr('target')[0].click();
            } else {
              resolve('enterNew');
              window.location.href = 'http://www.yeeyi.com/bbs/forum.php?mod=post&action=newthread&fid=' + config.fid;
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
            resolve('enterNew');
            window.location.href = 'http://www.yeeyi.com/bbs/forum.php?mod=post&action=newthread&fid=' + config.fid;
          });
      };
      this.enterNew = () => {
        return new Promise(
          (resolve) => {
            $('input.pxe').val(ad.title);
            $('#city').val(2);
            $('#suburb').val('Killara');
            $('input[name=postcode]').val('2071');
            $('select.type').val('4');
            $('input[name=house_rents]').val(config.rental);
            $('select[name=rent_type]').val('3');
            $('input[name="house_equipment[]"][value=1]').click();
            $('input[name="house_equipment[]"][value=2]').click();
            $('input[name="house_equipment[]"][value=3]').click();
            $('input[name="house_equipment[]"][value=4]').click();
            $('input[name="house_equipment[]"][value=6]').click();
            $('input[name="house_equipment[]"][value=7]').click();
            $('input[name="house_equipment[]"][value=8]').click();
            $('input[name="house_equipment[]"][value=9]').click();
            $('input[name="house_equipment[]"][value=11]').click();
            $('input[name="house_equipment[]"][value=12]').click();
            $('input[name="bus_info[]"][value=1]').click();
            $('input[name="bus_info[]"][value=2]').click();
            $('input[name="bus_info[]"][value=3]').click();
            $('input[name="bus_info[]"][value=4]').click();
            $('input[name=poster]').val('Xuting Qiu');
            $('input[name=tel]').val('0481081960');
            $('input[name=weixin]').val('34566190');
            $('input[name=qq]').val('34566190');
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
    ctrl: function (adId, siteId) {
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
    url: 'http://www.sydneytoday.com',
    init: 'up',
    ctrl: function (adId, siteId) {
      var ad = adList[adId];
      var config = ad.sites[siteId];
      this.up = () => {
        return new Promise(
          (resolve) => {
            resolve('end');
            window.location.href = 'http://www.sydneytoday.com/user/myposts';
          });
      };
      this.end = () => {
        return new Promise(
          (resolve) => {
            var button = $('div.account-itemcell-title:contains("' + ad.title + '")').parent().parent().parent().parent();
            console.log(button);
            button.find('button[data-type=rent]');

            button.click();
            //resolve(true);
          });

      };
    }
  }
};
