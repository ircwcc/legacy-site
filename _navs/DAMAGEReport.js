var nav_DAMAGEReport = new Object();

nav_DAMAGEReport.mouseoverTextcolor="#B91806";
nav_DAMAGEReport.numLinks="3";
nav_DAMAGEReport.holidayButton="Christmas_Ornaments";
nav_DAMAGEReport.importedImageMouseOver="";
nav_DAMAGEReport.modernButton="Industrial";
nav_DAMAGEReport.selectedItalic="false";
nav_DAMAGEReport.sophisticatedButton="Antique";
nav_DAMAGEReport.lineWidth="2";
nav_DAMAGEReport.buttonCategory="modern";
nav_DAMAGEReport.textColor="#000000";
nav_DAMAGEReport.selectedUnderline="false";
nav_DAMAGEReport.underline="false";
nav_DAMAGEReport.mouseoverItalic="false";
nav_DAMAGEReport.accentStyle="Arrow";
nav_DAMAGEReport.horizontalWrap="5";
nav_DAMAGEReport.bold="true";
nav_DAMAGEReport.border="";
nav_DAMAGEReport.accentType="none";
nav_DAMAGEReport.selectedBgcolor="";
nav_DAMAGEReport.squareTab="Camel";
nav_DAMAGEReport.orientation="vertical";
nav_DAMAGEReport.selectedTextcolor="#B91806";
nav_DAMAGEReport.horizontalSpacing="10";
nav_DAMAGEReport.style="buttons";
nav_DAMAGEReport.mouseoverBgcolor="";
nav_DAMAGEReport.accentColor="Black";
nav_DAMAGEReport.basicTab="White";
nav_DAMAGEReport.imageWidth="138";
nav_DAMAGEReport.graphicMouseover="true";
nav_DAMAGEReport.texturedButton="Brick";
nav_DAMAGEReport.funButton="Arts_and_Crafts";
nav_DAMAGEReport.tabCategory="basic";
nav_DAMAGEReport.mouseoverBold="false";
nav_DAMAGEReport.basicButton="Gray";
nav_DAMAGEReport.selectedEffect="true";
nav_DAMAGEReport.simpleButton="Autumn_Leaves";
nav_DAMAGEReport.dirty="false";
nav_DAMAGEReport.hasLinks="true";
nav_DAMAGEReport.importedImage="";
nav_DAMAGEReport.mouseoverUnderline="false";
nav_DAMAGEReport.lineColor="#000000";
nav_DAMAGEReport.mouseoverEffect="true";
nav_DAMAGEReport.type="Navigation";
nav_DAMAGEReport.selectedBold="false";
nav_DAMAGEReport.textSize="9";
nav_DAMAGEReport.importedImageSelected="";
nav_DAMAGEReport.textFont="Helvetica";
nav_DAMAGEReport.background="";
nav_DAMAGEReport.italic="false";
nav_DAMAGEReport.version="5";
nav_DAMAGEReport.darkButton="Basic_Black";
nav_DAMAGEReport.shinyButton="Shiny_Aqua";
nav_DAMAGEReport.imageHeight="41";
nav_DAMAGEReport.justification="center";
nav_DAMAGEReport.graphicSelected="true";
nav_DAMAGEReport.brightButton="Chicky";
nav_DAMAGEReport.verticalSpacing="10";
nav_DAMAGEReport.navID="nav_DAMAGEReport";

nav_DAMAGEReport.navName = "DAMAGEReport";
nav_DAMAGEReport.imagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_DAMAGEReport.selectedImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_DAMAGEReport.mouseOverImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_DAMAGEReport.imageWidth = "138";
nav_DAMAGEReport.imageHeight = "41";
nav_DAMAGEReport.fontClass = "size9 Helvetica9";
nav_DAMAGEReport.fontFace = "Helvetica, Arial, sans-serif";


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


nav_DAMAGEReport.links=new Array(3);
var nav_DAMAGEReport_Link1 = new Object();
nav_DAMAGEReport_Link1.type = "existing";
nav_DAMAGEReport_Link1.displayName = "Ring Of Death";
nav_DAMAGEReport_Link1.linkWindow = "_self";
nav_DAMAGEReport_Link1.linkValue = "awards/index.html\/RingofDeath.html";
nav_DAMAGEReport_Link1.linkIndex = "1";
nav_DAMAGEReport.links[0] = nav_DAMAGEReport_Link1;
var nav_DAMAGEReport_Link2 = new Object();
nav_DAMAGEReport_Link2.type = "existing";
nav_DAMAGEReport_Link2.displayName = "Damage Report";
nav_DAMAGEReport_Link2.linkWindow = "_self";
nav_DAMAGEReport_Link2.linkValue = "awards/index.html\/Damage-Report.html";
nav_DAMAGEReport_Link2.linkIndex = "2";
nav_DAMAGEReport.links[1] = nav_DAMAGEReport_Link2;
var nav_DAMAGEReport_Link3 = new Object();
nav_DAMAGEReport_Link3.type = "existing";
nav_DAMAGEReport_Link3.displayName = "Fire Stick";
nav_DAMAGEReport_Link3.linkWindow = "_self";
nav_DAMAGEReport_Link3.linkValue = "awards/index.html\/Fire-Stick.html";
nav_DAMAGEReport_Link3.linkIndex = "3";
nav_DAMAGEReport.links[2] = nav_DAMAGEReport_Link3;
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

function addMouseAndStyleSupportDAMAGEReport(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_DAMAGEReport1\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"DAMAGEReport_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_DAMAGEReport,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_DAMAGEReport,this,\'1\',false);\"><A HREF=\"\/Awards\/RingofDeath.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Ring Of Death\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"DAMAGEReport_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Ring&nbsp;Of&nbsp;Death<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_DAMAGEReport2\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"DAMAGEReport_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_DAMAGEReport,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_DAMAGEReport,this,\'2\',false);\"><A HREF=\"\/Awards\/Damage-Report.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Damage Report\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"DAMAGEReport_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Damage&nbsp;Report<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"10\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_DAMAGEReport3\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"DAMAGEReport_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_DAMAGEReport,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_DAMAGEReport,this,\'3\',false);\"><A HREF=\"\/Awards\/Fire-Stick.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Fire Stick\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"DAMAGEReport_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Fire&nbsp;Stick<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportDAMAGEReport(nav_DAMAGEReport,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

