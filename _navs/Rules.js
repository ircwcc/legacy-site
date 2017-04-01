var nav_Rules = new Object();

nav_Rules.tabCategory="basic";
nav_Rules.holidayButton="Christmas_Ornaments";
nav_Rules.mouseoverEffect="true";
nav_Rules.modernButton="Industrial";
nav_Rules.mouseoverBold="false";
nav_Rules.textColor="#000000";
nav_Rules.mouseoverBgcolor="";
nav_Rules.accentType="none";
nav_Rules.hasLinks="true";
nav_Rules.bold="true";
nav_Rules.mouseoverTextcolor="#B91806";
nav_Rules.lineWidth="2";
nav_Rules.type="Navigation";
nav_Rules.accentColor="Black";
nav_Rules.mouseoverUnderline="false";
nav_Rules.selectedEffect="true";
nav_Rules.basicTab="White";
nav_Rules.simpleButton="Autumn_Leaves";
nav_Rules.justification="center";
nav_Rules.localPreview="false";
nav_Rules.selectedUnderline="false";
nav_Rules.orientation="vertical";
nav_Rules.lineColor="#000000";
nav_Rules.imageHeight="41";
nav_Rules.buttonCategory="modern";
nav_Rules.squareTab="Camel";
nav_Rules.dirty="false";
nav_Rules.selectedItalic="false";
nav_Rules.navID="nav_Rules";
nav_Rules.background="";
nav_Rules.importedImageSelected="";
nav_Rules.texturedButton="Metallic";
nav_Rules.textFont="Helvetica";
nav_Rules.imageWidth="138";
nav_Rules.selectedBold="false";
nav_Rules.accentStyle="Arrow";
nav_Rules.numLinks="7";
nav_Rules.mouseoverItalic="false";
nav_Rules.underline="false";
nav_Rules.verticalSpacing="5";
nav_Rules.horizontalWrap="5";
nav_Rules.funButton="Arts_and_Crafts";
nav_Rules.style="buttons";
nav_Rules.basicButton="Gray";
nav_Rules.selectedBgcolor="";
nav_Rules.importedImageMouseOver="";
nav_Rules.graphicSelected="true";
nav_Rules.shinyButton="Shiny_Aqua";
nav_Rules.border="";
nav_Rules.version="5";
nav_Rules.sophisticatedButton="Antique";
nav_Rules.selectedTextcolor="#B91806";
nav_Rules.horizontalSpacing="10";
nav_Rules.graphicMouseover="true";
nav_Rules.importedImage="";
nav_Rules.italic="false";
nav_Rules.brightButton="Chicky";
nav_Rules.darkButton="Basic_Black";
nav_Rules.textSize="12";
nav_Rules.width="138";
nav_Rules.height="317";

nav_Rules.navName = "Rules";
nav_Rules.imagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Rules.selectedImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Rules.mouseOverImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Rules.imageWidth = "138";
nav_Rules.imageHeight = "41";
nav_Rules.fontClass = "size12 Helvetica12";
nav_Rules.fontFace = "Helvetica, Arial, sans-serif";


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


