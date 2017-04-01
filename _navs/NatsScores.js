var nav_NatsScores = new Object();

nav_NatsScores.underline="false";
nav_NatsScores.justification="center";
nav_NatsScores.selectedUnderline="false";
nav_NatsScores.textFont="Helvetica";
nav_NatsScores.accentStyle="Arrow";
nav_NatsScores.funButton="Arts_and_Crafts";
nav_NatsScores.mouseoverBgcolor="";
nav_NatsScores.mouseoverBold="false";
nav_NatsScores.buttonCategory="modern";
nav_NatsScores.darkButton="Basic_Black";
nav_NatsScores.italic="false";
nav_NatsScores.importedImageMouseOver="";
nav_NatsScores.textSize="10";
nav_NatsScores.tabCategory="basic";
nav_NatsScores.style="buttons";
nav_NatsScores.hasLinks="true";
nav_NatsScores.accentColor="Black";
nav_NatsScores.selectedBgcolor="";
nav_NatsScores.graphicSelected="true";
nav_NatsScores.selectedTextcolor="#B91806";
nav_NatsScores.basicButton="Gray";
nav_NatsScores.accentType="";
nav_NatsScores.graphicMouseover="true";
nav_NatsScores.horizontalSpacing="10";
nav_NatsScores.lineWidth="2";
nav_NatsScores.selectedEffect="true";
nav_NatsScores.lineColor="#000000";
nav_NatsScores.modernButton="Industrial";
nav_NatsScores.border="";
nav_NatsScores.type="Navigation";
nav_NatsScores.simpleButton="Autumn_Leaves";
nav_NatsScores.bold="true";
nav_NatsScores.sophisticatedButton="Antique";
nav_NatsScores.localPreview="false";
nav_NatsScores.verticalSpacing="10";
nav_NatsScores.basicTab="White";
nav_NatsScores.selectedBold="false";
nav_NatsScores.mouseoverEffect="true";
nav_NatsScores.mouseoverTextcolor="#B91806";
nav_NatsScores.navID="nav_NatsScores";
nav_NatsScores.mouseoverUnderline="false";
nav_NatsScores.imageHeight="41";
nav_NatsScores.texturedButton="Brick";
nav_NatsScores.selectedItalic="false";
nav_NatsScores.brightButton="Chicky";
nav_NatsScores.importedImageSelected="";
nav_NatsScores.dirty="false";
nav_NatsScores.squareTab="Camel";
nav_NatsScores.horizontalWrap="5";
nav_NatsScores.imageWidth="138";
nav_NatsScores.numLinks="8";
nav_NatsScores.mouseoverItalic="false";
nav_NatsScores.background="";
nav_NatsScores.importedImage="";
nav_NatsScores.shinyButton="Shiny_Aqua";
nav_NatsScores.version="5";
nav_NatsScores.orientation="vertical";
nav_NatsScores.holidayButton="Christmas_Ornaments";
nav_NatsScores.textColor="#000000";
nav_NatsScores.width="138";
nav_NatsScores.height="398";

nav_NatsScores.navName = "NatsScores";
nav_NatsScores.imagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_NatsScores.selectedImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_NatsScores.mouseOverImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_NatsScores.imageWidth = "138";
nav_NatsScores.imageHeight = "41";
nav_NatsScores.fontClass = "size10 Helvetica10";
nav_NatsScores.fontFace = "Helvetica, Arial, sans-serif";


var baseHref = '';
// this will only work if getElementsByTagName works
if (document.getElementsByTagName)
{
    // this will only work if we can find a base tag
    var base = document.getElementsByTagName('base');
    // Verify that the base object exists
    if (base && base.length > 0)
    {
        // if you don't specify a base href, href comes back as undefined
        if (base[0].href != undefined)
        {
            // get the base href
            baseHref = base[0].href;
            // add a trailing slash if base href doesn't already have one
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != 'index.html')
            {
                baseHref += 'index.html';
            }
        }
    }
}


