
		var nav_2001reports = new Object();

		nav_2001reports.squareTab="Camel";
		nav_2001reports.italic="false";
		nav_2001reports.texturedButton="Brick";
		nav_2001reports.border="";
		nav_2001reports.funButton="Arts_and_Crafts";
		nav_2001reports.importedImageMouseOver="";
		nav_2001reports.holidayButton="Christmas_Ornaments";
		nav_2001reports.verticalSpacing="10";
		nav_2001reports.modernButton="Industrial";
		nav_2001reports.brightButton="Chicky";
		nav_2001reports.buttonCategory="modern";
		nav_2001reports.mouseoverEffect="true";
		nav_2001reports.selectedTextcolor="#B91806";
		nav_2001reports.mouseoverUnderline="false";
		nav_2001reports.imageHeight="41";
		nav_2001reports.mouseoverBold="false";
		nav_2001reports.orientation="vertical";
		nav_2001reports.mouseoverTextcolor="#B91806";
		nav_2001reports.hasLinks="true";
		nav_2001reports.mouseoverItalic="false";
		nav_2001reports.type="Navigation";
		nav_2001reports.sophisticatedButton="Antique";
		nav_2001reports.background="";
		nav_2001reports.justification="center";
		nav_2001reports.bold="true";
		nav_2001reports.horizontalWrap="5";
		nav_2001reports.lineColor="#000000";
		nav_2001reports.selectedBold="false";
		nav_2001reports.basicTab="White";
		nav_2001reports.version="5";
		nav_2001reports.basicButton="Gray";
		nav_2001reports.horizontalSpacing="10";
		nav_2001reports.shinyButton="Shiny_Aqua";
		nav_2001reports.textColor="#000000";
		nav_2001reports.imageWidth="138";
		nav_2001reports.accentStyle="Arrow";
		nav_2001reports.selectedEffect="true";
		nav_2001reports.style="buttons";
		nav_2001reports.simpleButton="Autumn_Leaves";
		nav_2001reports.graphicSelected="true";
		nav_2001reports.navID="nav_2001reports";
		nav_2001reports.selectedUnderline="false";
		nav_2001reports.textFont="Helvetica";
		nav_2001reports.numLinks="1";
		nav_2001reports.selectedItalic="false";
		nav_2001reports.darkButton="Basic_Black";
		nav_2001reports.dirty="false";
		nav_2001reports.importedImageSelected="";
		nav_2001reports.graphicMouseover="true";
		nav_2001reports.underline="false";
		nav_2001reports.importedImage="";
		nav_2001reports.localPreview="false";
		nav_2001reports.lineWidth="2";
		nav_2001reports.textSize="11";
		nav_2001reports.accentType="none";
		nav_2001reports.mouseoverBgcolor="";
		nav_2001reports.accentColor="Black";
		nav_2001reports.selectedBgcolor="";
		nav_2001reports.tabCategory="basic";
		
		nav_2001reports.navName = "2001reports";
		nav_2001reports.imagePath = "../../../../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
		nav_2001reports.selectedImagePath = "../../../../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
		nav_2001reports.mouseOverImagePath = "../../../../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
		nav_2001reports.imageWidth = "138";
		nav_2001reports.imageHeight = "41";
		nav_2001reports.fontClass = "size11 Helvetica11";
		nav_2001reports.fontFace = "Helvetica, Arial, sans-serif";

		
		
		var baseHref = '';
		
		if (document.getElementsByTagName)
		{
			
			var base = document.getElementsByTagName('base');
			
			if (base && base.length > 0)
			{
				
				if (base[0].href != undefined)
				{
					
					baseHref = base[0].href;
					
					if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '../../../../index.html')
					{
						baseHref += '../../../../index.html';
					}
				}
			}
		}
		
		nav_2001reports.links=new Array(1);
	
		
		var nav_2001reports_Link1 = new Object();
		nav_2001reports_Link1.type = "existing";
		nav_2001reports_Link1.displayName = "Battle&nbsp;Reports";
		nav_2001reports_Link1.linkWindow = "_self";
		nav_2001reports_Link1.linkValue = "Battle-Reports.html";
		nav_2001reports_Link1.linkIndex = "1";
		nav_2001reports.links[0] = nav_2001reports_Link1;

		




