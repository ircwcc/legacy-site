var nav_members4 = new Object();

nav_members4.underline="false";
nav_members4.justification="center";
nav_members4.accentStyle="Arrow";
nav_members4.textFont="Helvetica";
nav_members4.selectedUnderline="false";
nav_members4.funButton="Arts_and_Crafts";
nav_members4.mouseoverBgcolor="";
nav_members4.darkButton="Basic_Black";
nav_members4.buttonCategory="modern";
nav_members4.mouseoverBold="false";
nav_members4.italic="false";
nav_members4.importedImageMouseOver="";
nav_members4.textSize="10";
nav_members4.tabCategory="basic";
nav_members4.style="buttons";
nav_members4.selectedTextcolor="#B91806";
nav_members4.graphicSelected="true";
nav_members4.selectedBgcolor="";
nav_members4.accentColor="Black";
nav_members4.hasLinks="true";
nav_members4.basicButton="Gray";
nav_members4.accentType="none";
nav_members4.graphicMouseover="true";
nav_members4.horizontalSpacing="10";
nav_members4.lineColor="#000000";
nav_members4.selectedEffect="true";
nav_members4.lineWidth="2";
nav_members4.modernButton="Industrial";
nav_members4.border="";
nav_members4.simpleButton="Autumn_Leaves";
nav_members4.type="Navigation";
nav_members4.sophisticatedButton="Antique";
nav_members4.bold="true";
nav_members4.localPreview="true";
nav_members4.verticalSpacing="5";
nav_members4.selectedBold="false";
nav_members4.basicTab="White";
nav_members4.mouseoverEffect="true";
nav_members4.navID="nav_members4";
nav_members4.mouseoverTextcolor="#B91806";
nav_members4.imageHeight="41";
nav_members4.mouseoverUnderline="false";
nav_members4.texturedButton="Brick";
nav_members4.selectedItalic="false";
nav_members4.brightButton="Chicky";
nav_members4.importedImageSelected="";
nav_members4.dirty="false";
nav_members4.squareTab="Camel";
nav_members4.horizontalWrap="5";
nav_members4.mouseoverItalic="false";
nav_members4.numLinks="7";
nav_members4.imageWidth="138";
nav_members4.importedImage="";
nav_members4.background="";
nav_members4.version="5";
nav_members4.shinyButton="Shiny_Aqua";
nav_members4.orientation="vertical";
nav_members4.textColor="#000000";
nav_members4.holidayButton="Christmas_Ornaments";
nav_members4.width="138";
nav_members4.height="317";

nav_members4.navName = "members4";
nav_members4.imagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_members4.selectedImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_members4.mouseOverImagePath = "_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_members4.imageWidth = "138";
nav_members4.imageHeight = "41";
nav_members4.fontClass = "size10 Helvetica10";
nav_members4.fontFace = "Helvetica, Arial, sans-serif";


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