nav_NatsScores.links=new Array(8);
var nav_NatsScores_Link1 = new Object();
nav_NatsScores_Link1.type = "existing";
nav_NatsScores_Link1.displayName = "2006";
nav_NatsScores_Link1.linkWindow = "_self";
nav_NatsScores_Link1.linkValue = "files/index.html\/NATS_Scores\/Nats2006_Nats_Score.xls";
nav_NatsScores_Link1.linkIndex = "1";
nav_NatsScores.links[0] = nav_NatsScores_Link1;
var nav_NatsScores_Link2 = new Object();
nav_NatsScores_Link2.type = "existing";
nav_NatsScores_Link2.displayName = "2007";
nav_NatsScores_Link2.linkWindow = "_self";
nav_NatsScores_Link2.linkValue = "files/index.html\/NATS_Scores\/Nats2007_Nats_Score.xls";
nav_NatsScores_Link2.linkIndex = "2";
nav_NatsScores.links[1] = nav_NatsScores_Link2;
var nav_NatsScores_Link3 = new Object();
nav_NatsScores_Link3.type = "existing";
nav_NatsScores_Link3.displayName = "2008";
nav_NatsScores_Link3.linkWindow = "_self";
nav_NatsScores_Link3.linkValue = "files/index.html\/NATS_Scores\/Nats2008_Nats_Score.xls";
nav_NatsScores_Link3.linkIndex = "3";
nav_NatsScores.links[2] = nav_NatsScores_Link3;
var nav_NatsScores_Link4 = new Object();
nav_NatsScores_Link4.type = "existing";
nav_NatsScores_Link4.displayName = "2009";
nav_NatsScores_Link4.linkWindow = "_self";
nav_NatsScores_Link4.linkValue = "files/index.html\/NATS_Scores\/Nats2009_Nats_Score.xls";
nav_NatsScores_Link4.linkIndex = "4";
nav_NatsScores.links[3] = nav_NatsScores_Link4;
var nav_NatsScores_Link5 = new Object();
nav_NatsScores_Link5.type = "existing";
nav_NatsScores_Link5.displayName = "2010";
nav_NatsScores_Link5.linkWindow = "_self";
nav_NatsScores_Link5.linkValue = "files/index.html\/NATS_Scores\/NATS2010_Nats_Score.xls";
nav_NatsScores_Link5.linkIndex = "5";
nav_NatsScores.links[4] = nav_NatsScores_Link5;
var nav_NatsScores_Link6 = new Object();
nav_NatsScores_Link6.type = "existing";
nav_NatsScores_Link6.displayName = "2011";
nav_NatsScores_Link6.linkWindow = "_self";
nav_NatsScores_Link6.linkValue = "files/index.html\/NATS_Scores\/Nats2011_Nats_Score.xls";
nav_NatsScores_Link6.linkIndex = "6";
nav_NatsScores.links[5] = nav_NatsScores_Link6;
var nav_NatsScores_Link7 = new Object();
nav_NatsScores_Link7.type = "existing";
nav_NatsScores_Link7.displayName = "2012";
nav_NatsScores_Link7.linkWindow = "_self";
nav_NatsScores_Link7.linkValue = "files/index.html\/NATS_Scores\/Nats2012_Nats_Score.xls";
nav_NatsScores_Link7.linkIndex = "7";
nav_NatsScores.links[6] = nav_NatsScores_Link7;
var nav_NatsScores_Link8 = new Object();
nav_NatsScores_Link8.type = "existing";
nav_NatsScores_Link8.displayName = "2013";
nav_NatsScores_Link8.linkWindow = "_blank";
nav_NatsScores_Link8.linkValue = "files/index.html\/NATS_Scores\/2013_NATS_Scoresheet.pdf";
nav_NatsScores_Link8.linkIndex = "8";
nav_NatsScores.links[7] = nav_NatsScores_Link8;
function mouseOn(tdElement, newBackgroundImage)
{
	if(tdElement != null) {
		tdElement.style.backgroundImage = 'url(' + escapeScript(newBackgroundImage) + ')';
	}
}

function mouseOff(tdElement, newBackgroundImage)
{
	if(tdElement != null) {
		tdElement.style.backgroundImage = 'url(' + escapeScript(newBackgroundImage) + ')';
	}
}

