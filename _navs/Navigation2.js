var nav_Navigation2 = new Object();

nav_Navigation2.underline="false";
nav_Navigation2.justification="center";
nav_Navigation2.accentStyle="Arrow";
nav_Navigation2.selectedUnderline="false";
nav_Navigation2.textFont="Helvetica";
nav_Navigation2.funButton="Arts_and_Crafts";
nav_Navigation2.mouseoverBgcolor="";
nav_Navigation2.buttonCategory="modern";
nav_Navigation2.mouseoverBold="false";
nav_Navigation2.darkButton="Basic_Black";
nav_Navigation2.italic="false";
nav_Navigation2.importedImageMouseOver="";
nav_Navigation2.textSize="9";
nav_Navigation2.tabCategory="basic";
nav_Navigation2.style="buttons";
nav_Navigation2.selectedTextcolor="#B91806";
nav_Navigation2.hasLinks="true";
nav_Navigation2.graphicSelected="true";
nav_Navigation2.accentColor="Black";
nav_Navigation2.selectedBgcolor="";
nav_Navigation2.basicButton="Gray";
nav_Navigation2.accentType="";
nav_Navigation2.graphicMouseover="true";
nav_Navigation2.horizontalSpacing="10";
nav_Navigation2.lineColor="#000000";
nav_Navigation2.selectedEffect="true";
nav_Navigation2.lineWidth="2";
nav_Navigation2.modernButton="Industrial";
nav_Navigation2.border="";
nav_Navigation2.type="Navigation";
nav_Navigation2.simpleButton="Autumn_Leaves";
nav_Navigation2.sophisticatedButton="Antique";
nav_Navigation2.bold="true";
nav_Navigation2.localPreview="false";
nav_Navigation2.verticalSpacing="5";
nav_Navigation2.selectedBold="false";
nav_Navigation2.basicTab="White";
nav_Navigation2.mouseoverEffect="true";
nav_Navigation2.mouseoverTextcolor="#B91806";
nav_Navigation2.navID="nav_Navigation2";
nav_Navigation2.mouseoverUnderline="false";
nav_Navigation2.imageHeight="41";
nav_Navigation2.texturedButton="Brick";
nav_Navigation2.selectedItalic="false";
nav_Navigation2.brightButton="Chicky";
nav_Navigation2.importedImageSelected="";
nav_Navigation2.dirty="false";
nav_Navigation2.squareTab="Camel";
nav_Navigation2.horizontalWrap="5";
nav_Navigation2.mouseoverItalic="false";
nav_Navigation2.imageWidth="138";
nav_Navigation2.numLinks="6";
nav_Navigation2.background="";
nav_Navigation2.importedImage="";
nav_Navigation2.version="5";
nav_Navigation2.shinyButton="Shiny_Aqua";
nav_Navigation2.orientation="vertical";
nav_Navigation2.holidayButton="Christmas_Ornaments";
nav_Navigation2.textColor="#000000";

nav_Navigation2.navName = "Navigation2";
nav_Navigation2.imagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Navigation2.selectedImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Navigation2.mouseOverImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Navigation2.imageWidth = "138";
nav_Navigation2.imageHeight = "41";
nav_Navigation2.fontClass = "size9 Helvetica9";
nav_Navigation2.fontFace = "Helvetica, Arial, sans-serif";


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


nav_Navigation2.links=new Array(6);
var nav_Navigation2_Link1 = new Object();
nav_Navigation2_Link1.type = "existing";
nav_Navigation2_Link1.displayName = "FLEET AWARD";
nav_Navigation2_Link1.linkWindow = "_self";
nav_Navigation2_Link1.linkValue = "awards/index.html\/Fleet-Award.html";
nav_Navigation2_Link1.linkIndex = "1";
nav_Navigation2.links[0] = nav_Navigation2_Link1;
var nav_Navigation2_Link2 = new Object();
nav_Navigation2_Link2.type = "existing";
nav_Navigation2_Link2.displayName = "Brian Spychalski";
nav_Navigation2_Link2.linkWindow = "_self";
nav_Navigation2_Link2.linkValue = "awards/index.html\/Brian-Spykalsky.html";
nav_Navigation2_Link2.linkIndex = "2";
nav_Navigation2.links[1] = nav_Navigation2_Link2;
var nav_Navigation2_Link3 = new Object();
nav_Navigation2_Link3.type = "existing";
nav_Navigation2_Link3.displayName = "Rookie of the Year";
nav_Navigation2_Link3.linkWindow = "_self";
nav_Navigation2_Link3.linkValue = "awards/index.html\/Rookie-of-the-Year.html";
nav_Navigation2_Link3.linkIndex = "3";
nav_Navigation2.links[2] = nav_Navigation2_Link3;
var nav_Navigation2_Link4 = new Object();
nav_Navigation2_Link4.type = "existing";
nav_Navigation2_Link4.displayName = "Best of Scale";
nav_Navigation2_Link4.linkWindow = "_self";
nav_Navigation2_Link4.linkValue = "awards/index.html\/Best-of-Scale\/BestofScale.html";
nav_Navigation2_Link4.linkIndex = "4";
nav_Navigation2.links[3] = nav_Navigation2_Link4;
var nav_Navigation2_Link5 = new Object();
nav_Navigation2_Link5.type = "existing";
nav_Navigation2_Link5.displayName = "High Command Sprit ";
nav_Navigation2_Link5.linkWindow = "_self";
nav_Navigation2_Link5.linkValue = "awards/index.html\/SpiritAward\/Spirit.html";
nav_Navigation2_Link5.linkIndex = "5";
nav_Navigation2.links[4] = nav_Navigation2_Link5;
var nav_Navigation2_Link6 = new Object();
nav_Navigation2_Link6.type = "existing";
nav_Navigation2_Link6.displayName = "Technology";
nav_Navigation2_Link6.linkWindow = "_self";
nav_Navigation2_Link6.linkValue = "awards/index.html\/TechnologyAward.html";
nav_Navigation2_Link6.linkIndex = "6";
nav_Navigation2.links[5] = nav_Navigation2_Link6;
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

function addMouseAndStyleSupportNavigation2(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_Navigation21\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Navigation2_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Navigation2,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'1\',false);\"><A HREF=\"\/Awards\/Fleet-Award.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"FLEET AWARD\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Navigation2_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">FLEET&nbsp;AWARD<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation22\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Navigation2_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Navigation2,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'2\',false);\"><A HREF=\"\/Awards\/Brian-Spykalsky.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Brian Spychalski\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Navigation2_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Brian&nbsp;Spychalski<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation23\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Navigation2_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Navigation2,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'3\',false);\"><A HREF=\"\/Awards\/Rookie-of-the-Year.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Rookie of the Year\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Navigation2_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Rookie&nbsp;of&nbsp;the&nbsp;Year<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation24\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Navigation2_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Navigation2,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'4\',false);\"><A HREF=\"\/Awards\/Best-of-Scale\/BestofScale.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Best of Scale\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Navigation2_f4\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Best&nbsp;of&nbsp;Scale<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation25\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Navigation2_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Navigation2,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'5\',false);\"><A HREF=\"\/Awards\/SpiritAward\/Spirit.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"High Command Sprit \"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Navigation2_f5\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">High&nbsp;Command&nbsp;Sprit&nbsp;<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation26\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Navigation2_Link6\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Navigation2,this,\'6\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'6\',false);\"><A HREF=\"\/Awards\/TechnologyAward.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Technology\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Navigation2_f6\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Technology<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportNavigation2(nav_Navigation2,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

