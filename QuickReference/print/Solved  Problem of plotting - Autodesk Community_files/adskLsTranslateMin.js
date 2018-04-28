function _adskLsEndsWithNonBreakingWord(e){if(!e)return!1;for(var t=0;t<mAdskLsNonBreakingRegex.length;t++)if(e.match(mAdskLsNonBreakingRegex[t]))return!0;return!1}function adskLsTranslate(e,t,n){if(!e)return;adskLsOriginal();if(e.clientId)_adskLsSegment(e,t);else for(var r=0;r<e.length;r++)_adskLsSegment(e[r],t);mAdskNbTranslateApiInProgress=0,mAdskNbRequestsProcessing=0,_adskLsTranslateApi(t,n)}function adskLsOriginal(){for(var e=0;e<mAdskLsObjs.length;e++){var t=mAdskLsObjs[e];t.doOriginal()}mAdskNbTranslateApiInProgress=0,mAdskNbRequestsProcessing=0}function _adskLsGetLanguageNoSpecialCharacters(e){return e.replace(/[^\w\s]/gi,"")}function _adskLsHasClass(e,t){return t&&e&&e.className&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function _adskLsIsAutodeskCom(){var e=document.domain,t=e&&e.toLowerCase().indexOf(mAutodeskDomain)>=0&&e.toLowerCase().indexOf(mAutodeskDomain)==e.length-mAutodeskDomain.length;return t}function _adskLsIsIe(){return navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident/")>=0}function _adskLsIsFirefox(){return typeof InstallTrigger!="undefined"}function _adskLsIsSupportCors(){var e=mAdskLsJq.support.cors;return e&&(!_adskLsIsIe()||!!_adskLsIsAutodeskCom())}function _adskGetParentNodeWithClass(e,t){if(!e||!t)return undefined;var n=e;while(n=n.parentNode)if(_adskLsHasClass(n,t))return n;return undefined}function _adskLsSegment(e,t){var n=mAdskLsSegmentedClassName+"AnyLocale",r=[],i=e.toTranslateElements;if(i)for(var s=0;s<i.length;s++){var o=i[s];o&&!_adskLsHasClass(o,n)&&(r.push(o),o.className=o.className+" "+n)}var u=e.toTranslateIds;if(u)for(var s=0;s<u.length;s++){var o=document.getElementById(u[s]);o&&!_adskLsHasClass(o,n)&&(r.push(o),o.className=o.className+" "+n)}var a=e.toTranslateClasses;if(a)for(var s=0;s<a.length;s++){var o=getElementsByClassName(a[s]);if(o)for(var f=0;f<o.length;f++){var l=o[f];l&&!_adskLsHasClass(l,n)&&(r.push(l),l.className=l.className+" "+n)}}for(var s=0;s<r.length;s++){var c=new AdskLocalizationWidget(e);mAdskLsObjs.push(c),c.parseText(r[s],n)}}function _adskLsTranslateFake(){for(var e=0;e<mAdskLsObjs.length;e++){var t=mAdskLsObjs[e];t.translateFake()}}function _adskTranslateApiInternalCallback(e){mAdskNbTranslateApiInProgress--,mAdskNbTranslateApiInProgress<=0&&mAdskNbRequestsProcessing<=0&&e&&(mAdskNbTranslateApiInProgress=0,mAdskNbRequestsProcessing=0,e())}function _adskLsTranslateApi(e,t){if(mAdskLsObjs.length==0)_adskTranslateApiInternalCallback(t);else{mAdskNbTranslateApiInProgress+=mAdskLsObjs.length;for(var n=0;n<mAdskLsObjs.length;n++){var r=mAdskLsObjs[n];r.translateApi(e,t)}}}function AdskLocalizationWidget(e){return typeof jQuery=="undefined"?function(){var e=(new Date).getTime(),t=document.createElement("SCRIPT");t.src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t);var n=function(e){window.jQuery?e(jQuery):window.setTimeout(function(){n(e)},20)};n(function(t){t(function(){var t=(new Date).getTime(),n=t-e;mAdskLsJq=jQuery})})}():mAdskLsJq||(mAdskLsJq=jQuery),this.mProduct=e.product,this.mHostedUrl=document.URL,this.mSrcLng=e.srcLng,this.mClientId=e.clientId,this.mNbSegmentsPerRequest=e.nbSegmentsPerRequest,this.mNbSegmentsPerRequest||(this.mNbSegmentsPerRequest=10),this.mMaxSegmentsSizePerRequest=e.maxSegmentsSizePerRequest,this.mMaxSegmentsSizePerRequest||(this.mMaxSegmentsSizePerRequest=1e4),this.mToMergeSpecialCases=[],this.mToMergeSpecialCases.push(["Infr.","Map Server",!1]),this.mTagsToSkip=new Object,this.mTagsToSkip.SCRIPT="true",this.mTagsToSkip.STYLE="true",this.mTagsToSkip.META="true",this.mTagsToSkip.LINK="true",this.mTagsToSkip.IMG="true",this.mTagsDelimiter=new Object,this.mTagsDelimiter.HTML="true",this.mTagsDelimiter.HEAD="true",this.mTagsDelimiter.BODY="true",this.mTagsDelimiter.P="true",this.mTagsDelimiter.p="true",this.mTagsDelimiter.H1="true",this.mTagsDelimiter.H2="true",this.mTagsDelimiter.H3="true",this.mTagsDelimiter.H4="true",this.mTagsDelimiter.H5="true",this.mTagsDelimiter.H6="true",this.mTagsDelimiter.H7="true",this.mTagsDelimiter.H8="true",this.mTagsDelimiter.H9="true",this.mTagsDelimiter.OPTION="true",this.mTagsDelimiter.LI="true",this.mTagsDelimiter.DIV="true",this.mTagsDelimiter.TABLE="true",this.mTagsDelimiter.TH="true",this.mTagsDelimiter.TR="true",this.mTagsDelimiter.TD="true",this.mToTranslate=[],this.mToTranslateSegmented=[],this.mParsed=!1,this.mNoTranslateTextNodes=[],this.mPhFollowingTextNodes=[],this.mOriginalData=[],this.mTranslatedData=new Object,this.mSplitTextFunction=this.splitTextEn,this.mMergeSegments=this.mergeSegmentsEn,this.mIsMergeSegments=this.isMergeSegmentsEn,e.highlightSegments?this.highlightSegments=e.highlightSegments:this.highlightSegments=!1,this.mtClass=e.mtClass,this.mtClass||(this.mtClass=mAdskLsMtClassNameDefault),this.exactClass=e.exactClass,this.exactClass||(this.exactClass=mAdskLsExactClassNameDefault),this.iceClass=e.iceClass,this.iceClass||(this.iceClass=mAdskLsIceClassNameDefault),this.titleSrc=e.titleSrc,this.noTranslateClass=e.noTranslateClass,this.noTranslateClass||(this.noTranslateClass=mAdskLsNoTranslateClassNameDefault),e.logSegments?this.logSegments=e.logSegments:this.logSegments=!1,e.logSegmentOnMouseOver?this.logSegmentOnMouseOver=e.logSegmentOnMouseOver:this.logSegmentOnMouseOver=!1,e.corsEnabled===!1?this.corsEnabled=!1:this.corsEnabled=!0,this}function handleTranlatedResponse(e,t,n,r,i,s,o,u){if(e&&e.status=="ok")for(var a=0;a<e.result.length;a++){var f=t[a],l=e.result[a],c=undefined,h=undefined;if(l)c=e.result[a].trgText,h=e.result[a].type;else{c="N/A";for(var p=0;p<f.length-1;p++)c+="{"+(p+1)+"}"}var d=n.getSplitByPlaceholders(c);if(d.length!=f.length)return;var v=!1;for(var m=0;m<f.length;m++){var g=f[m];if(g&&g.length>0){var y="",b=0;m==0&&(b=n.getNbWhiteSpaceLeft(g[0].data));var w=0;m==f.length-1&&(w=n.getNbWhiteSpaceRight(g[g.length-1].data)),y=n.addWhiteSpacesLeft(y,b),y+=d[m],y=n.addWhiteSpacesRight(y,w);var E=!1;for(var S=0;S<g.length;S++){if(!v&&(h=="MT"&&r||h=="EXACT"&&i||h=="ICE"&&s)){var x=undefined;h=="MT"?x=r:h=="EXACT"?x=i:h=="ICE"&&(x=s);var T=g[S];while(T=T.parentNode)if(_adskLsHasClass(T,mAdskLsDecoClassName)){r&&(T.className=T.className.replace(new RegExp("\\b"+r+"\\b"),"")),i&&(T.className=T.className.replace(new RegExp("\\b"+i+"\\b"),"")),s&&(T.className=T.className.replace(new RegExp("\\b"+s+"\\b"),"")),x&&(T.className=T.className+" "+x),v=!0;break}}!E&&g[S].data.trim().length>0?(g[S].data=y,E=!0):g[S].data="";for(var N=0;N<n.mTranslatedData[o].length;N++)n.mTranslatedData[o][N][0]==g[S]&&(n.mTranslatedData[o][N][1]=g[S].data,n.mTranslatedData[o][N][2]=h)}}}}mAdskNbRequestsProcessing--,mAdskNbRequestsProcessing<=0&&(mAdskNbRequestsProcessing=0,_adskTranslateApiInternalCallback(u))}var mAutodeskDomain="autodesk.com",mAdskLsServerName="translate."+mAutodeskDomain,mAdskLsObjs=[],mAdskLsSegmentedClassName="adskLsSeg",mAdskLsDecoClassName="adskLsDeco",mAdskLsExactClassNameDefault="adskLsExact",mAdskLsMtClassNameDefault="adskLsMt",mAdskLsIceClassNameDefault="adskLsIce",mAdskLsNoTranslateClassNameDefault="noTranslate",mAdskLsSegNotAvailable="<NOT_AVAILABLE>",mAdskLsJq=undefined,mAdskNbTranslateApiInProgress=0,mAdskNbRequestsProcessing=0,mAdskLsNonBreakingWords=["a.m.","b.i.p.","co.","corp.","deg.","diff.","d.o.f.","dr.","e.","e.g.","etc.","e.v.","gen.","horiz.","hr.","ie.","i.e.","inc.","incl.","loc.","ltd.","mat.","max.","min.","mr.","ms.","n.c.","no.","n.o.","nov.","n.v.","oct.","p.","p.m.","p.o.i.","proj.","res.","resp.","segs.","st.","str.","temp.","u.k.","u.s.","u.s.a.","v.","vol.","vs.","w.r.t.","sr."],mAdskLsNonBreakingRegex=[];RegExp.quote=function(e){return(e+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")};for(var i=0;i<mAdskLsNonBreakingWords.length;i++){var regex=new RegExp("(\\s|\\(|^)"+RegExp.quote(mAdskLsNonBreakingWords[i])+"$","i");mAdskLsNonBreakingRegex.push(regex)}var getElementsByClassName=function(e,t,n){return document.getElementsByClassName?getElementsByClassName=function(e,t,n){n=n||document;var r=n.getElementsByClassName(e),i=t?new RegExp("\\b"+t+"\\b","i"):null,s=[],o;for(var u=0,a=r.length;u<a;u+=1)o=r[u],(!i||i.test(o.nodeName))&&s.push(o);return s}:document.evaluate?getElementsByClassName=function(e,t,n){t=t||"*",n=n||document;var r=_adskLsSplitCrossBrowser(e," "),i="",s="http://www.w3.org/1999/xhtml",o=document.documentElement.namespaceURI===s?s:null,u=[],a,f;for(var l=0,c=r.length;l<c;l+=1)i+="[contains(concat(' ', @class, ' '), ' "+r[l]+" ')]";try{a=document.evaluate(".//"+t+i,n,o,0,null)}catch(h){a=document.evaluate(".//"+t+i,n,null,0,null)}while(f=a.iterateNext())u.push(f);return u}:getElementsByClassName=function(e,t,n){t=t||"*",n=n||document;var r=_adskLsSplitCrossBrowser(e," "),i=[],s=t==="*"&&n.all?n.all:n.getElementsByTagName(t),o,u=[],a;for(var f=0,l=r.length;f<l;f+=1)i.push(new RegExp("(^|\\s)"+r[f]+"(\\s|$)"));for(var c=0,h=s.length;c<h;c+=1){o=s[c],a=!1;for(var p=0,d=i.length;p<d;p+=1){a=i[p].test(o.className);if(!a)break}a&&u.push(o)}return u},getElementsByClassName(e,t,n)};typeof String.prototype.trim!="function"&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t}),AdskLocalizationWidget.prototype.doOriginal=function(){if(!this.mParsed)return;for(var e=0;e<this.mToTranslateSegmented.length;e++){var t=this.mToTranslateSegmented[e],n=!1;if(t.segment&&t.segment.trim().length>0)for(var r=0;r<t.textNodes.length;r++){var i=t.textNodes[r];for(var s=0;s<i.length;s++){for(var o=0;o<this.mOriginalData.length;o++)if(this.mOriginalData[o][0]===i[s]){i[s].data=this.mOriginalData[o][1];break}if(!n){var u=i[s];while(u=u.parentNode)if(_adskLsHasClass(u,mAdskLsDecoClassName)){this.mtClass&&(u.className=u.className.replace(new RegExp("\\b"+this.mtClass+"\\b"),"")),this.exactClass&&(u.className=u.className.replace(new RegExp("\\b"+this.exactClass+"\\b"),"")),this.iceClass&&(u.className=u.className.replace(new RegExp("\\b"+this.iceClass+"\\b"),"")),n=!0;break}}}}}},AdskLocalizationWidget.prototype.contains=function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1},AdskLocalizationWidget.prototype.getPlaceholders=function(e){return e?e.match(/\{[0-9]+\}/gmi):!1},AdskLocalizationWidget.prototype.getSplitByPlaceholders=function(e){return e?_adskLsSplitCrossBrowser(e,/\{[0-9]+\}/gmi):undefined},AdskLocalizationWidget.prototype.getPlaceholders2=function(e){return e?e.match(/\[[0-9]+\]/gmi):!1},AdskLocalizationWidget.prototype.getSplitByPlaceholders2=function(e){return e?_adskLsSplitCrossBrowser(e,/\[[0-9]+\]/gmi):undefined},AdskLocalizationWidget.prototype.getPlaceholders3=function(e){return e?e.match(/\([0-9]+\)/gmi):!1},AdskLocalizationWidget.prototype.getSplitByPlaceholders3=function(e){return e?_adskLsSplitCrossBrowser(e,/\([0-9]+\)/gmi):undefined},AdskLocalizationWidget.prototype.splitSegments=function(e){for(var t=0;t<this.mToTranslate.length;t++){var n=this.mToTranslate[t],r=undefined;this.contains(this.mNoTranslateTextNodes,n.textNodes[0])?r=[n.text]:r=e(n.text),n.segments=r;if(r.length>1){var i=[],s=n.textNodes[0],o=s.parentNode;for(var u=0;u<r.length;u++){u<r.length-1&&(r[u]+=" ");var a=document.createTextNode(r[u]);o.insertBefore(a,s),i.push([a])}o.removeChild(s),n.textNodes=i}else n.textNodes=[n.textNodes]}},AdskLocalizationWidget.prototype.mergeSegmentsEn=function(){var e="",t=[];t.push([]);var n=[];for(var r=0;r<this.mToTranslate.length;r++){var i=this.mToTranslate[r];if(e.length>0&&r>0&&this.isContainsBreakingTag(this.mToTranslate[r-1].endedByTag)){e=e.trim();if(e.length>0){var s={};s.segment=e,s.textNodes=t,s.phValues=n,this.mToTranslateSegmented.push(s)}e="",t=[],t.push([]),n=[]}if(i.segments)for(var o=0;o<i.segments.length;o++){if(i.placeholders&&i.placeholders["ph"+o])for(var u=0;u<i.placeholders["ph"+o].length;u++)n.push(i.placeholders["ph"+o][u]);if(e.length==0)e+=i.segments[o],t=this.pushTextNodes(t,t.length-1,i.textNodes[o]);else if(this.mIsMergeSegments(e,i.segments[o])){e=e.trim();var a=i.segments[o].replace(/^\s+/g,""),f=this.isNeedSpaceBetweenSegments(e,a);if(e.length>1&&o==0&&r>0&&(!this.isFollowingTextNodes(this.getFlatArray(this.mToTranslate[r-1].textNodes),this.getFlatArray(i.textNodes))||!this.isSameNodesStack(this.mToTranslate[r-1].nodesStack,i.nodesStack))){var l=0;i.placeholders&&i.placeholders["ph"+o]&&(l=i.placeholders["ph"+o].length);var c=this.getPlaceholderValue(this.getFlatArray(this.mToTranslate[r-1].textNodes),this.getFlatArray(i.textNodes),this.mToTranslate[r-1].nodesStack,i.nodesStack);c.startsWith("</")&&f?e+="{"+(n.length+1)+"}"+" ":f?e+=" {"+(n.length+1)+"}":e+="{"+(n.length+1)+"}",f=!1,n.splice(n.length-l,0,c),t.push([])}f&&(e+=" ");var a=i.segments[o].replace(/^\s+/g,"");e+=a,t=this.pushTextNodes(t,t.length-1,i.textNodes[o])}else{e=e.trim();if(e.length>0){var s={};s.segment=e,s.textNodes=t,s.phValues=n,this.mToTranslateSegmented.push(s)}e=i.segments[o],t=[],t.push([]),t=this.pushTextNodes(t,0,i.textNodes[o]),n=[]}}}e=e.trim();if(e.length>0){var s={};s.segment=e,s.textNodes=t,s.phValues=n,this.mToTranslateSegmented.push(s)}},AdskLocalizationWidget.prototype.parseText=function(e,t){if(this.mParsed)return;this.recurseDomChildren(e,0,!1,t),this.splitSegments(this.mSplitTextFunction),this.identifyPlaceholders(this.getPlaceholders,this.getSplitByPlaceholders),this.identifyPlaceholders(this.getPlaceholders2,this.getSplitByPlaceholders2),this.identifyPlaceholders(this.getPlaceholders3,this.getSplitByPlaceholders3),this.mMergeSegments(),this.fixPlaceholders(),this.replaceNoTranslateNodes(),this.consolidatePlaceholders(),this.storeOriginalSegments(),this.decorateSegments(this.highlightSegments,this.titleSrc,this.mtClass,this.exactClass,this.iceClass),this.logSegments&&this.logSegmentsToConsole(),this.mParsed=!0},AdskLocalizationWidget.prototype.constructSegment=function(e){if(!e)return"";var t="";for(var n=0;n<e.length;n++){var r=e[n];for(var i=0;i<r.length;i++)t+=r[i].data;n<e.length-1&&(t+="{"+(n+1)+"}")}return t},AdskLocalizationWidget.prototype.replaceNoTranslateNodes=function(){for(var e=0;e<this.mToTranslateSegmented.length;e++){var t=this.mToTranslateSegmented[e],n=t.segment,r=t.textNodes;if(r){var i={};i.segmentIndex=[],i.textNodes=[],i.textNodeIndex=[];for(var s=0;s<r.length;s++)for(var o=0;o<r[s].length;o++){var u=r[s][o];this.contains(this.mNoTranslateTextNodes,u)&&(i.segmentIndex.push(s),i.textNodes.push(u),i.textNodeIndex.push(o))}for(var a=i.segmentIndex.length-1;a>=0;a--){var f=i.textNodes[a],l=document.createTextNode(""),c=document.createTextNode(""),h=f.parentNode;h.insertBefore(c,f),h.insertBefore(l,c),t.textNodes[i.segmentIndex[a]].splice(i.textNodeIndex[a],1,c),t.textNodes.splice(i.segmentIndex[a],0,[l]);var p=this.constructSegment(t.textNodes);t.segment=p,t.phValues||(t.phValues=[]),t.phValues.splice(i.segmentIndex[a],0,i.textNodes[a].data)}}}},AdskLocalizationWidget.prototype.consolidatePlaceholders=function(){for(var e=0;e<this.mToTranslateSegmented.length;e++){var t=this.mToTranslateSegmented[e],n=t.segment,r=undefined;if(r=this.getConsecutivePlaceholders(n)){var i=n,s=undefined;for(var o=r.length-1;o>=0;o--){var u=this.getPlaceholdersIndexes(r[o]);if(u.length>1){s||(s=[]);var a="";for(var f=u.length-1;f>=0;f--){if(f>0){var l=t.textNodes.splice(u[f]-1,1);if(!l||l.length!=1||l[0].data&&l[0].data.length>0)throw"Node should now be removed (segment: '"+n+"')"}var c=0;for(var h=0;h<o-1;h++)c+=r[h].length;c+=u.length-f-1,a+=t.phValues[c]}i=i.replace(r[o],"{"+(o+1)+"}"),s.unshift(a)}}t.segment=i,s&&(t.phValues=s)}}},AdskLocalizationWidget.prototype.getPlaceholdersIndexes=function(e){if(!e)return[];var t=this.getPlaceholders(e);if(!t)return[];var n=[];for(var r=0;r<t.length;r++)n.push(parseInt(t[r].substring(1,t[r].length-1)));return n},AdskLocalizationWidget.prototype.getConsecutivePlaceholders=function(e){return e?e.match(/(\{[0-9]+\}){1,}/gmi):undefined},AdskLocalizationWidget.prototype.storeOriginalSegments=function(){for(var e=0;e<this.mToTranslateSegmented.length;e++){var t=this.mToTranslateSegmented[e];if(t.segment&&t.segment.trim().length>0)for(var n=0;n<t.textNodes.length;n++){var r=t.textNodes[n];for(var i=0;i<r.length;i++)this.mOriginalData.push([r[i],r[i].data])}}},AdskLocalizationWidget.prototype.getFirstNotEmptyTextNode=function(e){if(!e)return undefined;for(var t=0;t<e.length;t++)for(j=0;j<e[t].length;j++)if(e[t][j].data&&e[t][j].data.trim().length>0)return e[t][j];return undefined},AdskLocalizationWidget.prototype.getLastNotEmptyTextNode=function(e){if(!e)return undefined;for(var t=e.length-1;t>=0;t--)for(j=e[t].length-1;j>=0;j--)if(e[t][j].data&&e[t][j].data.trim().length>0)return e[t][j];return undefined},AdskLocalizationWidget.prototype.decorateSegments=function(e,t,n,r,i){for(var s=0;s<this.mToTranslateSegmented.length;s++){var o=this.mToTranslateSegmented[s];if(o.segment&&o.segment.trim().length>0){var u=this.getFirstNotEmptyTextNode(o.textNodes),a=this.getLastNotEmptyTextNode(o.textNodes);if(u&&a){var f=u===a?u:this.getCommonAncestor(u,a);if(!f)throw"Ancestor not found (segment: '"+o.segment+"')";if(!_adskGetParentNodeWithClass(u,mAdskLsDecoClassName)){var l=document.createElement("SPAN");l.className=l.className+" "+mAdskLsDecoClassName,l.srcText=o.segment;var c=mAdskLsSegNotAvailable,h=mAdskLsSegNotAvailable;s>0&&this.mToTranslateSegmented[s-1].segment&&this.mToTranslateSegmented[s-1].segment.trim().length>0&&(c=this.mToTranslateSegmented[s-1].segment),s<this.mToTranslateSegmented.length-1&&this.mToTranslateSegmented[s+1].segment&&this.mToTranslateSegmented[s+1].segment.trim().length>0&&(h=this.mToTranslateSegmented[s+1].segment),l.prevText=c,l.nextText=h,e&&(l.onmouseover=this.segmentOnMouseOver,l.onmouseout=this.segmentOnMouseOut,this.logSegmentOnMouseOver&&(l.logSegMouseOver="true"));if(t){var p=o.segment;if(o.phValues)for(var d=0;d<o.phValues.length;d++)p+=" /// {"+(d+1)+"}: "+o.phValues[d];l.title=p}var v=[],m=!1,g=!1,y=undefined;if(f===u){var b=u.parentNode;b.insertBefore(l,u),l.appendChild(u)}else{for(var w=0;w<f.childNodes.length;w++){var E=f.childNodes[w];m||(m=this.isContainsNode(E,u),m&&(y=E));if(m){v.push(E),g=this.isContainsNode(E,a);if(g)break}}y&&f.insertBefore(l,y);for(var w=0;w<v.length;w++)l.appendChild(v[w])}}}}}},AdskLocalizationWidget.prototype.identifyPlaceholders=function(e,t){for(var n=0;n<this.mToTranslate.length;n++){var r=this.mToTranslate[n],i=r.textNodes;if(i)for(var s=0;s<i.length;s++){var o={};o.segmentIndex=[],o.newTextNodes=[],o.textNodeIndex=[];for(var u=0;u<i[s].length;u++){var a=0,f=i[s][u];if(this.contains(this.mNoTranslateTextNodes,f))continue;var l=f.data,c=e(l);if(c){var h=t(l),p=f.parentNode,d="";if(u>0)for(var v=0;v<u;v++){var m=i[s][v];d+=m.data,this.contains(this.mPhFollowingTextNodes,m)&&(d+="{"+ ++a+"}")}var g=[];for(var v=0;v<h.length;v++){var y=document.createTextNode(h[v]);d+=h[v],p.insertBefore(y,f),g.push(y),v<h.length-1&&(this.mPhFollowingTextNodes.push(y),y=document.createTextNode(c[v]),p.insertBefore(y,f),d+="{"+ ++a+"}")}this.contains(this.mPhFollowingTextNodes,f)&&(d+="{"+ ++a+"}",this.mPhFollowingTextNodes.push(g[g.length-1]));if(u<i[s].length)for(var v=u+1;v<i[s].length;v++){var m=i[s][v];d+=m.data,this.contains(this.mPhFollowingTextNodes,m)&&(d+="{"+ ++a+"}")}o.segmentIndex.push(s),o.textNodeIndex.push(u),o.newTextNodes.push(g),p.removeChild(f),r.segments[s]=d,r.placeholders||(r.placeholders=new Object),r.placeholders["ph"+s]||(r.placeholders["ph"+s]=[]);for(var b=c.length-1;b>=0;b--)r.placeholders["ph"+s].splice(u,0,c[b])}}for(var w=0;w<o.segmentIndex.length;w++){r.textNodes[o.segmentIndex[w]].splice(o.textNodeIndex[w],1);for(var E=o.newTextNodes[w].length-1;E>=0;E--)r.textNodes[o.segmentIndex[w]].splice(o.textNodeIndex[w],0,o.newTextNodes[w][E])}}}},AdskLocalizationWidget.prototype.fixPlaceholders=function(){for(var e=0;e<this.mToTranslateSegmented.length;e++)if(this.mToTranslateSegmented[e].phValues&&this.mToTranslateSegmented[e].phValues.length>0){var t=this.mToTranslateSegmented[e].segment.match(/^(\s*\{[0-9]+\}\s*)+/gmi),n=0;if(t&&t.length==1)var n=t[0].match(/\{[0-9]+\}/gmi).length;for(var r=0;r<n;r++)this.mToTranslateSegmented[e].phValues.shift(),this.mToTranslateSegmented[e].textNodes.shift();this.mToTranslateSegmented[e].segment=this.mToTranslateSegmented[e].segment.replace(/^(\s*\{[0-9]+\}\s*)+/gmi,function(){return""});var i=this.mToTranslateSegmented[e].segment.match(/(\s*\{[0-9]+\}\s*)+$/gmi),s=0;if(i&&i.length==1)var s=i[0].match(/\{[0-9]+\}/gmi).length;for(var r=0;r<s;r++)this.mToTranslateSegmented[e].phValues.pop(),this.mToTranslateSegmented[e].textNodes.pop();this.mToTranslateSegmented[e].segment=this.mToTranslateSegmented[e].segment.replace(/(\s*\{[0-9]+\}\s*)+$/gmi,function(){return""});var o=0;this.mToTranslateSegmented[e].segment=this.mToTranslateSegmented[e].segment.replace(/\{[0-9]+\}/gmi,function(){return"{"+ ++o+"}"})}},AdskLocalizationWidget.prototype.logSegmentsToConsole=function(){for(var e=0;e<this.mToTranslateSegmented.length;e++)console.log(this.mToTranslateSegmented[e].segment),this.mToTranslateSegmented[e].phValues&&this.mToTranslateSegmented[e].phValues.length>0&&console.log(this.mToTranslateSegmented[e].phValues)},AdskLocalizationWidget.prototype.pushTextNodes=function(e,t,n){var r=t;for(var i=0;i<n.length;i++){var s=n[i];e[r].push(s),this.contains(this.mPhFollowingTextNodes,s)&&(e.push([]),r++)}return e},AdskLocalizationWidget.prototype.isContainsNode=function(e,t){if(e&&e===t)return!0;if(!e||!e.hasChildNodes()||!t)return!1;for(var n=0;n<e.childNodes.length;n++){var r=e.childNodes[n];if(r===t||this.isContainsNode(r,t))return!0}return!1},AdskLocalizationWidget.prototype.segmentOnMouseOver=function(){var e=this.style.backgroundColor,t=this.style.color;this.style.backgroundColor="yellow",this.style.color="black",e&&(this.originalBg=e),t&&(this.originalColor=t),this.logSegMouseOver=="true"&&console.log("Src: "+this.srcText+"\nPrev: "+this.prevText+"\nNext: "+this.nextText)},AdskLocalizationWidget.prototype.segmentOnMouseOut=function(){var e=this.originalBg;e?this.style.backgroundColor=e:mAdskLsJq(this).css("backgroundColor","");var t=this.originalColor;t?this.style.color=t:mAdskLsJq(this).css("color","")},AdskLocalizationWidget.prototype.getParents=function(e){var t=[e];for(;e;e=e.parentNode)t.unshift(e);return t},AdskLocalizationWidget.prototype.getCommonAncestor=function(e,t){if(e===t)return e.parentNode;var n=this.getParents(e),r=this.getParents(t);if(n[0]!=r[0])return undefined;for(var i=0;i<n.length;i++)if(n[i]!=r[i])return n[i-1]},AdskLocalizationWidget.prototype.translateFake=function(){for(var e=0;e<this.mToTranslateSegmented.length;e++){var t=this.mToTranslateSegmented[e];if(t.segment&&t.segment.trim().length>0){var n=t.segment,r=this.getFakeTranslation(n),i=this.getSplitByPlaceholders(r),s=this.getFlatArray(t.textNodes);if(i.length!=t.textNodes.length){console.log("Placeholders missmatch for source segment: '"+n+"', target: '"+r+"'"),console.log(t.textNodes);continue}for(var o=0;o<t.textNodes.length;o++){var u=t.textNodes[o];if(u&&u.length>0){var a="",f=0;o==0&&(f=this.getNbWhiteSpaceLeft(u[0].data));var l=0;o==t.textNodes.length-1&&(l=this.getNbWhiteSpaceRight(u[u.length-1].data)),a=this.addWhiteSpacesLeft(a,f),a+=i[o],a=this.addWhiteSpacesRight(a,l);for(var c=0;c<u.length;c++)c==0?u[c].data=a:u[c].data=""}}}}},AdskLocalizationWidget.prototype.addWhiteSpacesLeft=function(e,t){for(var n=0;n<t;n++)e=" "+e;return e},AdskLocalizationWidget.prototype.addWhiteSpacesRight=function(e,t){for(var n=0;n<t;n++)e+=" ";return e},AdskLocalizationWidget.prototype.getNbWhiteSpaceLeft=function(e){if(!e)return 0;var t=e.match(/^\s+/);return t?t[0].length:0},AdskLocalizationWidget.prototype.getNbWhiteSpaceRight=function(e){if(!e)return 0;var t=e.match(/\s+$/);return t?t[0].length:0},AdskLocalizationWidget.prototype.getFakeTranslation=function(e){if(!e)return e;var t=this.getPlaceholders(e),n="";if(t){n+="FAKE";for(var r=0;r<t.length;r++)n+=t[r],n+="FAKE"}else n="FAKE";return n},AdskLocalizationWidget.prototype.isNeedSpaceBetweenSegments=function(e,t){var n=!this.isTrailing(",",t)&&!t.match(/^[.!?].*$/)&&!this.isTrailing("®",t)&&!this.isTrailing("©",t)&&!this.isTrailing("™",t)&&!this.isTrailing(" ",t)&&(!e.match(/.*\d[\,.]{1}$/)||!t.match(/^\d.*$/));return n},AdskLocalizationWidget.prototype.isEndingOrTrailing=function(e,t,n){return t&&t.length>0&&t.charAt(t.length-1)==e||n&&n.length>0&&n.charAt(0)==e},AdskLocalizationWidget.prototype.isTrailing=function(e,t){return t&&t.length>0&&t.charAt(0)==e},AdskLocalizationWidget.prototype.isContainsBreakingTag=function(e){if(!e)return!1;for(var t=0;t<e.length;t++)if(this.mTagsDelimiter[e[t]])return!0;return!1},AdskLocalizationWidget.prototype.splitTextEn=function(e){var t=/\n|([^\r\n]+$)/gim,n=/(^[.!?]+)|(.+?((\S[.!?]+)+|$))/gim,r=e.match(t),i=undefined;if(r){i=[];for(var s=0;s<r.length;s++)if(r[s].length>0&&r[s]!="\n"){var o=r[s],u=o.match(n);if(u)for(var a=0;a<u.length;a++)u[a].length>0&&u[a]!="\n"&&i.push(u[a]);else i.push(o)}}else i=[e];return i},AdskLocalizationWidget.prototype.isMergeSegmentsEn=function(e,t){if(!e||!t)return!1;var n=e.trim(),r=t.trim();for(var i=0;i<this.mToMergeSpecialCases.length;i++){var s=undefined,o=undefined,u=undefined,a=undefined;this.mToMergeSpecialCases[i][2]?(s=n,o=r,u=this.mToMergeSpecialCases[i][0],a=this.mToMergeSpecialCases[i][1]):(s=n.toLowerCase(),o=r.toLowerCase(),u=this.mToMergeSpecialCases[i][0].toLowerCase(),a=this.mToMergeSpecialCases[i][1].toLowerCase());var f=s.lastIndexOf(u),l=o.indexOf(a);if(f>=0&&f==s.length-u.length&&l==0)return!0}return _adskLsEndsWithNonBreakingWord(n)?!0:e.match(/.*\d[\,.]{1}$/)&&t.match(/^\d.*$/)?!0:n.match(/^.*[.!?]$/)?!1:!e.match(/^.*\s$/)&&r.match(/^[.!?].*$/)?!0:e.lastIndexOf(" ")!=e.length-1&&t.indexOf(" ")!=0&&!this.isEndingOrTrailing(",",e,t)&&!this.isEndingOrTrailing('"',e,t)&&!this.isEndingOrTrailing("'",e,t)&&!this.isEndingOrTrailing("®",e,t)&&!this.isEndingOrTrailing("©",e,t)&&!this.isEndingOrTrailing("™",e,t)&&!this.isEndingOrTrailing(" ",e,t)?!1:!0},AdskLocalizationWidget.prototype.recurseDomChildren=function(e,t,n,r){if(e.tagName&&this.mTagsToSkip[e.tagName]||r&&_adskGetParentNodeWithClass(e,r))return;e.tagName&&e.tagName.length>0&&this.mToTranslate.length>0&&(this.mToTranslate[this.mToTranslate.length-1].endedByTag?this.mToTranslate[this.mToTranslate.length-1].endedByTag.push(e.tagName):this.mToTranslate[this.mToTranslate.length-1].endedByTag=[e.tagName]);if(e.childNodes){var i=e.childNodes,s=n||_adskLsHasClass(e,this.noTranslateClass);this.loopNodeChildren(i,t,s)}},AdskLocalizationWidget.prototype.pushToTranslate=function(e,t){var n={};n.text=e.data,n.texts=[e.data],n.textNodes=[e],t&&this.mNoTranslateTextNodes.push(e);var r=[],i=e;while(i=i.parentNode)r.unshift(i);n.nodesStack=r,this.mToTranslate.push(n)},AdskLocalizationWidget.prototype.getFlatArray=function(e){if(!e)return e;var t=[];for(var n=0;n<e.length;n++){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i];if(s instanceof Array)for(var o=0;o<s.length;o++)t.push(s[o]);else t.push(s)}}return t},AdskLocalizationWidget.prototype.getPlaceholderValue=function(e,t,n,r){var i="",s=e[e.length-1],o=t[0],u=undefined,a=undefined;while(s!==o)u&&u.tagName&&u.nextSibling===s&&(i+=this.getClosingTag(u),a=u),s.tagName&&(u&&u.parentNode===s?(i+=this.getClosingTag(s),a=s):i+=this.getOpeningTag(s)),(!u||u.parentNode!==s)&&s.childNodes&&s.childNodes.length>0?(u=s,s=s.childNodes[0]):s.nextSibling?(u=s,s=s.nextSibling):s.parentNode&&(u=s,s=s.parentNode);return u&&u.tagName&&u.nextSibling===s&&u!==a&&(i+=this.getClosingTag(u)),i},AdskLocalizationWidget.prototype.getOpeningTag=function(e){var t="",n=e.attributes,r;t+="<"+e.tagName.toLowerCase().trim();for(var i=0,s=n.length;i<s;i++)typeof n[i].nodeValue=="string"&&(r=n[i].nodeValue.replace('"','\\"'),r&&r.trim().length>0&&(t+=" ",t+=n[i].nodeName.trim()+'="'+r.trim()+'"'));return t+=">",t},AdskLocalizationWidget.prototype.getClosingTag=function(e){return"</"+e.tagName.toLowerCase()+">"},AdskLocalizationWidget.prototype.getPlaceholderValue3=function(e,t,n,r){var i="",s=e[e.length-1],o=t[0];while(s!==o)if(s.childNodes&&s.childNodes.length>0)s=s.childNodes[0],s.tagName&&(i+="<"+s.tagName+"> YYY");else if(s.nextSibling)s=s.nextSibling,s.tagName&&(i+="<"+s.tagName+"> XXX");else if(s.parentNode){s.tagName&&(i+="</"+s.tagName+">"),s=s.parentNode,s.tagName&&(i+="</"+s.tagName+">");while(!s.nextSibling)s=s.parentNode,s.tagName&&(i+="</"+s.tagName+">");s=s.nextSibling}return i},AdskLocalizationWidget.prototype.getPlaceholderValue2=function(e,t,n,r){var i=n.length>r.length?n.length:r.length,s=-1;for(var o=0;o<i;o++)if(o<n.length&&o<r.length){if(s==-1&&n[o]!==r[o]){s=o;break}}else if(s==-1){s=o;break}var u="";if(s>-1&&s<n.length)for(var o=n.length-1;o>=s;o--)u+="</"+n[o].tagName+">";if(s>-1&&s<r.length)for(var o=s;o<r.length;o++)u+="<"+r[o].tagName+">";return u},AdskLocalizationWidget.prototype.isSameNodesStack=function(e,t){if(e===t)return!0;if(!e)return!1;if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},AdskLocalizationWidget.prototype.isFollowingTextNodes=function(e,t){if(!e||!t||e.length==0||t.length==0)return!1;var n=e[e.length-1],r=t[0],i=n.nextSibling;return i===r},AdskLocalizationWidget.prototype.loopNodeChildren=function(e,t,n){var r;for(var i=0;i<e.length;i++)r=e[i],this.storeNode(r,n),r.childNodes&&this.recurseDomChildren(r,t+1,n)},AdskLocalizationWidget.prototype.storeNode=function(e,t){e.nodeType!==1&&e.nodeType===3&&e.data&&this.pushToTranslate(e,t)},AdskLocalizationWidget.prototype.translateApi=function(e,t){var n=this;if(!mAdskLsJq){window.setTimeout(function(){n.translateApi(e,t)},50);return}if(this.mTranslatedData[e]){for(var r=0;r<this.mToTranslateSegmented.length;r++){var i=this.mToTranslateSegmented[r],s=!1;if(i.segment&&i.segment.trim().length>0)for(var o=0;o<i.textNodes.length;o++){var u=i.textNodes[o];for(var a=0;a<u.length;a++){for(var f=0;f<this.mTranslatedData[e].length;f++)if(this.mTranslatedData[e][f][0]===u[a]){this.mTranslatedData[e][f][1]?u[a].data=this.mTranslatedData[e][f][1]:u[a].data="";break}var l=this.mTranslatedData[e][f][2];if(!s&&(l=="MT"&&this.mtClass||l=="EXACT"&&this.exactClass||l=="ICE"&&this.iceClass)){var c=undefined;l=="MT"?c=this.mtClass:l=="EXACT"?c=this.exactClass:l=="ICE"&&(c=this.iceClass);var h=u[a];while(h=h.parentNode)if(_adskLsHasClass(h,mAdskLsDecoClassName)){this.mtClass&&(h.className=h.className.replace(new RegExp("\\b"+this.mtClass+"\\b"),"")),this.exactClass&&(h.className=h.className.replace(new RegExp("\\b"+this.exactClass+"\\b"),"")),this.iceClass&&(h.className=h.className.replace(new RegExp("\\b"+this.iceClass+"\\b"),"")),c&&(h.className=h.className+" "+c),s=!0;break}}}}}_adskTranslateApiInternalCallback(t)}else{var p=new Array,d=new Array,v=new Array,m=new Array,g=0;for(var r=0;r<this.mToTranslateSegmented.length;r++){var i=this.mToTranslateSegmented[r];if(i.segment&&i.segment.trim().length>0){var y=i.segment,b=mAdskLsSegNotAvailable,w=mAdskLsSegNotAvailable;r>0&&this.mToTranslateSegmented[r-1].segment&&this.mToTranslateSegmented[r-1].segment.trim().length>0&&(b=this.mToTranslateSegmented[r-1].segment),r<this.mToTranslateSegmented.length-1&&this.mToTranslateSegmented[r+1].segment&&this.mToTranslateSegmented[r+1].segment.trim().length>0&&(w=this.mToTranslateSegmented[r+1].segment);if(e=="fake")atLeastOneCall=!0,this.translateCallFake(y,b,w,i.textNodes,e,this.mtClass,this.exactClass,this.iceClass,t);else if(this.corsEnabled&&_adskLsIsSupportCors()){g+=y.length,p.push(y),d.push(b),v.push(w),m.push(i.textNodes);if(p.length>=this.mNbSegmentsPerRequest||r==this.mToTranslateSegmented.length-1||g>this.mMaxSegmentsSizePerRequest)this.translateCallCors(p,d,v,m,e,this.mtClass,this.exactClass,this.iceClass,t),p=new Array,d=new Array,v=new Array,m=new Array,g=0}else this.translateCall(y,b,w,i.textNodes,e,this.mtClass,this.exactClass,this.iceClass,t)}}_adskTranslateApiInternalCallback(t)}},AdskLocalizationWidget.prototype.translateCallFake=function(e,t,n,r,i,s,o,u){this.mTranslatedData[i]||(this.mTranslatedData[i]=[]);for(var a=0;a<r.length;a++){var f=r[a];if(f&&f.length>0)for(var l=0;l<f.length;l++)this.mTranslatedData[i].push([f[l],undefined,undefined])}var c="FAKE",h="MT";for(var p=0;p<r.length-1;p++)c+="{"+(p+1)+"}";var d=this.getSplitByPlaceholders(c);if(d.length!=r.length)return;var v=!1;for(var a=0;a<r.length;a++){var f=r[a];if(f&&f.length>0){var m="",g=0;a==0&&(g=this.getNbWhiteSpaceLeft(f[0].data));var y=0;a==r.length-1&&(y=this.getNbWhiteSpaceRight(f[f.length-1].data)),m=this.addWhiteSpacesLeft(m,g),m+=d[a],m=this.addWhiteSpacesRight(m,y);var b=!1;for(var l=0;l<f.length;l++){if(!v&&(h=="MT"&&s||h=="EXACT"&&
o||h=="ICE"&&u)){var w=undefined;h=="MT"?w=s:h=="EXACT"?w=o:h=="ICE"&&(w=u);var E=f[l];while(E=E.parentNode)if(_adskLsHasClass(E,mAdskLsDecoClassName)){s&&(E.className=E.className.replace(new RegExp("\\b"+s+"\\b"),"")),o&&(E.className=E.className.replace(new RegExp("\\b"+o+"\\b"),"")),u&&(E.className=E.className.replace(new RegExp("\\b"+u+"\\b"),"")),w&&(E.className=E.className+" "+w),v=!0;break}}!b&&f[l].data.trim().length>0?(f[l].data=m,b=!0):f[l].data="";for(var S=0;S<this.mTranslatedData[i].length;S++)this.mTranslatedData[i][S][0]==f[l]&&(this.mTranslatedData[i][S][1]=f[l].data,this.mTranslatedData[i][S][2]=h)}}}},AdskLocalizationWidget.prototype.translateCallCors=function(e,t,n,r,i,s,o,u,a){var f=this;if(!mAdskLsJq){window.setTimeout(function(){f.translateCallCors(e,t,n,r,i,s,o,u,a)},50);return}var f=this,l=("https:"==document.location.protocol?"https://":"http://")+mAdskLsServerName+"/api/translate/v1/widget",c={};c.contentOwner="doc",c.trgLng=i,c.mtEnabled="true",c.repoEnabled="true",this.mSrcLng&&(c.srcLng=this.mSrcLng),this.mProduct&&(c.product=this.mProduct),this.mClientId&&(c.clientId=this.mClientId),this.mHostedUrl&&(c.hostedUrl=this.mHostedUrl),c.src=[];for(var h=0;h<e.length;h++)c.src[h]={},c.src[h].srcText=e[h],this.mResource&&(c.src[h].resource=this.mResource),t&&t[h]&&(c.src[h].prevText=t[h]),n&&n[h]&&(c.src[h].nextText=n[h]);this.mTranslatedData[i]||(this.mTranslatedData[i]=[]);for(var p=0;p<r.length;p++){var d=r[p];for(var h=0;h<d.length;h++){var v=d[h];if(v&&v.length>0)for(var m=0;m<v.length;m++)this.mTranslatedData[i].push([v[m],undefined,undefined])}}mAdskNbRequestsProcessing++,mAdskLsJq.ajax({type:"POST",url:l,data:JSON.stringify(c),contentType:"application/json",dataType:"text",failure:function(e){console.log(e)},success:function(e){handleTranlatedResponse(JSON.parse(e),r,f,s,o,u,i,a)},error:function(e,t,n){console.log("error:"+JSON.stringify(e)+" - "+t+" - "+n),mAdskNbRequestsProcessing--,mAdskNbRequestsProcessing<=0&&(mAdskNbRequestsProcessing=0,_adskTranslateApiInternalCallback(a))}})},AdskLocalizationWidget.prototype.translateCall=function(e,t,n,r,i,s,o,u,a){var f=this;if(!mAdskLsJq){window.setTimeout(function(){f.translateCall(e,t,n,r,i,s,o,u,a)},50);return}var f=this;if(!e||e.trim().length==0||!r||r.length==0)return;var l=e;l&&l.length>0&&(l=encodeURIComponent(l));var c=("https:"==document.location.protocol?"https://":"http://")+mAdskLsServerName+"/api/translate/v1/widget?contentOwner=doc&trgLng="+encodeURIComponent(i)+"&mtEnabled=true&repoEnabled=true&src="+l;t&&(c+="&prevText="+encodeURIComponent(t)),n&&(c+="&nextText="+encodeURIComponent(n)),this.mProduct&&(c+="&product="+encodeURIComponent(this.mProduct)),this.mResource&&(c+="&resource="+encodeURIComponent(this.mResource)),this.mSrcLng&&(c+="&srcLng="+encodeURIComponent(this.mSrcLng)),this.mClientId&&(c+="&clientId="+encodeURIComponent(this.mClientId)),this.mHostedUrl&&(c+="&hostedUrl="+encodeURIComponent(this.mHostedUrl)),this.mTranslatedData[i]||(this.mTranslatedData[i]=[]);for(var h=0;h<r.length;h++){var p=r[h];if(p&&p.length>0)for(var d=0;d<p.length;d++)this.mTranslatedData[i].push([p[d],undefined,undefined])}mAdskNbRequestsProcessing++,mAdskLsJq.ajax({type:"GET",url:c,contentType:"application/json",dataType:"jsonp",jsonp:"jsonp",success:function(e){var t=new Array;t.push(r),handleTranlatedResponse(e,t,f,s,o,u,i,a)},error:function(e,t,n){mAdskNbRequestsProcessing--,mAdskNbRequestsProcessing<=0&&(mAdskNbRequestsProcessing=0,_adskTranslateApiInternalCallback(a))}})};var _adskLsSplitCrossBrowser;_adskLsSplitCrossBrowser=_adskLsSplitCrossBrowser||function(e){var t=String.prototype.split,n=/()??/.exec("")[1]===e,r;return r=function(r,i,s){if(Object.prototype.toString.call(i)!=="[object RegExp]")return t.call(r,i,s);var o=[],u=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.extended?"x":"")+(i.sticky?"y":""),a=0,i=new RegExp(i.source,u+"g"),f,l,c,h;r+="",n||(f=new RegExp("^"+i.source+"$(?!\\s)",u)),s=s===e?-1>>>0:s>>>0;while(l=i.exec(r)){c=l.index+l[0].length;if(c>a){o.push(r.slice(a,l.index)),!n&&l.length>1&&l[0].replace(f,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(l[t]=e)}),l.length>1&&l.index<r.length&&Array.prototype.push.apply(o,l.slice(1)),h=l[0].length,a=c;if(o.length>=s)break}i.lastIndex===l.index&&i.lastIndex++}return a===r.length?(h||!i.test(""))&&o.push(""):o.push(r.slice(a)),o.length>s?o.slice(0,s):o},String.prototype.split=function(e,t){return r(this,e,t)},r}(),window.adskLsAsyncInit&&!window.adskLsAsyncInit.hasRun&&(window.adskLsAsyncInit.hasRun=!0,adskLsAsyncInit());