nav_Rules.links=new Array(7);
var nav_Rules_Link1 = new Object();
nav_Rules_Link1.type = "existing";
nav_Rules_Link1.displayName = "Bylaws";
nav_Rules_Link1.linkWindow = "_blank";
nav_Rules_Link1.linkValue = "files/index.html\/Bylaws_Rules\/IRCWCC_Bylaws__ed__04-2004_revised_12-2013_.pdf";
nav_Rules_Link1.linkIndex = "1";
nav_Rules.links[0] = nav_Rules_Link1;
var nav_Rules_Link2 = new Object();
nav_Rules_Link2.type = "existing";
nav_Rules_Link2.displayName = "Rules";
nav_Rules_Link2.linkWindow = "_blank";
nav_Rules_Link2.linkValue = "files/index.html\/Bylaws_Rules\/IRCWCC_Rules__ed__04-2004_revised_12-2013a_.pdf";
nav_Rules_Link2.linkIndex = "2";
nav_Rules.links[1] = nav_Rules_Link2;
var nav_Rules_Link3 = new Object();
nav_Rules_Link3.type = "url";
nav_Rules_Link3.displayName = "Insurance";
nav_Rules_Link3.linkWindow = "_self";
nav_Rules_Link3.linkValue = "Rules.html\/\/www.namba.com\/";
nav_Rules_Link3.linkIndex = "3";
nav_Rules.links[2] = nav_Rules_Link3;
var nav_Rules_Link4 = new Object();
nav_Rules_Link4.type = "existing";
nav_Rules_Link4.displayName = "Ship List";
nav_Rules_Link4.linkWindow = "_self";
nav_Rules_Link4.linkValue = "files/index.html\/Forms\/Rules\/IRCWCC_Shiplist_2010__2_.pdf";
nav_Rules_Link4.linkIndex = "4";
nav_Rules.links[3] = nav_Rules_Link4;
var nav_Rules_Link5 = new Object();
nav_Rules_Link5.type = "existing";
nav_Rules_Link5.displayName = "HTMLShip list";
nav_Rules_Link5.linkWindow = "_blank";
nav_Rules_Link5.linkValue = "sln/index.html\/sl.htm";
nav_Rules_Link5.linkIndex = "5";
nav_Rules.links[4] = nav_Rules_Link5;
var nav_Rules_Link6 = new Object();
nav_Rules_Link6.type = "existing";
nav_Rules_Link6.displayName = "HTML Bylaws";
nav_Rules_Link6.linkWindow = "_blank";
nav_Rules_Link6.linkValue = "files/index.html\/Bylaws_Rules\/Bylaws_2013.htm";
nav_Rules_Link6.linkIndex = "6";
nav_Rules.links[5] = nav_Rules_Link6;
var nav_Rules_Link7 = new Object();
nav_Rules_Link7.type = "existing";
nav_Rules_Link7.displayName = "HTML Rules";
nav_Rules_Link7.linkWindow = "_self";
nav_Rules_Link7.linkValue = "files/index.html\/Bylaws_Rules\/Rules_2013.htm";
nav_Rules_Link7.linkIndex = "7";
nav_Rules.links[6] = nav_Rules_Link7;
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

function addMouseAndStyleSupportRules(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_Rules1\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rules_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rules,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Rules,this,\'1\',false);\"><A HREF=\"\/files\/Bylaws_Rules\/IRCWCC_Bylaws__ed__04-2004_revised_12-2013_.pdf\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Bylaws\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rules_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Bylaws<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Rules2\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rules_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rules,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Rules,this,\'2\',false);\"><A HREF=\"\/files\/Bylaws_Rules\/IRCWCC_Rules__ed__04-2004_revised_12-2013a_.pdf\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Rules\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rules_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Rules<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Rules3\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rules_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rules,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Rules,this,\'3\',false);\"><A HREF=\"http:\/\/www.namba.com\/\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Insurance\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rules_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Insurance<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Rules4\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rules_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rules,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Rules,this,\'4\',false);\"><A HREF=\"\/files\/Forms\/Rules\/IRCWCC_Shiplist_2010__2_.pdf\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Ship List\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rules_f4\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Ship&nbsp;List<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Rules5\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rules_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rules,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_Rules,this,\'5\',false);\"><A HREF=\"\/sln\/sl.htm\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"HTMLShip list\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rules_f5\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">HTMLShip&nbsp;list<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Rules6\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rules_Link6\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rules,this,\'6\',true);\" onmouseout=\"doMouseChange(nav_Rules,this,\'6\',false);\"><A HREF=\"\/files\/Bylaws_Rules\/Bylaws_2013.htm\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"HTML Bylaws\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rules_f6\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">HTML&nbsp;Bylaws<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Rules7\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Rules_Link7\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Rules,this,\'7\',true);\" onmouseout=\"doMouseChange(nav_Rules,this,\'7\',false);\"><A HREF=\"\/files\/Bylaws_Rules\/Rules_2013.htm\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"HTML Rules\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Rules_f7\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size12 Helvetica12\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">HTML&nbsp;Rules<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportRules(nav_Rules,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