function renderGraphicalHTML(Navigation, strTpGif)
{
	var strHTML = '';
	strHTML += '<table border="0" cellspacing="0" cellpadding="0">';

	var i;
	for(i = 0; i < Navigation.links.length; i++)
	{
		strHTML += renderGraphicalLink(Navigation, Navigation.links[i], strTpGif);	
	}
	
	strHTML += '</table>';
	return strHTML;
}

function mouseOn(tdCell, newBackgroundImage) 
{
	tdCell.style.backgroundImage = 'url(' + newBackgroundImage + ')';
}

function mouseOff(tdCell, newBackgroundImage)
{
	tdCell.style.backgroundImage = 'url(' + newBackgroundImage + ')';
}

function getGraphicMouseOverHandler(Navigation, bIsCurrentPage)
{
	
	if (Navigation.mouseoverEffect != 'true') return '';

	if((Navigation.graphicSelected=='true' || Navigation.selectedTextcolor) && bIsCurrentPage && 'true' == Navigation.selectedEffect)
	{
		return '';
	}
	var bShowMouseoverText = !(bIsCurrentPage && 'true' == Navigation.selectedEffect && Navigation.selectedTextcolor);
	var strMouseOver = '';
	var strMouseOut = '';
	
	if(Navigation.graphicMouseover=='true')
	{
		strMouseOver += ' mouseOn(this, \'' + Navigation.mouseOverImagePath +  '\');';
		strMouseOut += ' mouseOff(this, \'' + Navigation.imagePath + '\');';
	}		
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if(bIsCurrentPage && 'true' == Navigation.selectedEffect)
	{
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor : (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor : Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor : Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	}
	else
	{
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor : Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	strMouseOver += ' textMouseOn(this, \'' + textColor + '\', \'' + bold + '\', \'' + underline + '\', \'' + italic + '\');';
	strMouseOut += ' textMouseOff(this, \'' + baseTextColor + '\', \'' + baseBold + '\', \'' + baseUnderline + '\', \'' + baseItalic + '\');';
	return ' onMouseOver="' + strMouseOver + '" onMouseOut="' + strMouseOut + '"';
}	


function getGraphicalStyle(Navigation, strImg, strFontColor, bold, italic, underline, bNetscape) 
{
	var strStyle = ' style="';
	
	strStyle += 'cursor: pointer; cursor: hand; '; 
	strStyle += 'color:' + strFontColor + ';';
	strStyle += 'background-image:url(' + strImg + ');';
	strStyle += 'background-repeat:no-repeat;';
	strStyle += 'background-position:' + Navigation.justification + ';';

	if(!bNetscape)
	{
		if (bold) strStyle += 'font-weight: bold;';
		if (italic) strStyle += 'font-style: italic;';
		if (underline) strStyle += 'text-decoration: underline;';
	}
	
		
	strStyle += Navigation.justification;			
	
	
	strStyle += '" ';
	
	return strStyle;
}

function renderGraphicalLink(Navigation, Link, strTpGif)
{
	var strImg = Navigation.imagePath;
	var strFontColor = Navigation.textColor;
	var bIsCurrentPage = isCurrentPage(Link);
	var strLinkValue = fixLinkValue(Link);
	var bLastLink = Link.linkIndex == Navigation.numLinks;
	var nColIndex = 0;
	
	if(Navigation.orientation=='horizontal')
	{
		nColIndex = (Link.linkIndex - 1) % Navigation.horizontalWrap;
	}
	
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) 
	{
		if(Navigation.graphicSelected=='true')
		{
			strImg = Navigation.selectedImagePath;	
		}
		
		if(Navigation.selectedTextcolor)
		{
			strFontColor = Navigation.selectedTextcolor;	
		}
	}
	
	
	var bNetscape = false;
	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);
	var nGeneralPadding = 10;	
	
	if ( (strAppName == 'Netscape') &&
				(appVer >= 4.0 && appVer < 5) ) 
	{  
		bNetscape = true;
	}
	
	var strHTML = '';
	
	if(Navigation.orientation=='horizontal')
	{
		if( (Link.linkIndex % Navigation.horizontalWrap) == 1) 
		{
			strHTML += '<TR ALIGN="CENTER" VALIGN="MIDDLE">';
			strHTML += '<TD>';
			strHTML += '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0">';
			strHTML += '<TR>';
		}	
	}
	else
	{
		
		strHTML += '<TR>'
	}

	
	
	strHTML += '<TD NOWRAP HEIGHT="' + Navigation.imageHeight + '"';
	
	strHTML += ' ALIGN="' + Navigation.justification + '" VALIGN="MIDDLE"';
	
	
	strHTML += ' id="'+Navigation.navName+'_Link'+Link.linkIndex+'"';
	
	if(!bNetscape)
	{
		
		strHTML += getGraphicalStyle(
			Navigation, 
			strImg, 
			strFontColor,
			((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedBold) : ('true' == Navigation.bold)),
			((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedItalic) : ('true' == Navigation.italic)),
			((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedUnderline) : ('true' == Navigation.underline)),
			bNetscape
		);
	}
	else
	{
		
		if(bIsCurrentPage && 'true' == Navigation.selectedEffect)
		{
			strHTML += ' CLASS="navBackgroundSelected' + Navigation.navName + '" ';
		}
		else
		{
			strHTML += ' CLASS="navBackground' + Navigation.navName + '" ';
		}
	}
		
	if(!bNetscape)
	{		
		
		var strOnClick = getOnClick(strLinkValue, Link.linkWindow); 
		
		
		var strMouseOver = getGraphicMouseOverHandler(Navigation, bIsCurrentPage);
		
		strHTML += strOnClick + strMouseOver;
	}
	
	if(bNetscape)
	{
		strHTML += ' width="' + Navigation.imageWidth + '"';
	}
	
	strHTML += '>';  
	
	
	var strFormattingStart = ''; 
	var strFormattingEnd = '';
	
	if (bNetscape)
	{
		if((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedItalic) : ('true' == Navigation.italic))
		{
			strFormattingStart += '<I>';
			strFormattingEnd = '</I>' + strFormattingEnd;
		}
		if((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedBold) : ('true' == Navigation.bold))
		{
			strFormattingStart += '<B>';
			strFormattingEnd = '</B>' + strFormattingEnd;
		}
	}
	
	
	if(!bNetscape)
	{
		var nDivWidth = Navigation.imageWidth;
		
		if(Navigation.justification != 'center')
		{
			nDivWidth = nDivWidth - nGeneralPadding;
		}
		strHTML += '<DIV ';
		strHTML += ' STYLE="width:' + nDivWidth + 'px';
		
		if(Navigation.justification != 'center')
		{
			strHTML += ';margin-' + Navigation.justification + ':';
			strHTML += nGeneralPadding + 'px';	
		}
		strHTML+='">';
	}
	
	if(bNetscape)
	{
		if(Navigation.justification == 'left')
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="1" BORDER="0">';	
		}

		
		strHTML += '<A HREF="' + strLinkValue + '" TARGET="';

		
		var strLinkTarget = Link.linkWindow;
		if(strLinkTarget == '_self')
		{
			strLinkTarget = '_parent';
		}
				
		strHTML += strLinkTarget + '">'; 
	}	
	
	
	strHTML += '<FONT';
	strHTML += ' FACE="' + Navigation.fontFace + '"';
	strHTML += ' CLASS="' + Navigation.fontClass + '"'; 
	
	
	if(bNetscape)
	{
		strHTML += ' COLOR="' + strFontColor + '"';
	}
	
	strHTML += '>'; 
	
	strHTML += strFormattingStart + Link.displayName + strFormattingEnd;
	
	strHTML += '</FONT>';

	
	if(!bNetscape)
	{
		strHTML += '</DIV>';
	}
	
	
	if(bNetscape)
	{
		if(Navigation.justification == 'right')
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="1" BORDER="0">';
		}
		strHTML += '</A>';
	}		
	
	
	strHTML += '</TD>';
	
	
	if(Navigation.orientation=='vertical')
	{
		strHTML += '</TR>';
		
		if(Navigation.verticalSpacing > 0)
		{
			if(!bLastLink)
			{
				strHTML += '<TR><TD>';
				strHTML += '<IMG SRC="' + strTpGif + '" HEIGHT="' + Navigation.verticalSpacing + '" WIDTH="1" BORDER="0" ALT="">';
				strHTML += '</TD></TR>';
			}
		}
	}
	else
	{
		
		if(Navigation.horizontalSpacing > 0)
		{
			if(!bLastLink && (nColIndex != Navigation.horizontalWrap - 1))
			{
				strHTML += '<TD WIDTH="' + Navigation.horizontalSpacing + '">';
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + Navigation.horizontalSpacing + '" HEIGHT="1" BORDER="0" ALT="">';
				strHTML += '</TD>';
			}
		}
		
		
		if (bLastLink || nColIndex == Navigation.horizontalWrap - 1) 
		{
			strHTML += '</TR>';
			strHTML += '</TABLE>';
			strHTML += '</TD></TR>';		
		}
		
		
		if(nColIndex == Navigation.horizontalWrap - 1 && !bLastLink)
		{
			strHTML += '<TR><TD>';
			strHTML += '<IMG SRC="' + strTpGif + '" HEIGHT="' + Navigation.verticalSpacing + '" WIDTH="1" BORDER="0" ALT="">';
			strHTML += '</TD></TR>';
		}
	}
	return strHTML;
}


		



