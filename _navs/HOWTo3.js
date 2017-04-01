
		var nav_HOWTo3 = new Object();

		nav_HOWTo3.underline="false";
		nav_HOWTo3.justification="center";
		nav_HOWTo3.textFont="Helvetica";
		nav_HOWTo3.selectedUnderline="false";
		nav_HOWTo3.accentStyle="Arrow";
		nav_HOWTo3.funButton="Arts_and_Crafts";
		nav_HOWTo3.mouseoverBgcolor="";
		nav_HOWTo3.darkButton="Basic_Black";
		nav_HOWTo3.mouseoverBold="false";
		nav_HOWTo3.buttonCategory="modern";
		nav_HOWTo3.italic="false";
		nav_HOWTo3.importedImageMouseOver="";
		nav_HOWTo3.textSize="9";
		nav_HOWTo3.tabCategory="basic";
		nav_HOWTo3.style="buttons";
		nav_HOWTo3.selectedBgcolor="";
		nav_HOWTo3.accentColor="Black";
		nav_HOWTo3.graphicSelected="true";
		nav_HOWTo3.hasLinks="true";
		nav_HOWTo3.selectedTextcolor="#B91806";
		nav_HOWTo3.basicButton="Gray";
		nav_HOWTo3.accentType="";
		nav_HOWTo3.graphicMouseover="true";
		nav_HOWTo3.horizontalSpacing="10";
		nav_HOWTo3.lineWidth="2";
		nav_HOWTo3.selectedEffect="true";
		nav_HOWTo3.lineColor="#000000";
		nav_HOWTo3.modernButton="Industrial";
		nav_HOWTo3.border="";
		nav_HOWTo3.simpleButton="Autumn_Leaves";
		nav_HOWTo3.type="Navigation";
		nav_HOWTo3.bold="true";
		nav_HOWTo3.sophisticatedButton="Antique";
		nav_HOWTo3.localPreview="false";
		nav_HOWTo3.verticalSpacing="10";
		nav_HOWTo3.basicTab="White";
		nav_HOWTo3.selectedBold="false";
		nav_HOWTo3.mouseoverEffect="true";
		nav_HOWTo3.navID="nav_HOWTo3";
		nav_HOWTo3.mouseoverTextcolor="#B91806";
		nav_HOWTo3.imageHeight="41";
		nav_HOWTo3.mouseoverUnderline="false";
		nav_HOWTo3.texturedButton="Brick";
		nav_HOWTo3.selectedItalic="false";
		nav_HOWTo3.brightButton="Chicky";
		nav_HOWTo3.importedImageSelected="";
		nav_HOWTo3.dirty="false";
		nav_HOWTo3.squareTab="Camel";
		nav_HOWTo3.horizontalWrap="5";
		nav_HOWTo3.numLinks="3";
		nav_HOWTo3.imageWidth="138";
		nav_HOWTo3.mouseoverItalic="false";
		nav_HOWTo3.importedImage="";
		nav_HOWTo3.background="";
		nav_HOWTo3.shinyButton="Shiny_Aqua";
		nav_HOWTo3.version="5";
		nav_HOWTo3.orientation="vertical";
		nav_HOWTo3.textColor="#000000";
		nav_HOWTo3.holidayButton="Christmas_Ornaments";
		
		nav_HOWTo3.navName = "HOWTo3";
		nav_HOWTo3.imagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
		nav_HOWTo3.selectedImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
		nav_HOWTo3.mouseOverImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
		nav_HOWTo3.imageWidth = "138";
		nav_HOWTo3.imageHeight = "41";
		nav_HOWTo3.fontClass = "size9 Helvetica9";
		nav_HOWTo3.fontFace = "Helvetica, Arial, sans-serif";

		
		
		var baseHref = '';
		
		if (document.getElementsByTagName)
		{
			
			var base = document.getElementsByTagName('base');
			
			if (base && base.length > 0)
			{
				
				if (base[0].href != undefined)
				{
					
					baseHref = base[0].href;
					
					if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != 'index.html')
					{
						baseHref += 'index.html';
					}
				}
			}
		}
		
		nav_HOWTo3.links=new Array(3);
	
		
		var nav_HOWTo3_Link1 = new Object();
		nav_HOWTo3_Link1.type = "existing";
		nav_HOWTo3_Link1.displayName = "Sound&nbsp;VS&nbsp;Velocity";
		nav_HOWTo3_Link1.linkWindow = "_blank";
		nav_HOWTo3_Link1.linkValue = "How_to/Kevin_Plumer_s_MIT_paper.pdf";
		nav_HOWTo3_Link1.linkIndex = "1";
		nav_HOWTo3.links[0] = nav_HOWTo3_Link1;

		var nav_HOWTo3_Link2 = new Object();
		nav_HOWTo3_Link2.type = "existing";
		nav_HOWTo3_Link2.displayName = "Clippard&nbsp;Cannons";
		nav_HOWTo3_Link2.linkWindow = "_blank";
		nav_HOWTo3_Link2.linkValue = "How_to/ClippardCannons.pdf";
		nav_HOWTo3_Link2.linkIndex = "2";
		nav_HOWTo3.links[1] = nav_HOWTo3_Link2;

		var nav_HOWTo3_Link3 = new Object();
		nav_HOWTo3_Link3.type = "existing";
		nav_HOWTo3_Link3.displayName = "K&S&nbsp;Brass&nbsp;Tube&nbsp;";
		nav_HOWTo3_Link3.linkWindow = "_self";
		nav_HOWTo3_Link3.linkValue = "How_to/ks_brass_tube_and_rod.html";
		nav_HOWTo3_Link3.linkIndex = "3";
		nav_HOWTo3.links[2] = nav_HOWTo3_Link3;

		




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
		return renderTextHTML(Navigation, 'tp.gif');
	}
	else
	{
		return renderGraphicalHTML(Navigation, 'tp.gif');
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


		
		document.write(renderHTML(nav_HOWTo3));

