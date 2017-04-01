/*	Referenced by published pages with Multimedia elements(windows media player type only).
	The reason to have both vbscript and javascript is that videos encoded by wmp version 7 
	and above will not play in lower versions. Therefore, we need to detect wmp version.
	However, the javascript detection from microsoft support site was generating errors,
	so we decided to use vbscript for wmp version detection. But Netscape didn't like vbscripts,
	so we need to keep javascript for Netscape. 
	
	The Object tag here is for Netscape7 and embed tag is for versions lower than that.
*/
function wmpJS(width, height, uniqueID, sourceFile, autoPlay, showControl, repeat){
	
	var embed = function(){
        var isTrue = function(v){
            return v === true || v === 'true';
        };
        
        var quote = function(v){
            return '"'+ v +'"';
		};
		var mimeType = 'application/x-ms-wmp';
		if ( !!navigator.mimeTypes && !!navigator.mimeTypes[mimeType] && !!navigator.mimeTypes[mimeType].enabledPlugin ){
			var props = [
				'type='					+ quote(mimeType)
				,'pluginspage="http://www.microsoft.com/windows/windowsmedia/download/"'
				,'src='					+ quote(sourceFile)
				,'Name='				+ quote(uniqueID)
				,'ShowControls='		+ quote(showControl)
				,'AutoStart='			+ quote(autoPlay)
				,'Loop='				+ quote(repeat)
				,'playcount='			+ quote(isTrue(repeat) ? '2147483647' : '1')
				,'stretchtofit="1"'
				,'uiMode='				+ quote(isTrue(showControl) ? 'full' : 'none')
				,'width='				+ quote(width)
				,'height='				+ quote(height)
			];
			return '<embed ' + props.join(' ') + '><embed>';
		} else {
			var pluginUrl = navigator.appVersion.indexOf('Mac') != -1 ? 'http://windows.microsoft.com/en-US/windows/products/windows-media-player/wmcomponents' : 'http://port25.technet.com/pages/windows-media-player-firefox-plugin-download.aspx';
			return '<a href="'+ pluginUrl +'">Windows Media Player Required</a>';
		}
	};
	
	if ( navigator.appName == 'Netscape' ){
		var html = '<object classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" ' +
			'  codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,7,1112" ' +
			'  width="' + width + '" height="' + height + '" id="' + uniqueID + '"> ' +
			'  <param name="src"  value="' + sourceFile + '" /> ' +
			'  <param name="autoStart" value="' + autoPlay + '" /> ' +
			'  <param name="showControls" value="' + showControl + '" /> ' +
			'  <param name="loop" value="' + repeat + '" /> ' +
			embed() +
			'</object>';
		document.write(html);
	}
	
}