nav_members4.links=new Array(7);
var nav_members4_Link1 = new Object();
nav_members4_Link1.type = "existing";
nav_members4_Link1.displayName = "Bylaws";
nav_members4_Link1.linkWindow = "_blank";
nav_members4_Link1.linkValue = "files/index.html\/Bylaws_Rules\/IRCWCC_Bylaws__ed__04-2004_revised_12-2013_.pdf";
nav_members4_Link1.linkIndex = "1";
nav_members4.links[0] = nav_members4_Link1;
var nav_members4_Link2 = new Object();
nav_members4_Link2.type = "existing";
nav_members4_Link2.displayName = "Rules";
nav_members4_Link2.linkWindow = "_self";
nav_members4_Link2.linkValue = "files/index.html\/Bylaws_Rules\/Rules_2013.htm";
nav_members4_Link2.linkIndex = "2";
nav_members4.links[1] = nav_members4_Link2;
var nav_members4_Link3 = new Object();
nav_members4_Link3.type = "existing";
nav_members4_Link3.displayName = "Ships List";
nav_members4_Link3.linkWindow = "_blank";
nav_members4_Link3.linkValue = "files/index.html\/Bylaws_Rules\/IRCWCC_Shiplist_2010__2_.pdf";
nav_members4_Link3.linkIndex = "3";
nav_members4.links[2] = nav_members4_Link3;
var nav_members4_Link4 = new Object();
nav_members4_Link4.type = "existing";
nav_members4_Link4.displayName = "Bylaws\/Rules in PDF";
nav_members4_Link4.linkWindow = "_blank";
nav_members4_Link4.linkValue = "Rules.html";
nav_members4_Link4.linkIndex = "4";
nav_members4.links[3] = nav_members4_Link4;
var nav_members4_Link5 = new Object();
nav_members4_Link5.type = "existing";
nav_members4_Link5.displayName = "Rules on Ballot ";
nav_members4_Link5.linkWindow = "_blank";
nav_members4_Link5.linkValue = "files/index.html\/Ballots\/2014\/2014_Ballot_-_Address_Redacted.pdf";
nav_members4_Link5.linkIndex = "5";
nav_members4.links[4] = nav_members4_Link5;
var nav_members4_Link6 = new Object();
nav_members4_Link6.type = "existing";
nav_members4_Link6.displayName = "E-Board notices";
nav_members4_Link6.linkWindow = "_self";
nav_members4_Link6.linkValue = "E-Board-notices.html";
nav_members4_Link6.linkIndex = "6";
nav_members4.links[5] = nav_members4_Link6;
var nav_members4_Link7 = new Object();
nav_members4_Link7.type = "url";
nav_members4_Link7.displayName = "Insurance";
nav_members4_Link7.linkWindow = "_blank";
nav_members4_Link7.linkValue = "Members-Area.html\/\/www.namba.com\/content\/default.asp";
nav_members4_Link7.linkIndex = "7";
nav_members4.links[6] = nav_members4_Link7;
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

function addMouseAndStyleSupportmembers4(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_members41\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"members4_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_members4,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_members4,this,\'1\',false);\"><A HREF=\"\/files\/Bylaws_Rules\/IRCWCC_Bylaws__ed__04-2004_revised_12-2013_.pdf\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Bylaws\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"members4_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Bylaws<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_members42\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"members4_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_members4,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_members4,this,\'2\',false);\"><A HREF=\"\/files\/Bylaws_Rules\/Rules_2013.htm\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Rules\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"members4_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Rules<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_members43\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"members4_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_members4,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_members4,this,\'3\',false);\"><A HREF=\"\/files\/Bylaws_Rules\/IRCWCC_Shiplist_2010__2_.pdf\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Ships List\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"members4_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Ships&nbsp;List<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_members44\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"members4_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_members4,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_members4,this,\'4\',false);\"><A HREF=\"\/Rules.html\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Bylaws\/Rules in PDF\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"members4_f4\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Bylaws\/Rules&nbsp;in&nbsp;PDF<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_members45\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"members4_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_members4,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_members4,this,\'5\',false);\"><A HREF=\"\/files\/Ballots\/2014\/2014_Ballot_-_Address_Redacted.pdf\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Rules on Ballot \"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"members4_f5\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Rules&nbsp;on&nbsp;Ballot&nbsp;<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_members46\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"members4_Link6\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_members4,this,\'6\',true);\" onmouseout=\"doMouseChange(nav_members4,this,\'6\',false);\"><A HREF=\"\/E-Board-notices.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"E-Board notices\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"members4_f6\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">E-Board&nbsp;notices<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_members47\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"members4_Link7\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_members4,this,\'7\',true);\" onmouseout=\"doMouseChange(nav_members4,this,\'7\',false);\"><A HREF=\"http:\/\/www.namba.com\/content\/default.asp\" TARGET=\"_blank\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Insurance\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"members4_f7\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size10 Helvetica10\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Insurance<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportmembers4(nav_members4,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