function renderHTML(Navigation)
{
	if (navigator.userAgent.indexOf('Mozilla/3') != -1)
	{
		return 'Sorry, since you are using an old version of Netscape, you may not be able to access all the pages in this Web site.';	
	}

	if (Navigation.style == 'text')
	{
		return renderTextHTML(Navigation, '../../../../tp.gif');
	}
	else
	{
		return renderGraphicalHTML(Navigation, '../../../../tp.gif');
	}
}


function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;	
	}
}

function isCurrentPage(Link)  
{
	if(Link.type!='existing')
	{
		return false;
	}		
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);	
} 

function getOnClick(strLinkValue, strLinkTarget)  
{ 
	var strOnClick;
	if(strLinkTarget == '_blank')
	{
		strOnClick = 'onClick="window.open(\'' + strLinkValue + '\');"';
	}
	else
	{  
		strOnClick = 'onClick="document.location = \'' + strLinkValue + '\';"';
	}
	return strOnClick;
}  

function netscapeDivCheck()  
{  
	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);
	if ( (strAppName == 'Netscape') &&
		(appVer >= 4.0 && appVer < 5) ) {  document.write('</DIV>');
	}
}

function textMouseOn(textObj, newColor, mouseoverBold, mouseoverUnderline, mouseoverItalic)
{ 
	if(newColor)
	{
		textObj.style.color=newColor; 
	}
	if(mouseoverBold=='true')
	{
		textObj.style.fontWeight='bold';
	}
	else
	{
		textObj.style.fontWeight='normal';
	}
	if(mouseoverUnderline=='true')
	{
		textObj.style.textDecoration='underline';
	}
	else
	{
		textObj.style.textDecoration='none';
	}
	if(mouseoverItalic=='true')
	{
		textObj.style.fontStyle='italic';
	}
	else
	{
		textObj.style.fontStyle='normal';
	}
}  

function textMouseOff(textObj, newColor, bold, underline, italic)
{ 
	textObj.style.color=newColor; 
	if(bold=='true')
	{
		textObj.style.fontWeight='bold';
	}
	else
	{
		textObj.style.fontWeight='normal';
	}
	if(underline=='true')
	{
		textObj.style.textDecoration='underline';
	}
	else
	{
		textObj.style.textDecoration='none';
	}
	if(italic=='true')
	{
		textObj.style.fontStyle='italic';
	}
	else
	{
		textObj.style.fontStyle='normal';
	}
}


		
		document.write(renderHTML(nav_2001reports));

