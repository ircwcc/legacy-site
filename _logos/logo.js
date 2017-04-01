function logoElementlogo()
{


	if (navigator.userAgent.indexOf("Mozilla/3") != -1)
	{
		var msg = 'Sorry, since you are using an old version of Netscape, you may not be able to access all the pages in this Web site.';
		document.write(msg);
	}
	else
	{

		var strHTML = '';

				strHTML += '<a  href="' + strRelativePathToRoot + 'index.html"';
				strHTML += ' target="_self" >';
				strHTML += '	<img src="' + strRelativePathToRoot + 'Pictures/Logos/Ircwwc.gif"';
				strHTML += ' alt=""';
				strHTML += ' border="0"';
				strHTML += ' width="186"';
				strHTML += ' height="221" >';
				strHTML += '</a>';


		document.write(strHTML);
	}
}


function netscapeDivChecklogo()
{




	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);

	if ( (strAppName == "Netscape") &&
		(appVer >= 4.0 && appVer < 5) ) {
		document.write("</DIV>");
	}
}



logoElementlogo();


netscapeDivChecklogo();

