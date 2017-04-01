var nav_Awards3 = new Object();

nav_Awards3.underline="false";
nav_Awards3.justification="center";
nav_Awards3.textFont="Helvetica";
nav_Awards3.selectedUnderline="false";
nav_Awards3.accentStyle="Arrow";
nav_Awards3.funButton="Arts_and_Crafts";
nav_Awards3.mouseoverBgcolor="";
nav_Awards3.darkButton="Basic_Black";
nav_Awards3.mouseoverBold="false";
nav_Awards3.buttonCategory="modern";
nav_Awards3.italic="false";
nav_Awards3.importedImageMouseOver="";
nav_Awards3.textSize="9";
nav_Awards3.tabCategory="basic";
nav_Awards3.style="buttons";
nav_Awards3.selectedBgcolor="";
nav_Awards3.accentColor="Black";
nav_Awards3.graphicSelected="true";
nav_Awards3.hasLinks="true";
nav_Awards3.selectedTextcolor="#B91806";
nav_Awards3.basicButton="Gray";
nav_Awards3.accentType="";
nav_Awards3.graphicMouseover="true";
nav_Awards3.horizontalSpacing="10";
nav_Awards3.lineWidth="2";
nav_Awards3.selectedEffect="true";
nav_Awards3.lineColor="#000000";
nav_Awards3.modernButton="Industrial";
nav_Awards3.border="";
nav_Awards3.simpleButton="Autumn_Leaves";
nav_Awards3.type="Navigation";
nav_Awards3.bold="true";
nav_Awards3.sophisticatedButton="Antique";
nav_Awards3.localPreview="false";
nav_Awards3.verticalSpacing="5";
nav_Awards3.basicTab="White";
nav_Awards3.selectedBold="false";
nav_Awards3.mouseoverEffect="true";
nav_Awards3.navID="nav_Awards3";
nav_Awards3.mouseoverTextcolor="#B91806";
nav_Awards3.imageHeight="41";
nav_Awards3.mouseoverUnderline="false";
nav_Awards3.texturedButton="Brick";
nav_Awards3.selectedItalic="false";
nav_Awards3.brightButton="Chicky";
nav_Awards3.importedImageSelected="";
nav_Awards3.dirty="false";
nav_Awards3.squareTab="Camel";
nav_Awards3.horizontalWrap="5";
nav_Awards3.numLinks="5";
nav_Awards3.imageWidth="138";
nav_Awards3.mouseoverItalic="false";
nav_Awards3.importedImage="";
nav_Awards3.background="";
nav_Awards3.shinyButton="Shiny_Aqua";
nav_Awards3.version="5";
nav_Awards3.orientation="vertical";
nav_Awards3.textColor="#000000";
nav_Awards3.holidayButton="Christmas_Ornaments";

nav_Awards3.navName = "Awards3";
nav_Awards3.imagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Awards3.selectedImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Awards3.mouseOverImagePath = "../_media/elements/LayoutClipart/Buttons/Industrial_Button.gif";
nav_Awards3.imageWidth = "138";
nav_Awards3.imageHeight = "41";
nav_Awards3.fontClass = "size9 Helvetica9";
nav_Awards3.fontFace = "Helvetica, Arial, sans-serif";


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


nav_Awards3.links=new Array(5);
var nav_Awards3_Link1 = new Object();
nav_Awards3_Link1.type = "existing";
nav_Awards3_Link1.displayName = "Spectacular sink ";
nav_Awards3_Link1.linkWindow = "_self";
nav_Awards3_Link1.linkValue = "awards/index.html\/Most-spectacular-sink.html";
nav_Awards3_Link1.linkIndex = "1";
nav_Awards3.links[0] = nav_Awards3_Link1;
var nav_Awards3_Link2 = new Object();
nav_Awards3_Link2.type = "existing";
nav_Awards3_Link2.displayName = "Ball Breaker";
nav_Awards3_Link2.linkWindow = "_self";
nav_Awards3_Link2.linkValue = "awards/index.html\/Ball-Buster.html";
nav_Awards3_Link2.linkIndex = "2";
nav_Awards3.links[1] = nav_Awards3_Link2;
var nav_Awards3_Link3 = new Object();
nav_Awards3_Link3.type = "existing";
nav_Awards3_Link3.displayName = "Best Dress Award";
nav_Awards3_Link3.linkWindow = "_self";
nav_Awards3_Link3.linkValue = "awards/index.html\/BestDressed.html";
nav_Awards3_Link3.linkIndex = "3";
nav_Awards3.links[2] = nav_Awards3_Link3;
var nav_Awards3_Link4 = new Object();
nav_Awards3_Link4.type = "existing";
nav_Awards3_Link4.displayName = "Swiss Cheese";
nav_Awards3_Link4.linkWindow = "_self";
nav_Awards3_Link4.linkValue = "awards/index.html\/Most-Damage\/Most-Damage--sunk.html";
nav_Awards3_Link4.linkIndex = "4";
nav_Awards3.links[3] = nav_Awards3_Link4;
var nav_Awards3_Link5 = new Object();
nav_Awards3_Link5.type = "existing";
nav_Awards3_Link5.displayName = "Risk Trophy";
nav_Awards3_Link5.linkWindow = "_self";
nav_Awards3_Link5.linkValue = "awards/index.html\/RiskTrophey.html";
nav_Awards3_Link5.linkIndex = "5";
nav_Awards3.links[4] = nav_Awards3_Link5;
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

function addMouseAndStyleSupportAwards3(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR id=\"vNavTR_Link_Awards31\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Awards3_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Awards3,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Awards3,this,\'1\',false);\"><A HREF=\"\/Awards\/Most-spectacular-sink.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Spectacular sink \"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Awards3_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Spectacular&nbsp;sink&nbsp;<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Awards32\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Awards3_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Awards3,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Awards3,this,\'2\',false);\"><A HREF=\"\/Awards\/Ball-Buster.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Ball Breaker\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Awards3_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Ball&nbsp;Breaker<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Awards33\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Awards3_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Awards3,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Awards3,this,\'3\',false);\"><A HREF=\"\/Awards\/BestDressed.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Best Dress Award\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Awards3_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Best&nbsp;Dress&nbsp;Award<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Awards34\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Awards3_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Awards3,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Awards3,this,\'4\',false);\"><A HREF=\"\/Awards\/Most-Damage\/Most-Damage--sunk.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Swiss Cheese\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Awards3_f4\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Swiss&nbsp;Cheese<\/FONT><\/DIV><\/A><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"5\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR id=\"vNavTR_Link_Awards35\"><TD NOWRAP HEIGHT=\"41\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"Awards3_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;background-image:url(\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/Buttons\/Industrial_Button.gif);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_Awards3,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_Awards3,this,\'5\',false);\"><A HREF=\"\/Awards\/RiskTrophey.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Risk Trophy\"><DIV  STYLE=\"width:138px;height:41px;cursor: pointer;cursor: hand;\"><FONT ID=\"Awards3_f5\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"vertical-align:middle;color:#000000;line-height:41px;\">Risk&nbsp;Trophy<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportAwards3(nav_Awards3,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

