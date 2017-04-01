var nav_2009ScoreSheet = new Object();

nav_2009ScoreSheet.squareTab="Camel";
nav_2009ScoreSheet.italic="false";
nav_2009ScoreSheet.texturedButton="Brick";
nav_2009ScoreSheet.border="";
nav_2009ScoreSheet.funButton="Arts_and_Crafts";
nav_2009ScoreSheet.importedImageMouseOver="";
nav_2009ScoreSheet.holidayButton="Christmas_Ornaments";
nav_2009ScoreSheet.verticalSpacing="10";
nav_2009ScoreSheet.modernButton="Industrial";
nav_2009ScoreSheet.brightButton="Chicky";
nav_2009ScoreSheet.buttonCategory="modern";
nav_2009ScoreSheet.mouseoverEffect="true";
nav_2009ScoreSheet.selectedTextcolor="#B91806";
nav_2009ScoreSheet.mouseoverUnderline="false";
nav_2009ScoreSheet.imageHeight="41";
nav_2009ScoreSheet.mouseoverBold="false";
nav_2009ScoreSheet.orientation="vertical";
nav_2009ScoreSheet.mouseoverTextcolor="#B91806";
nav_2009ScoreSheet.hasLinks="true";
nav_2009ScoreSheet.mouseoverItalic="false";
nav_2009ScoreSheet.type="Navigation";
nav_2009ScoreSheet.sophisticatedButton="Antique";
nav_2009ScoreSheet.background="";
nav_2009ScoreSheet.justification="center";
nav_2009ScoreSheet.bold="true";
nav_2009ScoreSheet.horizontalWrap="5";
nav_2009ScoreSheet.lineColor="#000000";
nav_2009ScoreSheet.selectedBold="false";
nav_2009ScoreSheet.basicTab="White";
nav_2009ScoreSheet.version="5";
nav_2009ScoreSheet.basicButton="Gray";
nav_2009ScoreSheet.horizontalSpacing="10";
nav_2009ScoreSheet.shinyButton="Shiny_Aqua";
nav_2009ScoreSheet.textColor="#000000";
nav_2009ScoreSheet.imageWidth="138";
nav_2009ScoreSheet.accentStyle="Arrow";
nav_2009ScoreSheet.selectedEffect="true";
nav_2009ScoreSheet.style="buttons";
nav_2009ScoreSheet.simpleButton="Autumn_Leaves";
nav_2009ScoreSheet.graphicSelected="true";
nav_2009ScoreSheet.navID="nav_2009ScoreSheet";
nav_2009ScoreSheet.selectedUnderline="false";
nav_2009ScoreSheet.textFont="Helvetica";
nav_2009ScoreSheet.numLinks="1";
nav_2009ScoreSheet.selectedItalic="false";
nav_2009ScoreSheet.darkButton="Basic_Black";
nav_2009ScoreSheet.dirty="false";
nav_2009ScoreSheet.importedImageSelected="";
nav_2009ScoreSheet.graphicMouseover="true";
nav_2009ScoreSheet.underline="false";
nav_2009ScoreSheet.importedImage="";
nav_2009ScoreSheet.lineWidth="2";
nav_2009ScoreSheet.textSize="12";
nav_2009ScoreSheet.accentType="none";
nav_2009ScoreSheet.mouseoverBgcolor="";
nav_2009ScoreSheet.accentColor="Black";
nav_2009ScoreSheet.selectedBgcolor="";
nav_2009ScoreSheet.tabCategory="basic";
nav_2009ScoreSheet.width="138";
nav_2009ScoreSheet.height="41";

nav_2009ScoreSheet.navName = "2009ScoreSheet";
nav_2009ScoreSheet.imagePath = "../../../../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_2009ScoreSheet.selectedImagePath = "../../../../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_2009ScoreSheet.mouseOverImagePath = "../../../../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_2009ScoreSheet.imageWidth = "138";
nav_2009ScoreSheet.imageHeight = "41";
nav_2009ScoreSheet.fontClass = "size12 Helvetica12";
nav_2009ScoreSheet.fontFace = "Helvetica, Arial, sans-serif";


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
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '../../../../index.html')
            {
                baseHref += '../../../../index.html';
            }
        }
    }
}


nav_2009ScoreSheet.links=new Array(1);
var nav_2009ScoreSheet_Link1 = new Object();
nav_2009ScoreSheet_Link1.type = "existing";
nav_2009ScoreSheet_Link1.displayName = "Score Sheet";
nav_2009ScoreSheet_Link1.linkWindow = "_blank";
nav_2009ScoreSheet_Link1.linkValue = "files/index.html\/NATS_Scores\/2013_NATS_Scoresheet.pdf";
nav_2009ScoreSheet_Link1.linkIndex = "1";
nav_2009ScoreSheet.links[0] = nav_2009ScoreSheet_Link1;
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

function addMouseAndStyleSupport2009ScoreSheet(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_2009ScoreSheet1\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"2009ScoreSheet_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_2009ScoreSheet,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_2009ScoreSheet,this,\'1\',false);\"><A HREF=\"\/files\/NATS_Scores\/2013_NATS_Scoresheet.pdf\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Score Sheet\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"2009ScoreSheet_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Score&nbsp;Sheet<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupport2009ScoreSheet(nav_2009ScoreSheet,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

