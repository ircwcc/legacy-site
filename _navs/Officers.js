var nav_Officers = new Object();

nav_Officers.mouseoverTextcolor="#B91806";
nav_Officers.numLinks="1";
nav_Officers.holidayButton="Christmas_Ornaments";
nav_Officers.importedImageMouseOver="";
nav_Officers.modernButton="Industrial";
nav_Officers.selectedItalic="false";
nav_Officers.sophisticatedButton="Antique";
nav_Officers.lineWidth="2";
nav_Officers.buttonCategory="modern";
nav_Officers.textColor="#000000";
nav_Officers.selectedUnderline="false";
nav_Officers.underline="false";
nav_Officers.mouseoverItalic="false";
nav_Officers.accentStyle="Arrow";
nav_Officers.horizontalWrap="5";
nav_Officers.bold="true";
nav_Officers.border="";
nav_Officers.accentType="none";
nav_Officers.selectedBgcolor="";
nav_Officers.squareTab="Camel";
nav_Officers.orientation="vertical";
nav_Officers.selectedTextcolor="#B91806";
nav_Officers.horizontalSpacing="10";
nav_Officers.style="buttons";
nav_Officers.mouseoverBgcolor="";
nav_Officers.accentColor="Black";
nav_Officers.basicTab="White";
nav_Officers.imageWidth="138";
nav_Officers.graphicMouseover="true";
nav_Officers.texturedButton="Brick";
nav_Officers.funButton="Arts_and_Crafts";
nav_Officers.tabCategory="basic";
nav_Officers.mouseoverBold="false";
nav_Officers.basicButton="Gray";
nav_Officers.selectedEffect="true";
nav_Officers.simpleButton="Autumn_Leaves";
nav_Officers.dirty="false";
nav_Officers.hasLinks="true";
nav_Officers.importedImage="";
nav_Officers.mouseoverUnderline="false";
nav_Officers.lineColor="#000000";
nav_Officers.mouseoverEffect="true";
nav_Officers.type="Navigation";
nav_Officers.selectedBold="false";
nav_Officers.textSize="10";
nav_Officers.importedImageSelected="";
nav_Officers.textFont="Georgia";
nav_Officers.background="";
nav_Officers.italic="false";
nav_Officers.version="5";
nav_Officers.darkButton="Basic_Black";
nav_Officers.shinyButton="Shiny_Aqua";
nav_Officers.imageHeight="41";
nav_Officers.justification="center";
nav_Officers.graphicSelected="true";
nav_Officers.brightButton="Chicky";
nav_Officers.verticalSpacing="10";
nav_Officers.navID="nav_Officers";

nav_Officers.navName = "Officers";
nav_Officers.imagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Officers.selectedImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Officers.mouseOverImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Officers.imageWidth = "138";
nav_Officers.imageHeight = "41";
nav_Officers.fontClass = "size10 Georgia10";
nav_Officers.fontFace = "Georgia, Times, serif";


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
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '../index.html')
            {
                baseHref += '../index.html';
            }
        }
    }
}


nav_Officers.links=new Array(1);
var nav_Officers_Link1 = new Object();
nav_Officers_Link1.type = "existing";
nav_Officers_Link1.displayName = "Officers";
nav_Officers_Link1.linkWindow = "_self";
nav_Officers_Link1.linkValue = "officers/index.html\/Past-Officers-Main.html";
nav_Officers_Link1.linkIndex = "1";
nav_Officers.links[0] = nav_Officers_Link1;
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

function addMouseAndStyleSupportOfficers(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_Officers1\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Officers_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Officers,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Officers,this,\'1\',false);\"><A HREF=\"\/Officers\/Past-Officers-Main.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Officers\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Officers_f1\" FACE=\"Georgia, Times, serif\" CLASS=\"size10 Georgia10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Officers<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportOfficers(nav_Officers,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

