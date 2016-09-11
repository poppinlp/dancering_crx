chrome.contextMenus.create({
    'title' : 'use Dusic to download',
    'contexts' : ['link'],
    'onclick' : download,
    'documentUrlPatterns' : ['http://www.dancering.cn/*'],
    'targetUrlPatterns' : ['http://www.dancering.cn/music_show-*']
});

function download(info) {
    var url = info.linkUrl;
    var temp = url.indexOf('music_show-');
    if(temp !== -1) {
        url = url.substr(temp + 11);
        url = url.substr(0, url.indexOf('.html'));
        url = 'http://www.dancering.cn/source/module/forum/get_filecont.php?aid=' + base64encode(url);
        if(chrome.downloads !== null) {
            chrome.downloads.download({'url':url})
        } else {
            chrome.tabs.create({'url':url})
        }
    } else {
        alert('目前只能下载单个曲子哦，整个页面列表神马的，再等等吧 >_<');
    }
}