function doMouseChange(Navigation,tdElement,linkIndex,bisMouseOver) {
	if (Navigation.mouseoverEffect != 'true') {
		return;
	}
	var link = Navigation.links[linkIndex-1];
	var bIsCurrentPage = isCurrentPage(link);
	if ((Navigation.graphicSelected == 'true' || Navigation.selectedTextcolor)
			&& bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		return;
	}
	
	var fontElement = getLinkFontElement(tdElement);
	
	if(fontElement != null) {
		doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver);
	}
	
	if (Navigation.graphicMouseover == 'true') {
		if (bisMouseOver) {
			mouseOn(tdElement,escapeHtmlInlineScript(Navigation.mouseOverImagePath));
		} else {
			mouseOff(tdElement, escapeHtmlInlineScript(Navigation.imagePath));
		}
	}
}
function addStyle(Navigation, Link,tdElement) {
	if(tdElement == null) {
		return;
	}
	var strImg = Navigation.imagePath;
	var strFontColor = Navigation.textColor;
	if ('true' == Navigation.selectedEffect) {
		if (Navigation.graphicSelected == 'true') {
			strImg = Navigation.selectedImagePath;
		}
		if (Navigation.selectedTextcolor) {
			strFontColor = Navigation.selectedTextcolor;
		}
	}
	var strImgUrl = "url('"+escapeHtmlInlineScript(strImg)+"')";
	tdElement.style.backgroundImage=strImgUrl;
	var fontElement = getLinkFontElement(tdElement);
	if (fontElement != null) {
		fontElement.style.color = strFontColor;
		if ('true' == Navigation.selectedEffect) {
			if ('true' == Navigation.selectedBold) {
				fontElement.style.fontWeight = "bold";
			}
			if ('true' == Navigation.selectedItalic) {
				fontElement.style.fontStyle = "italic";
			}
			if ('true' == Navigation.selectedUnderline) {
				fontElement.style.textDecoration = "underline";
			}
		}
	}
}
// Combined escape html and javascript
function escapeHtmlInlineScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	return htmlEncode(escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes));
}

