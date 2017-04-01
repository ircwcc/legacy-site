var nav_AwardsClass = new Object();

nav_AwardsClass.underline="false";
nav_AwardsClass.justification="center";
nav_AwardsClass.textFont="Georgia";
nav_AwardsClass.selectedUnderline="false";
nav_AwardsClass.accentStyle="Arrow";
nav_AwardsClass.funButton="Arts_and_Crafts";
nav_AwardsClass.mouseoverBgcolor="";
nav_AwardsClass.darkButton="Basic_Black";
nav_AwardsClass.mouseoverBold="false";
nav_AwardsClass.buttonCategory="modern";
nav_AwardsClass.italic="false";
nav_AwardsClass.importedImageMouseOver="";
nav_AwardsClass.textSize="14";
nav_AwardsClass.tabCategory="basic";
nav_AwardsClass.style="buttons";
nav_AwardsClass.selectedBgcolor="";
nav_AwardsClass.accentColor="Black";
nav_AwardsClass.graphicSelected="true";
nav_AwardsClass.hasLinks="true";
nav_AwardsClass.selectedTextcolor="#B91806";
nav_AwardsClass.basicButton="Gray";
nav_AwardsClass.accentType="none";
nav_AwardsClass.graphicMouseover="true";
nav_AwardsClass.horizontalSpacing="10";
nav_AwardsClass.lineWidth="2";
nav_AwardsClass.selectedEffect="true";
nav_AwardsClass.lineColor="#000000";
nav_AwardsClass.modernButton="Industrial";
nav_AwardsClass.border="";
nav_AwardsClass.simpleButton="Autumn_Leaves";
nav_AwardsClass.type="Navigation";
nav_AwardsClass.bold="true";
nav_AwardsClass.sophisticatedButton="Antique";
nav_AwardsClass.localPreview="false";
nav_AwardsClass.verticalSpacing="10";
nav_AwardsClass.basicTab="White";
nav_AwardsClass.selectedBold="false";
nav_AwardsClass.mouseoverEffect="true";
nav_AwardsClass.navID="nav_AwardsClass";
nav_AwardsClass.mouseoverTextcolor="#B91806";
nav_AwardsClass.imageHeight="41";
nav_AwardsClass.mouseoverUnderline="false";
nav_AwardsClass.texturedButton="Brick";
nav_AwardsClass.selectedItalic="false";
nav_AwardsClass.brightButton="Chicky";
nav_AwardsClass.importedImageSelected="";
nav_AwardsClass.dirty="false";
nav_AwardsClass.squareTab="Camel";
nav_AwardsClass.horizontalWrap="5";
nav_AwardsClass.numLinks="3";
nav_AwardsClass.imageWidth="138";
nav_AwardsClass.mouseoverItalic="false";
nav_AwardsClass.importedImage="";
nav_AwardsClass.background="";
nav_AwardsClass.shinyButton="Shiny_Aqua";
nav_AwardsClass.version="5";
nav_AwardsClass.orientation="horizontal";
nav_AwardsClass.textColor="#000000";
nav_AwardsClass.holidayButton="Christmas_Ornaments";

nav_AwardsClass.navName = "AwardsClass";
nav_AwardsClass.imagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_AwardsClass.selectedImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_AwardsClass.mouseOverImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_AwardsClass.imageWidth = "138";
nav_AwardsClass.imageHeight = "41";
nav_AwardsClass.fontClass = "size14 Georgia14";
nav_AwardsClass.fontFace = "Georgia, Times, serif";


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


nav_AwardsClass.links=new Array(3);
var nav_AwardsClass_Link1 = new Object();
nav_AwardsClass_Link1.type = "existing";
nav_AwardsClass_Link1.displayName = "Class 4";
nav_AwardsClass_Link1.linkWindow = "_self";
nav_AwardsClass_Link1.linkValue = "awards/index.html\/Best-in-Class\/Class4.html";
nav_AwardsClass_Link1.linkIndex = "1";
nav_AwardsClass.links[0] = nav_AwardsClass_Link1;
var nav_AwardsClass_Link2 = new Object();
nav_AwardsClass_Link2.type = "existing";
nav_AwardsClass_Link2.displayName = "Class 5";
nav_AwardsClass_Link2.linkWindow = "_self";
nav_AwardsClass_Link2.linkValue = "awards/index.html\/Best-in-Class\/Class5.html";
nav_AwardsClass_Link2.linkIndex = "2";
nav_AwardsClass.links[1] = nav_AwardsClass_Link2;
var nav_AwardsClass_Link3 = new Object();
nav_AwardsClass_Link3.type = "existing";
nav_AwardsClass_Link3.displayName = "Class 6";
nav_AwardsClass_Link3.linkWindow = "_self";
nav_AwardsClass_Link3.linkValue = "awards/index.html\/Best-in-Class\/Class6.html";
nav_AwardsClass_Link3.linkIndex = "3";
nav_AwardsClass.links[2] = nav_AwardsClass_Link3;
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

function addMouseAndStyleSupportAwardsClass(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"AwardsClass_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_AwardsClass,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_AwardsClass,this,\'1\',false);\"><A HREF=\"\/Awards\/Best-in-Class\/Class4.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Class 4\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"AwardsClass_f1\" FACE=\"Georgia, Times, serif\" CLASS=\"size14 Georgia14\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Class&nbsp;4<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"10\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"AwardsClass_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_AwardsClass,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_AwardsClass,this,\'2\',false);\"><A HREF=\"\/Awards\/Best-in-Class\/Class5.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Class 5\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"AwardsClass_f2\" FACE=\"Georgia, Times, serif\" CLASS=\"size14 Georgia14\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Class&nbsp;5<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"10\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"AwardsClass_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_AwardsClass,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_AwardsClass,this,\'3\',false);\"><A HREF=\"\/Awards\/Best-in-Class\/Class6.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Class 6\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"AwardsClass_f3\" FACE=\"Georgia, Times, serif\" CLASS=\"size14 Georgia14\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Class&nbsp;6<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportAwardsClass(nav_AwardsClass,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

