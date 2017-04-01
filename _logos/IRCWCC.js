function logoElementIRCWCC()
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
				strHTML += ' target="" >';
				strHTML += '	<img src="' + strRelativePathToRoot + 'Pictures/Logos/Ircwwc.gif"';
				strHTML += ' alt=""';
				strHTML += ' border="0"';
				strHTML += ' width="173"';
				strHTML += ' height="205" >';
				strHTML += '</a>';


		document.write(strHTML);
	}
}


function netscapeDivCheckIRCWCC()
{




	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);

	if ( (strAppName == "Netscape") &&
		(appVer >= 4.0 && appVer < 5) ) {
		document.write("</DIV>");
	}
}



logoElementIRCWCC();


netscapeDivCheckIRCWCC();

