var nav_AwardClas1 = new Object();

nav_AwardClas1.numLinks="3";
nav_AwardClas1.brightButton="Chicky";
nav_AwardClas1.importedImageMouseOver="";
nav_AwardClas1.style="buttons";
nav_AwardClas1.imageWidth="138";
nav_AwardClas1.importedImage="";
nav_AwardClas1.mouseoverBold="false";
nav_AwardClas1.lineWidth="2";
nav_AwardClas1.mouseoverItalic="false";
nav_AwardClas1.mouseoverEffect="true";
nav_AwardClas1.textFont="Georgia";
nav_AwardClas1.graphicMouseover="true";
nav_AwardClas1.funButton="Arts_and_Crafts";
nav_AwardClas1.background="";
nav_AwardClas1.mouseoverBgcolor="";
nav_AwardClas1.selectedTextcolor="#B91806";
nav_AwardClas1.italic="false";
nav_AwardClas1.underline="false";
nav_AwardClas1.border="";
nav_AwardClas1.verticalSpacing="10";
nav_AwardClas1.localPreview="false";
nav_AwardClas1.selectedUnderline="false";
nav_AwardClas1.textColor="#000000";
nav_AwardClas1.holidayButton="Christmas_Ornaments";
nav_AwardClas1.texturedButton="Brick";
nav_AwardClas1.selectedItalic="false";
nav_AwardClas1.tabCategory="basic";
nav_AwardClas1.justification="center";
nav_AwardClas1.selectedEffect="true";
nav_AwardClas1.accentStyle="Arrow";
nav_AwardClas1.simpleButton="Autumn_Leaves";
nav_AwardClas1.navID="nav_AwardClas1";
nav_AwardClas1.dirty="false";
nav_AwardClas1.horizontalSpacing="10";
nav_AwardClas1.graphicSelected="true";
nav_AwardClas1.selectedBgcolor="";
nav_AwardClas1.accentType="";
nav_AwardClas1.textSize="14";
nav_AwardClas1.selectedBold="false";
nav_AwardClas1.importedImageSelected="";
nav_AwardClas1.basicTab="White";
nav_AwardClas1.accentColor="Black";
nav_AwardClas1.basicButton="Gray";
nav_AwardClas1.modernButton="Industrial";
nav_AwardClas1.buttonCategory="modern";
nav_AwardClas1.horizontalWrap="5";
nav_AwardClas1.shinyButton="Shiny_Aqua";
nav_AwardClas1.type="Navigation";
nav_AwardClas1.imageHeight="41";
nav_AwardClas1.hasLinks="true";
nav_AwardClas1.squareTab="Camel";
nav_AwardClas1.lineColor="#000000";
nav_AwardClas1.orientation="horizontal";
nav_AwardClas1.bold="true";
nav_AwardClas1.version="5";
nav_AwardClas1.sophisticatedButton="Antique";
nav_AwardClas1.mouseoverTextcolor="#B91806";
nav_AwardClas1.darkButton="Basic_Black";
nav_AwardClas1.mouseoverUnderline="false";

nav_AwardClas1.navName = "AwardClas1";
nav_AwardClas1.imagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_AwardClas1.selectedImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_AwardClas1.mouseOverImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_AwardClas1.imageWidth = "138";
nav_AwardClas1.imageHeight = "41";
nav_AwardClas1.fontClass = "size14 Georgia14";
nav_AwardClas1.fontFace = "Georgia, Times, serif";


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


nav_AwardClas1.links=new Array(3);
var nav_AwardClas1_Link1 = new Object();
nav_AwardClas1_Link1.type = "existing";
nav_AwardClas1_Link1.displayName = "Class1";
nav_AwardClas1_Link1.linkWindow = "_self";
nav_AwardClas1_Link1.linkValue = "awards/index.html\/Best-in-Class\/Class1.html";
nav_AwardClas1_Link1.linkIndex = "1";
nav_AwardClas1.links[0] = nav_AwardClas1_Link1;
var nav_AwardClas1_Link2 = new Object();
nav_AwardClas1_Link2.type = "existing";
nav_AwardClas1_Link2.displayName = "Class 2";
nav_AwardClas1_Link2.linkWindow = "_self";
nav_AwardClas1_Link2.linkValue = "awards/index.html\/Best-in-Class\/Class2.html";
nav_AwardClas1_Link2.linkIndex = "2";
nav_AwardClas1.links[1] = nav_AwardClas1_Link2;
var nav_AwardClas1_Link3 = new Object();
nav_AwardClas1_Link3.type = "existing";
nav_AwardClas1_Link3.displayName = "Class 3";
nav_AwardClas1_Link3.linkWindow = "_self";
nav_AwardClas1_Link3.linkValue = "awards/index.html\/Best-in-Class\/Class3.html";
nav_AwardClas1_Link3.linkIndex = "3";
nav_AwardClas1.links[2] = nav_AwardClas1_Link3;
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

function addMouseAndStyleSupportAwardClas1(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"AwardClas1_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_AwardClas1,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_AwardClas1,this,\'1\',false);\"><A HREF=\"\/Awards\/Best-in-Class\/Class1.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Class1\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"AwardClas1_f1\" FACE=\"Georgia, Times, serif\" CLASS=\"size14 Georgia14\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Class1<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"10\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"AwardClas1_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_AwardClas1,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_AwardClas1,this,\'2\',false);\"><A HREF=\"\/Awards\/Best-in-Class\/Class2.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Class 2\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"AwardClas1_f2\" FACE=\"Georgia, Times, serif\" CLASS=\"size14 Georgia14\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Class&nbsp;2<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"10\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"AwardClas1_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_AwardClas1,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_AwardClas1,this,\'3\',false);\"><A HREF=\"\/Awards\/Best-in-Class\/Class3.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Class 3\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"AwardClas1_f3\" FACE=\"Georgia, Times, serif\" CLASS=\"size14 Georgia14\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Class&nbsp;3<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportAwardClas1(nav_AwardClas1,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

