var nav_Clubsubmite = new Object();

nav_Clubsubmite.mouseoverTextcolor="#B91806";
nav_Clubsubmite.numLinks="2";
nav_Clubsubmite.holidayButton="Christmas_Ornaments";
nav_Clubsubmite.importedImageMouseOver="";
nav_Clubsubmite.modernButton="Industrial";
nav_Clubsubmite.selectedItalic="false";
nav_Clubsubmite.sophisticatedButton="Antique";
nav_Clubsubmite.lineWidth="2";
nav_Clubsubmite.buttonCategory="modern";
nav_Clubsubmite.textColor="#000000";
nav_Clubsubmite.selectedUnderline="false";
nav_Clubsubmite.underline="false";
nav_Clubsubmite.mouseoverItalic="false";
nav_Clubsubmite.accentStyle="Arrow";
nav_Clubsubmite.horizontalWrap="5";
nav_Clubsubmite.bold="true";
nav_Clubsubmite.border="";
nav_Clubsubmite.accentType="none";
nav_Clubsubmite.selectedBgcolor="";
nav_Clubsubmite.squareTab="Camel";
nav_Clubsubmite.orientation="vertical";
nav_Clubsubmite.selectedTextcolor="#B91806";
nav_Clubsubmite.horizontalSpacing="10";
nav_Clubsubmite.style="buttons";
nav_Clubsubmite.mouseoverBgcolor="";
nav_Clubsubmite.accentColor="Black";
nav_Clubsubmite.basicTab="White";
nav_Clubsubmite.imageWidth="138";
nav_Clubsubmite.graphicMouseover="true";
nav_Clubsubmite.texturedButton="Brick";
nav_Clubsubmite.funButton="Arts_and_Crafts";
nav_Clubsubmite.tabCategory="basic";
nav_Clubsubmite.mouseoverBold="false";
nav_Clubsubmite.basicButton="Gray";
nav_Clubsubmite.selectedEffect="true";
nav_Clubsubmite.simpleButton="Autumn_Leaves";
nav_Clubsubmite.dirty="false";
nav_Clubsubmite.hasLinks="true";
nav_Clubsubmite.importedImage="";
nav_Clubsubmite.mouseoverUnderline="false";
nav_Clubsubmite.lineColor="#000000";
nav_Clubsubmite.mouseoverEffect="true";
nav_Clubsubmite.type="Navigation";
nav_Clubsubmite.selectedBold="false";
nav_Clubsubmite.textSize="12";
nav_Clubsubmite.importedImageSelected="";
nav_Clubsubmite.textFont="Georgia";
nav_Clubsubmite.background="";
nav_Clubsubmite.italic="false";
nav_Clubsubmite.version="5";
nav_Clubsubmite.darkButton="Basic_Black";
nav_Clubsubmite.shinyButton="Shiny_Aqua";
nav_Clubsubmite.imageHeight="41";
nav_Clubsubmite.justification="center";
nav_Clubsubmite.graphicSelected="true";
nav_Clubsubmite.brightButton="Chicky";
nav_Clubsubmite.verticalSpacing="10";
nav_Clubsubmite.navID="nav_Clubsubmite";

nav_Clubsubmite.navName = "Clubsubmite";
nav_Clubsubmite.imagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Clubsubmite.selectedImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Clubsubmite.mouseOverImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Clubsubmite.imageWidth = "138";
nav_Clubsubmite.imageHeight = "41";
nav_Clubsubmite.fontClass = "size12 Georgia12";
nav_Clubsubmite.fontFace = "Georgia, Times, serif";


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


nav_Clubsubmite.links=new Array(2);
var nav_Clubsubmite_Link1 = new Object();
nav_Clubsubmite_Link1.type = "existing";
nav_Clubsubmite_Link1.displayName = "Club Submit";
nav_Clubsubmite_Link1.linkWindow = "_self";
nav_Clubsubmite_Link1.linkValue = "files/index.html\/Forms\/online_Aplications\/Club-submit-form.html";
nav_Clubsubmite_Link1.linkIndex = "1";
nav_Clubsubmite.links[0] = nav_Clubsubmite_Link1;
var nav_Clubsubmite_Link2 = new Object();
nav_Clubsubmite_Link2.type = "existing";
nav_Clubsubmite_Link2.displayName = "Local Contact";
nav_Clubsubmite_Link2.linkWindow = "_self";
nav_Clubsubmite_Link2.linkValue = "captains/index.html\/contacts.html";
nav_Clubsubmite_Link2.linkIndex = "2";
nav_Clubsubmite.links[1] = nav_Clubsubmite_Link2;
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

function addMouseAndStyleSupportClubsubmite(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_Clubsubmite1\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Clubsubmite_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Clubsubmite,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Clubsubmite,this,\'1\',false);\"><A HREF=\"\/files\/Forms\/online_Aplications\/Club-submit-form.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Club Submit\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Clubsubmite_f1\" FACE=\"Georgia, Times, serif\" CLASS=\"size12 Georgia12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Club&nbsp;Submit<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Clubsubmite2\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Clubsubmite_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Clubsubmite,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Clubsubmite,this,\'2\',false);\"><A HREF=\"\/Captains\/contacts.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Local Contact\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Clubsubmite_f2\" FACE=\"Georgia, Times, serif\" CLASS=\"size12 Georgia12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Local&nbsp;Contact<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportClubsubmite(nav_Clubsubmite,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

