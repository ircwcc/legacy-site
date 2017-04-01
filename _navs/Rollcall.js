var nav_Rollcall = new Object();

nav_Rollcall.underline="false";
nav_Rollcall.justification="center";
nav_Rollcall.selectedUnderline="false";
nav_Rollcall.textFont="Helvetica";
nav_Rollcall.accentStyle="Arrow";
nav_Rollcall.funButton="Arts_and_Crafts";
nav_Rollcall.mouseoverBgcolor="";
nav_Rollcall.buttonCategory="modern";
nav_Rollcall.darkButton="Basic_Black";
nav_Rollcall.mouseoverBold="false";
nav_Rollcall.italic="false";
nav_Rollcall.importedImageMouseOver="";
nav_Rollcall.textSize="11";
nav_Rollcall.tabCategory="basic";
nav_Rollcall.style="buttons";
nav_Rollcall.graphicSelected="true";
nav_Rollcall.hasLinks="true";
nav_Rollcall.accentColor="Black";
nav_Rollcall.selectedTextcolor="#B91806";
nav_Rollcall.selectedBgcolor="";
nav_Rollcall.basicButton="Gray";
nav_Rollcall.accentType="none";
nav_Rollcall.graphicMouseover="true";
nav_Rollcall.horizontalSpacing="10";
nav_Rollcall.selectedEffect="true";
nav_Rollcall.lineColor="#000000";
nav_Rollcall.lineWidth="2";
nav_Rollcall.modernButton="Industrial";
nav_Rollcall.border="";
nav_Rollcall.simpleButton="Autumn_Leaves";
nav_Rollcall.type="Navigation";
nav_Rollcall.sophisticatedButton="Antique";
nav_Rollcall.bold="true";
nav_Rollcall.localPreview="false";
nav_Rollcall.verticalSpacing="10";
nav_Rollcall.selectedBold="false";
nav_Rollcall.basicTab="White";
nav_Rollcall.mouseoverEffect="true";
nav_Rollcall.navID="nav_Rollcall";
nav_Rollcall.mouseoverTextcolor="#B91806";
nav_Rollcall.imageHeight="41";
nav_Rollcall.mouseoverUnderline="false";
nav_Rollcall.texturedButton="Brick";
nav_Rollcall.selectedItalic="false";
nav_Rollcall.brightButton="Chicky";
nav_Rollcall.importedImageSelected="";
nav_Rollcall.dirty="false";
nav_Rollcall.squareTab="Camel";
nav_Rollcall.horizontalWrap="5";
nav_Rollcall.imageWidth="138";
nav_Rollcall.mouseoverItalic="false";
nav_Rollcall.numLinks="3";
nav_Rollcall.importedImage="";
nav_Rollcall.background="";
nav_Rollcall.version="5";
nav_Rollcall.shinyButton="Shiny_Aqua";
nav_Rollcall.orientation="horizontal";
nav_Rollcall.holidayButton="Christmas_Ornaments";
nav_Rollcall.textColor="#000000";
nav_Rollcall.width="434";
nav_Rollcall.height="41";

nav_Rollcall.navName = "Rollcall";
nav_Rollcall.imagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Rollcall.selectedImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Rollcall.mouseOverImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Rollcall.imageWidth = "138";
nav_Rollcall.imageHeight = "41";
nav_Rollcall.fontClass = "size11 Helvetica11";
nav_Rollcall.fontFace = "Helvetica, Arial, sans-serif";


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


nav_Rollcall.links=new Array(3);
var nav_Rollcall_Link1 = new Object();
nav_Rollcall_Link1.type = "existing";
nav_Rollcall_Link1.displayName = "Battle Reports";
nav_Rollcall_Link1.linkWindow = "_blank";
nav_Rollcall_Link1.linkValue = "Pictures.html";
nav_Rollcall_Link1.linkIndex = "1";
nav_Rollcall.links[0] = nav_Rollcall_Link1;
var nav_Rollcall_Link2 = new Object();
nav_Rollcall_Link2.type = "existing";
nav_Rollcall_Link2.displayName = "Photos";
nav_Rollcall_Link2.linkWindow = "_blank";
nav_Rollcall_Link2.linkValue = "Pictures.html";
nav_Rollcall_Link2.linkIndex = "2";
nav_Rollcall.links[1] = nav_Rollcall_Link2;
var nav_Rollcall_Link3 = new Object();
nav_Rollcall_Link3.type = "existing";
nav_Rollcall_Link3.displayName = "Captains";
nav_Rollcall_Link3.linkWindow = "_blank";
nav_Rollcall_Link3.linkValue = "Captains.html";
nav_Rollcall_Link3.linkIndex = "3";
nav_Rollcall.links[2] = nav_Rollcall_Link3;
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

function addMouseAndStyleSupportRollcall(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rollcall_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rollcall,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Rollcall,this,\'1\',false);\"><A HREF=\"\/Pictures.html\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Battle Reports\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rollcall_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size11 Helvetica11\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Battle&nbsp;Reports<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"10\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rollcall_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rollcall,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Rollcall,this,\'2\',false);\"><A HREF=\"\/Pictures.html\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Photos\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rollcall_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size11 Helvetica11\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Photos<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"10\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rollcall_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rollcall,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Rollcall,this,\'3\',false);\"><A HREF=\"\/Captains.html\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Captains\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rollcall_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size11 Helvetica11\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Captains<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportRollcall(nav_Rollcall,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