function htmlEncode(s){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '<':
			result += "&lt;";
			break;
		case '>':
			result += "&gt;";
			break;
		case '&':
			result += "&amp;";
			break;
		case '"':
			result += "&quot;";
			break;
		case "'":
			result += "&#39;";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

/* escapes slashes and quotes. the default is to escape quotes,
 * but this can be turned off.
 * this function is used for javascript and also for escaping urls
 * within background-image css.	 
 */
function escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '\'':
			if (escapeSingleQuotes == null || escapeSingleQuotes)
				result += "\\\'";
			break;
		case '\"':
			if (escapeDoubleQuotes == null || escapeDoubleQuotes)
				result += "\\\"";
			break;
		case '\\':
			result += "\\\\";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

//
// This .js file includes utility functions used by both graphical and text navs
// in their rendering.  User pages including a nav element will import this file, along
// with TextNavigation.js and GraphicNavigation.js.  The functions within will
// be called by the [navname].js file generated at publish time.

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

function toggleOnMouseChange(fontElement,newColor, bold, underline, italic)
{
	if(fontElement == null) {
		return;
	}
	if(newColor)
	{
		fontElement.style.color=newColor;
	}
	fontElement.style.fontWeight = (bold=='true' ? 'bold' : 'normal');
	fontElement.style.textDecoration = (underline=='true' ? 'underline' : 'none');
	fontElement.style.fontStyle = (italic=='true' ? 'italic' : 'normal');

}

function doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver) {
	if(fontElement == null) {
		return;
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor
						: Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	} else {
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor
				: Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	
	if(bisMouseOver) {
		toggleOnMouseChange(fontElement,textColor,bold,underline,italic);
	} else {
		toggleOnMouseChange(fontElement,baseTextColor,baseBold,baseUnderline,baseItalic);
	}
	

}

function addMouseAndStyleSupportNatsScores(Navigation,navTbId) {
	var startNode;

	if(typeof(nav_element_id) != 'undefined' && document.getElementById(nav_element_id) != null) {
		startNode = document.getElementById(nav_element_id);
			
	} else if(navTbId != null) {
		startNode = document.getElementById(navTbId);
			
	}
	
	if(startNode != null) {
	  searchForCurrentPageTd(Navigation,startNode);
	}
	

}

function searchForCurrentPageTd(Navigation,startNode) {
	
	if(startNode.childNodes != null) {
		for(var i=0;i<startNode.childNodes.length;i++){
			if(addStyleForCurrentPageTd(Navigation,startNode.childNodes[i])){
			   return;	
			} else {
			   searchForCurrentPageTd(Navigation,startNode.childNodes[i]);
			}
		}
	}

}

function addStyleForCurrentPageTd(Navigation,currentNode) {
	if(Navigation.orientation == 'horizontal') {
		if(currentNode.tagName == 'TD' && currentNode.id != '' && currentNode.id.indexOf(Navigation.navName+navTDLinkPart) != -1){
			var currentTDIdPrefix = Navigation.navName+navTDLinkPart;
			var linkId = currentNode.id.substring(currentTDIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true) {
				addStyle(Navigation, Navigation.links[linkId-1],currentNode);
				return true;
			}
		}
	} else {
		if(currentNode.tagName == 'TR' && currentNode.id != '' && currentNode.id.indexOf(navTRLinkPrefix) != -1){	
			var currentTRIdPrefix = navTRLinkPrefix+Navigation.navName;
			var linkId = currentNode.id.substring(currentTRIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true && currentNode.childNodes != null) {
				var currentPageTd;
				for(var i=0;currentNode.childNodes.length;i++) {
					if(typeof(currentNode.childNodes[i].tagName) != 'undefined' && currentNode.childNodes[i].tagName == 'TD' && currentNode.childNodes[i].id.indexOf(Navigation.navName+navTDLinkPart) != -1) {
						currentPageTd = currentNode.childNodes[i];
						addStyle(Navigation, Navigation.links[linkId - 1],currentPageTd,currentNode);
						return true;
					}
				}
			}
		}
	}
	return false;
}

function getChildElementFromTree(startNode,nodesToTraverse) {
	var currentChildNode = startNode;
	
	for(var n= 0;n<nodesToTraverse.length;n++) {
		currentChildNode = getMatchingChildByTag(currentChildNode.childNodes,nodesToTraverse[n]);
	}
	
	return currentChildNode;
}


function getMatchingChildByTag(childNodes,tagName) {
	var child;
	for(var i=0;childNodes.length;i++) {
		if(childNodes[i].tagName == tagName) {
			child = childNodes[i];
			break;
		}
	}
	return child;
}
function getLinkFontElement(tdElement){
	var fontElement;
	var aElement = getChildElementFromTree(tdElement,['A']);
	for(var i=0;i < aElement.childNodes.length;i++) {
		if(aElement.childNodes[i].tagName == 'DIV') {
		 	fontElement = getChildElementFromTree(aElement.childNodes[i],['FONT']);
		 	break;
		} else if(aElement.childNodes[i].tagName == 'FONT'){
		 	fontElement = 	aElement.childNodes[i];
		 	break;
		}
	
	}
	return fontElement;
}



	if(typeof(navTRLinkPrefix) == 'undefined') {
		navTRLinkPrefix = 'vNavTR_Link_';
	}
	if(typeof(navTDLinkPart) == 'undefined') {
		navTDLinkPart = '_Link';
	}
	if(document.getElementById('nav_version') == null) {
	if (typeof(navTBSuffix) == 'undefined') {
	navTBSuffix = 0;
	} else {navTBSuffix++;}
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_NatsScores1\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'1\',false);\"><A HREF=\"\/files\/NATS_Scores\/Nats2006_Nats_Score.xls\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2006\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2006<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_NatsScores2\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'2\',false);\"><A HREF=\"\/files\/NATS_Scores\/Nats2007_Nats_Score.xls\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2007\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2007<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_NatsScores3\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'3\',false);\"><A HREF=\"\/files\/NATS_Scores\/Nats2008_Nats_Score.xls\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2008\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2008<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_NatsScores4\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'4\',false);\"><A HREF=\"\/files\/NATS_Scores\/Nats2009_Nats_Score.xls\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2009\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f4\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2009<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_NatsScores5\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'5\',false);\"><A HREF=\"\/files\/NATS_Scores\/NATS2010_Nats_Score.xls\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2010\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f5\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2010<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_NatsScores6\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link6\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'6\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'6\',false);\"><A HREF=\"\/files\/NATS_Scores\/Nats2011_Nats_Score.xls\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2011\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f6\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2011<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_NatsScores7\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link7\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'7\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'7\',false);\"><A HREF=\"\/files\/NATS_Scores\/Nats2012_Nats_Score.xls\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2012\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f7\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2012<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_NatsScores8\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"NatsScores_Link8\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_NatsScores,this,\'8\',true);\" onmouseout=\"doMouseChange(nav_NatsScores,this,\'8\',false);\"><A HREF=\"\/files\/NATS_Scores\/2013_NATS_Scoresheet.pdf\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2013\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"NatsScores_f8\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">2013<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportNatsScores(nav_NatsScores,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

