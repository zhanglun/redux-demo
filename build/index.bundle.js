/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _emotion = __webpack_require__(3);

	var _emotion2 = _interopRequireDefault(_emotion);

	__webpack_require__(1);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	var _util = __webpack_require__(14);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var btn = document.querySelector('.emojiBtn');
	var emojiContainer = btn.parentNode;
	var uuid = Math.random().toString(36).substring(2);
	var emotion = null;

	// 获取当前光标所在的位置
	var _getPointPosition = function _getPointPosition(elem) {
	    var caretOffset = 0;
	    var doc = elem.ownerDocument || elem.document;
	    var win = doc.defaultView || doc.parentWindow;
	    var sel;
	    if (typeof win.getSelection != "undefined") {
	        sel = win.getSelection();
	        if (sel.rangeCount > 0) {
	            var range = win.getSelection().getRangeAt(0);
	            var preCaretRange = range.cloneRange();
	            preCaretRange.selectNodeContents(elem);
	            preCaretRange.setEnd(range.endContainer, range.endOffset);
	            caretOffset = preCaretRange.toString().length;
	        }
	    } else if ((sel = doc.selection) && sel.type != "Control") {
	        var textRange = sel.createRange();
	        var preCaretTextRange = doc.body.createTextRange();
	        preCaretTextRange.moveToElementText(elem);
	        preCaretTextRange.setEndPoint("EndToEnd", textRange);
	        caretOffset = preCaretTextRange.text.length;
	    }
	    return caretOffset;
	};

	var _setEditableCaretPostion = function _setEditableCaretPostion(elem, pos) {
	    var range = document.createRange();
	    var sel = window.getSelection();
	    range.setStart(el.childNodes[2], pos);
	    range.collapse(true);
	    sel.removeAllRanges();
	    sel.addRange(range);
	};

	$(btn).emotion({
	    input: $('.emoji-editor')
	});
	$('.emoji-editor').on('keyup', function (e) {
	    // 获取选定对象
	    var selection = getSelection();
	    // 设置最后光标对象
	    window.lastEditRange = selection.getRangeAt(0);
	}).on('click', function (e) {
	    // 获取选定对象
	    var selection = getSelection();
	    // 设置最后光标对象
	    window.lastEditRange = selection.getRangeAt(0);
	});

	$('.emoji-editor').on('paste', function (e) {

	    // 考虑到以后会存在文件之类的出img之外的标签，
	    // 所以只能在粘贴的时候先去掉标签然后插入到光标所在位置

	    // 将复制的图文混合中包含的图片直接去掉
	    var clipboardData = e.originalEvent.clipboardData;
	    var data = clipboardData ? clipboardData.getData('text/plain') : window.clipboardData.getData('Text');
	    if (data) {
	        // 插入文本
	        var eidtor = $('.emoji-editor').get(0);
	        util.insertElemToEditor(editor, text);
	    }
	    e.preventDefault();
	    return false;
	});

	$(function () {

	    $.fn.atwho.debug = true;
	    var emojis = ["smile", "iphone", "girl", "smiley", "heart", "kiss", "copyright", "coffee", "a", "ab", "airplane", "alien", "ambulance", "angel", "anger", "angry", "arrow_forward", "arrow_left", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right", "art", "astonished", "atm", "b", "baby", "baby_chick", "baby_symbol", "balloon", "bamboo", "bank", "barber", "baseball", "basketball", "bath", "bear", "beer", "beers", "beginner", "bell", "bento", "bike", "bikini", "bird", "birthday", "black_square", "blue_car", "blue_heart", "blush", "boar", "boat", "bomb", "book", "boot", "bouquet", "bow", "bowtie", "boy", "bread", "briefcase", "broken_heart", "bug", "bulb", "person_with_blond_hair", "phone", "pig", "pill", "pisces", "plus1", "point_down", "point_left", "point_right", "point_up", "point_up_2", "police_car", "poop", "post_office", "postbox", "pray", "princess", "punch", "purple_heart", "question", "rabbit", "racehorse", "radio", "up", "us", "v", "vhs", "vibration_mode", "virgo", "vs", "walking", "warning", "watermelon", "wave", "wc", "wedding", "whale", "wheelchair", "white_square", "wind_chime", "wink", "wink2", "wolf", "woman", "womans_hat", "womens", "x", "yellow_heart", "zap", "zzz", "+1", "-1"];
	    var jeremy = decodeURI("J%C3%A9r%C3%A9my"); // Jérémy
	    var names = ["Jacob", "Isabella", "Ethan", "Emma", "Michael", "Olivia", "Alexander", "Sophia", "William", "Ava", "Joshua", "Emily", "Daniel", "Madison", "Jayden", "Abigail", "Noah", "Chloe", "你好", "你你你", jeremy, "가"];

	    var names = $.map(names, function (value, i) {
	        return { 'id': i, 'name': value, 'email': value + "@email.com" };
	    });
	    var emojis = $.map(emojis, function (value, i) {
	        return { key: value, name: value };
	    });

	    var at_config = {
	        at: "@",
	        data: names,
	        headerTpl: '<div class="atwho-header">Member List<small>↑&nbsp;↓&nbsp;</small></div>',
	        insertTpl: '<span>${atwho-at}${name}</span>',
	        displayTpl: "<li>${name} <small>${email}</small></li>",
	        limit: 200,
	        startWithSpace: false,
	        callbacks: {
	            remoteFilter: function remoteFilter() {
	                console.log(arguments);
	            },
	            beforeInsert: function beforeInsert(value, $item, e) {
	                console.log($item);
	                return value;
	            }
	        }
	    };
	    var emoji_config = {
	        at: ":",
	        data: emojis,
	        displayTpl: "<li>${name} <img src='https://assets-cdn.github.com/images/icons/emoji/${key}.png'  height='20' width='20' /></li>",
	        insertTpl: ':${key}:',
	        delay: 400
	    };
	    emoji_config.insertTpl = "<img src='https://assets-cdn.github.com/images/icons/emoji/${name}.png'  height='20' width='20' />";
	    $('.emoji-editor').on('keyup', function (e) {
	        if (e.keyCode == 13 && !e.ctrlKey) {
	            console.log('---->-----fuck 发送消息');
	            e.originalEvent.preventDefault();
	            return false;
	        }
	        if (e.keyCode == 13 && e.ctrlKey) {
	            console.log('----> 换行');
	            util.insertElemToEditor($('.emoji-editor').get(0), $('<br />'));
	            // TODO: 增加 换行
	        }
	    });

	    $('.emoji-editor').atwho(at_config).atwho(emoji_config);
	    $('.emoji-editor').on('inserted.atwho', function (e) {
	        $(this).find('.atwho-inserted span').first().unwrap();
	        window.test = true;
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
	r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
	if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"=="function"&&__webpack_require__(2)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _twemoji = __webpack_require__(4);

	var _twemoji2 = _interopRequireDefault(_twemoji);

	var _data = __webpack_require__(5);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(6);


	var defaults = {
	  width: '200',
	  height: '300',
	  position: 'right',
	  fadeTime: 100,
	  input: '', // 要绑定的表单元素的选择器
	  imgPath: "https://dn-mdpub.qbox.me/emotion/", // 表情图片的路径
	  defaultTab: 0, // 默认显示哪一列表情
	  mdBear: true, // 是否显示明道表情
	  offset: 20, // 尖角的位置偏移
	  history: true, // 是否显示历史表情
	  historySize: 40,
	  historyKey: "mdEmotion",
	  relatedSpace: 0, // 与相对元素的位置
	  placement: "top", // 表情面板显示的位置，有top、right、bottom、left
	  onSelect: function onSelect() {// 当选中表情时触发
	  },
	  onMDBearSelect: function onMDBearSelect() {}
	};

	var emotionPanelHtml = __webpack_require__(8);

	// 获取当前光标所在的位置
	var _getPointPosition = function _getPointPosition(elem) {
	  var caretOffset = 0;
	  var doc = elem.ownerDocument || elem.document;
	  var win = doc.defaultView || doc.parentWindow;
	  var sel;
	  if (typeof win.getSelection != "undefined") {
	    sel = win.getSelection();
	    if (sel.rangeCount > 0) {
	      var range = win.getSelection().getRangeAt(0);
	      var preCaretRange = range.cloneRange();
	      preCaretRange.selectNodeContents(elem);
	      preCaretRange.setEnd(range.endContainer, range.endOffset);
	      caretOffset = preCaretRange.toString().length;
	    }
	  } else if ((sel = doc.selection) && sel.type != "Control") {
	    var textRange = sel.createRange();
	    var preCaretTextRange = doc.body.createTextRange();
	    preCaretTextRange.moveToElementText(elem);
	    preCaretTextRange.setEndPoint("EndToEnd", textRange);
	    caretOffset = preCaretTextRange.text.length;
	  }
	  return caretOffset;
	};

	var _setEditableCaretPostion = function _setEditableCaretPostion(elem, pos) {
	  var range = document.createRange();
	  var sel = window.getSelection();
	  range.setStart(el.childNodes[2], pos);
	  range.collapse(true);
	  sel.removeAllRanges();
	  sel.addRange(range);
	};

	function Emotion(el, conf) {
	  this.settings = $.extend({}, defaults, conf);
	  this.$el = {};
	  // 发的按钮
	  this.$el.btn = $(el);
	  // 面板的容器
	  this.$el.container = $(el).parent();
	  // 接收表情的容器
	  this.$target = $(this.settings.input);

	  this.init();
	}

	/**
	 * 初始化，绑定按钮的点击事件
	 * @return {[type]} [description]
	 */
	Emotion.prototype.init = function () {
	  console.log('emoji keybroad init!');
	  this.createPicker();
	  this.isOpen = false;
	  this.$el.btn.on("click", $.proxy(this.openAndClose, this));
	};

	/**
	 * 初始化，创建基本的DOM结构，然后加载默认的表情tab，绑定事件
	 */
	Emotion.prototype.createPicker = function () {
	  var _this2 = this;

	  var _tablist = '';
	  var _contentlist = '';
	  var _faceItems = '';

	  this.$el.emotionPanel = $('<div></div>');
	  this.$el.emotionPanel.attr('id', 'emotion_' + this.settings.uuid);
	  this.$el.emotionPanel.addClass('emotion-panel');
	  this.$el.emotionPanel.html(emotionPanelHtml);
	  this.$el.emotionTablist = this.$el.emotionPanel.find('.emotion-tab');
	  this.$el.emotionContentlist = this.$el.emotionPanel.find('.emotion-content');

	  _data2.default.forEach(function (item, i) {
	    var active = i === _this2.settings.defaultTab ? 'active' : '';

	    _tablist += '<span class="emotion-tabitem ' + active + '" data-tab-index="' + i + '"">' + item.name.split('|')[1] + '</span>';
	    _contentlist += '<div class="emotion-contentitem ' + active + '">' + _faceItems + '</div>';
	  });

	  this.$el.emotionTablist.html(_tablist);
	  this.$el.emotionContentlist.html(_contentlist);

	  this.$el.container.append(this.$el.emotionPanel);

	  this.load(this.settings.defaultTab);

	  this.bindEvents();
	};

	/**
	 * 表情键盘上的事件绑定
	 */
	Emotion.prototype.bindEvents = function () {
	  var _this = this;
	  var $tabList = this.$el.emotionTablist;
	  var $contentList = this.$el.emotionContentlist;

	  // 切换tab
	  $tabList.on('click', '.emotion-tabitem', function (event) {
	    var $this = $(this);
	    var targetIndex = $this.attr('data-tab-index');
	    if (!$this.hasClass('active')) {
	      _this.load(targetIndex);
	      $this.siblings('.active').removeClass('active');
	      $this.addClass('active');

	      $contentList.find('.emotion-contentitem').removeClass('active').eq(targetIndex).addClass('active');
	    }
	  });

	  // 选中表情
	  $contentList.on('click', '.emotion-item', function (e) {

	    var val = $(this).find('img').attr('alt');
	    var target = _this.$target.get(0);
	    target.focus();
	    // 调用 insertImg 方法插入表情
	    console.log(_getPointPosition(target));
	    var currentPos = _getPointPosition(target);
	    var oldVal = target.innerHTML;
	    _insertimg(target, _twemoji2.default.parse(val));
	    // target.innerHTML = oldVal.slice(0, currentPos) + twemoji.parse(val) + oldVal.slice(currentPos);
	    console.log('after: %s', _getPointPosition(target));
	    document.title = currentPos + _twemoji2.default.parse(val).length;
	    // TODO: set eidtable caret Position;
	    // if (target.setSelectionRange) {
	    //   target.setSelectionRange(currentPos + val.length, currentPos + val.length);
	    // } else {

	    // }
	  });
	  _this.$target.get(0).focus();
	  return false;
	};

	/**
	 * 加载单个tab的表情
	 * @param  {Numer} index 当前tab的索引
	 */
	Emotion.prototype.load = function (index) {
	  // let _contentlist = '';
	  var _faceItems = '';
	  var active = index === this.settings.defaultTab ? 'active' : '';
	  var $content = this.$el.emotionContentlist.find('.emotion-contentitem').eq(index);

	  if ($content.data('load')) {
	    console.log('loade');
	    return;
	  }

	  _data2.default[index].content.forEach(function (face, i) {
	    _faceItems += '<span class="emotion-item">' + _twemoji2.default.parse(face) + '</span>';
	  });
	  $content.html(_faceItems).data('load', true);
	};

	/**
	 * 打开或者隐藏
	 */
	Emotion.prototype.openAndClose = function () {
	  var $panel = this.$el.emotionPanel;
	  if ($panel.hasClass('open')) {
	    $panel.removeClass('open').addClass('close');
	  } else {
	    $panel.removeClass('close').addClass('open');
	  }
	};

	// 绑定到jquery上

	$.fn.emotion = function (options) {
	  options = options || {};
	  return this.each(function () {
	    new Emotion(this, $.extend({}, {
	      input: "#" + $(this).data("target")
	    }, options));
	  });
	};

	exports.default = Emotion;


	function _insertimg(container, elemstr) {
	  var selection = window.getSelection ? window.getSelection() : document.selection;
	  var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
	  if (window.lastEditRange) {
	    // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
	    selection.removeAllRanges();
	    selection.addRange(lastEditRange);
	  }
	  if (!window.getSelection) {
	    container.focus();
	    selection.getRangeAt(0);
	    range.pasteHTML(elemstr);
	    range.collapse(false);
	    range.select();
	  } else {
	    container.focus();
	    range.collapse(false);
	    var hasR = range.createContextualFragment(elemstr);
	    var hasR_lastChild = hasR.lastChild;
	    while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() == "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() == "br") {
	      var e = hasR_lastChild;
	      hasR_lastChild = hasR_lastChild.previousSibling;
	      hasR.removeChild(e);
	    }
	    // 插入的时候做差异处理
	    // if (selection.anchorNode.nodeName != '#text') {
	    //   console.log('当前范围是anchorNode:', selection.anchorNode);
	    //   var imgElem = $(elemstr);
	    //   // if (container.childNodes.length > 0) {
	    //   //   for (var i = 0; i < container.childNodes.length; i++) {
	    //   //     if (i == selection.anchorOffset) {
	    //   //       container.insertBefore(imgElem.get(0), container.childNodes[i + 1])
	    //   //     }
	    //   //   }
	    //   // } else {
	    //   //   container.appendChild(imgElem.get(0));
	    //   // }

	    //   // // 创建新的光标对象
	    //   // var range = document.createRange()
	    //   // // 光标对象的范围界定为新建的表情节点
	    //   // range.selectNodeContents(imgElem.get(0))
	    //   // // 光标位置定位在表情节点的最大长度
	    //   // // range.setStart(imgElem.get(0), 0);
	    //   // // 使光标开始和光标结束重叠
	    //   // range.collapse(false)

	    //   // // range.selectNodeContents(imgElem.get(0))
	    //   // // 清除选定对象的所有光标对象
	    //   // selection.removeAllRanges()
	    //   // // 插入新的光标对象
	    //   // // range.deleteContents();
	    //   // // range.selectNodeContents(imgElem.get(0));
	    //   // selection.addRange(range);

	    //   range = selection.getRangeAt(0);
	    //   range.insertNode(hasR);
	    //   if (hasR_lastChild) {
	    //     range.setEndAfter(hasR_lastChild);
	    //     range.setStartAfter(hasR_lastChild);
	    //   }
	    //   // 清除选定对象的所有光标对象
	    //   selection.removeAllRanges()
	    //   // 插入新的光标对象
	    //   selection.addRange(range)

	    // } else {
	    //   console.log('当前范围是anchorNode:', selection.anchorNode);
	    //   range = selection.getRangeAt(0);
	    //   range.insertNode(hasR);
	    //   if (hasR_lastChild) {
	    //     range.setEndAfter(hasR_lastChild);
	    //     range.setStartAfter(hasR_lastChild);
	    //   }
	    //   // 清除选定对象的所有光标对象
	    //   selection.removeAllRanges()
	    //   // 插入新的光标对象
	    //   selection.addRange(range)
	    // }
	    range = selection.getRangeAt(0);
	    range.insertNode(hasR);
	    if (hasR_lastChild) {
	      range.setEndAfter(hasR_lastChild);
	      range.setStartAfter(hasR_lastChild);
	    }
	    // 清除选定对象的所有光标对象
	    selection.removeAllRanges();
	    // 插入新的光标对象
	    selection.addRange(range);
	    window.lastEditRange = selection.getRangeAt(0);
	  }
	  container.focus();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var location = global.location || {};
	/*jslint indent: 2, browser: true, bitwise: true, plusplus: true */
	var twemoji = (function (
	  /*! Copyright Twitter Inc. and other contributors. Licensed under MIT *//*
	    https://github.com/twitter/twemoji/blob/gh-pages/LICENSE
	  */

	  // WARNING:   this file is generated automatically via
	  //            `node twemoji-generator.js`
	  //            please update its `createTwemoji` function
	  //            at the bottom of the same file instead.

	) {
	  'use strict';

	  /*jshint maxparams:4 */

	  var
	    // the exported module object
	    twemoji = {


	    /////////////////////////
	    //      properties     //
	    /////////////////////////

	      // default assets url, by default will be Twitter Inc. CDN
	      base: 'https://twemoji.maxcdn.com/2/',

	      // default assets file extensions, by default '.png'
	      ext: '.png',

	      // default assets/folder size, by default "72x72"
	      // available via Twitter CDN: 72
	      size: '72x72',

	      // default class name, by default 'emoji'
	      className: 'emoji',

	      // basic utilities / helpers to convert code points
	      // to JavaScript surrogates and vice versa
	      convert: {

	        /**
	         * Given an HEX codepoint, returns UTF16 surrogate pairs.
	         *
	         * @param   string  generic codepoint, i.e. '1F4A9'
	         * @return  string  codepoint transformed into utf16 surrogates pair,
	         *          i.e. \uD83D\uDCA9
	         *
	         * @example
	         *  twemoji.convert.fromCodePoint('1f1e8');
	         *  // "\ud83c\udde8"
	         *
	         *  '1f1e8-1f1f3'.split('-').map(twemoji.convert.fromCodePoint).join('')
	         *  // "\ud83c\udde8\ud83c\uddf3"
	         */
	        fromCodePoint: fromCodePoint,

	        /**
	         * Given UTF16 surrogate pairs, returns the equivalent HEX codepoint.
	         *
	         * @param   string  generic utf16 surrogates pair, i.e. \uD83D\uDCA9
	         * @param   string  optional separator for double code points, default='-'
	         * @return  string  utf16 transformed into codepoint, i.e. '1F4A9'
	         *
	         * @example
	         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3');
	         *  // "1f1e8-1f1f3"
	         *
	         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3', '~');
	         *  // "1f1e8~1f1f3"
	         */
	        toCodePoint: toCodePoint
	      },


	    /////////////////////////
	    //       methods       //
	    /////////////////////////

	      /**
	       * User first: used to remove missing images
	       * preserving the original text intent when
	       * a fallback for network problems is desired.
	       * Automatically added to Image nodes via DOM
	       * It could be recycled for string operations via:
	       *  $('img.emoji').on('error', twemoji.onerror)
	       */
	      onerror: function onerror() {
	        if (this.parentNode) {
	          this.parentNode.replaceChild(createText(this.alt), this);
	        }
	      },

	      /**
	       * Main method/logic to generate either <img> tags or HTMLImage nodes.
	       *  "emojify" a generic text or DOM Element.
	       *
	       * @overloads
	       *
	       * String replacement for `innerHTML` or server side operations
	       *  twemoji.parse(string);
	       *  twemoji.parse(string, Function);
	       *  twemoji.parse(string, Object);
	       *
	       * HTMLElement tree parsing for safer operations over existing DOM
	       *  twemoji.parse(HTMLElement);
	       *  twemoji.parse(HTMLElement, Function);
	       *  twemoji.parse(HTMLElement, Object);
	       *
	       * @param   string|HTMLElement  the source to parse and enrich with emoji.
	       *
	       *          string              replace emoji matches with <img> tags.
	       *                              Mainly used to inject emoji via `innerHTML`
	       *                              It does **not** parse the string or validate it,
	       *                              it simply replaces found emoji with a tag.
	       *                              NOTE: be sure this won't affect security.
	       *
	       *          HTMLElement         walk through the DOM tree and find emoji
	       *                              that are inside **text node only** (nodeType === 3)
	       *                              Mainly used to put emoji in already generated DOM
	       *                              without compromising surrounding nodes and
	       *                              **avoiding** the usage of `innerHTML`.
	       *                              NOTE: Using DOM elements instead of strings should
	       *                              improve security without compromising too much
	       *                              performance compared with a less safe `innerHTML`.
	       *
	       * @param   Function|Object  [optional]
	       *                              either the callback that will be invoked or an object
	       *                              with all properties to use per each found emoji.
	       *
	       *          Function            if specified, this will be invoked per each emoji
	       *                              that has been found through the RegExp except
	       *                              those follwed by the invariant \uFE0E ("as text").
	       *                              Once invoked, parameters will be:
	       *
	       *                                iconId:string     the lower case HEX code point
	       *                                                  i.e. "1f4a9"
	       *
	       *                                options:Object    all info for this parsing operation
	       *
	       *                                variant:char      the optional \uFE0F ("as image")
	       *                                                  variant, in case this info
	       *                                                  is anyhow meaningful.
	       *                                                  By default this is ignored.
	       *
	       *                              If such callback will return a falsy value instead
	       *                              of a valid `src` to use for the image, nothing will
	       *                              actually change for that specific emoji.
	       *
	       *
	       *          Object              if specified, an object containing the following properties
	       *
	       *            callback   Function  the callback to invoke per each found emoji.
	       *            base       string    the base url, by default twemoji.base
	       *            ext        string    the image extension, by default twemoji.ext
	       *            size       string    the assets size, by default twemoji.size
	       *
	       * @example
	       *
	       *  twemoji.parse("I \u2764\uFE0F emoji!");
	       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"> emoji!
	       *
	       *
	       *  twemoji.parse("I \u2764\uFE0F emoji!", function(iconId, options) {
	       *    return '/assets/' + iconId + '.gif';
	       *  });
	       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"> emoji!
	       *
	       *
	       * twemoji.parse("I \u2764\uFE0F emoji!", {
	       *   size: 72,
	       *   callback: function(iconId, options) {
	       *     return '/assets/' + options.size + '/' + iconId + options.ext;
	       *   }
	       * });
	       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/72x72/2764.png"> emoji!
	       *
	       */
	      parse: parse,

	      /**
	       * Given a string, invokes the callback argument
	       *  per each emoji found in such string.
	       * This is the most raw version used by
	       *  the .parse(string) method itself.
	       *
	       * @param   string    generic string to parse
	       * @param   Function  a generic callback that will be
	       *                    invoked to replace the content.
	       *                    This calback wil receive standard
	       *                    String.prototype.replace(str, callback)
	       *                    arguments such:
	       *  callback(
	       *    rawText,  // the emoji match
	       *  );
	       *
	       *                    and others commonly received via replace.
	       */
	      replace: replace,

	      /**
	       * Simplify string tests against emoji.
	       *
	       * @param   string  some text that might contain emoji
	       * @return  boolean true if any emoji was found, false otherwise.
	       *
	       * @example
	       *
	       *  if (twemoji.test(someContent)) {
	       *    console.log("emoji All The Things!");
	       *  }
	       */
	      test: test
	    },

	    // used to escape HTML special chars in attributes
	    escaper = {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      "'": '&#39;',
	      '"': '&quot;'
	    },

	    // RegExp based on emoji's official Unicode standards
	    // http://www.unicode.org/Public/UNIDATA/EmojiSources.txt
	    re = /\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc41\u200d\ud83d\udde8|(?:[\u0023\u002a\u0030-\u0039])\ufe0f?\u20e3|(?:(?:[\u261d\u270c])(?:\ufe0f|(?!\ufe0e))|\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca\udfcb]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd75\udd90\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0]|\ud83e\udd18|[\u26f9\u270a\u270b\u270d])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf21\udf24-\udf84\udf86-\udf93\udf96\udf97\udf99-\udf9b\udf9e-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcc-\udff0\udff3-\udff5\udff7-\udfff]|\ud83d[\udc00-\udc41\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfd\udcff-\udd3d\udd49-\udd4e\udd50-\udd67\udd6f\udd70\udd73\udd74\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\udecb-\uded0\udee0-\udee5\udee9\udeeb\udeec\udef0\udef3]|\ud83e[\udd10-\udd17\udd80-\udd84\uddc0]|[\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\u2602-\u2604\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638\u2692\u2694\u2696\u2697\u2699\u269b\u269c\u26b0\u26b1\u26c8\u26ce\u26cf\u26d1\u26d3\u26e9\u26f0\u26f1\u26f4\u26f7\u26f8\u2705\u271d\u2721\u2728\u274c\u274e\u2753-\u2755\u2763\u2795-\u2797\u27b0\u27bf\ue50a]|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600\u2601\u260e\u2611\u2614\u2615\u2639\u263a\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2693\u26a0\u26a1\u26aa\u26ab\u26bd\u26be\u26c4\u26c5\u26d4\u26ea\u26f2\u26f3\u26f5\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u2733\u2734\u2744\u2747\u2757\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))/g,

	    // avoid runtime RegExp creation for not so smart,
	    // not JIT based, and old browsers / engines
	    UFE0Fg = /\uFE0F/g,

	    // avoid using a string literal like '\u200D' here because minifiers expand it inline
	    U200D = String.fromCharCode(0x200D),

	    // used to find HTML special chars in attributes
	    rescaper = /[&<>'"]/g,

	    // nodes with type 1 which should **not** be parsed (including lower case svg)
	    shouldntBeParsed = /IFRAME|NOFRAMES|NOSCRIPT|SCRIPT|SELECT|STYLE|TEXTAREA|[a-z]/,

	    // just a private shortcut
	    fromCharCode = String.fromCharCode;

	  return twemoji;


	  /////////////////////////
	  //  private functions  //
	  //     declaration     //
	  /////////////////////////

	  /**
	   * Shortcut to create text nodes
	   * @param   string  text used to create DOM text node
	   * @return  Node  a DOM node with that text
	   */
	  function createText(text) {
	    return document.createTextNode(text);
	  }

	  /**
	   * Utility function to escape html attribute text
	   * @param   string  text use in HTML attribute
	   * @return  string  text encoded to use in HTML attribute
	   */
	  function escapeHTML(s) {
	    return s.replace(rescaper, replacer);
	  }

	  /**
	   * Default callback used to generate emoji src
	   *  based on Twitter CDN
	   * @param   string    the emoji codepoint string
	   * @param   string    the default size to use, i.e. "36x36"
	   * @return  string    the image source to use
	   */
	  function defaultImageSrcGenerator(icon, options) {
	    return ''.concat(options.base, options.size, '/', icon, options.ext);
	  }

	  /**
	   * Given a generic DOM nodeType 1, walk through all children
	   * and store every nodeType 3 (#text) found in the tree.
	   * @param   Element a DOM Element with probably some text in it
	   * @param   Array the list of previously discovered text nodes
	   * @return  Array same list with new discovered nodes, if any
	   */
	  function grabAllTextNodes(node, allText) {
	    var
	      childNodes = node.childNodes,
	      length = childNodes.length,
	      subnode,
	      nodeType;
	    while (length--) {
	      subnode = childNodes[length];
	      nodeType = subnode.nodeType;
	      // parse emoji only in text nodes
	      if (nodeType === 3) {
	        // collect them to process emoji later
	        allText.push(subnode);
	      }
	      // ignore all nodes that are not type 1 or that
	      // should not be parsed as script, style, and others
	      else if (nodeType === 1 && !shouldntBeParsed.test(subnode.nodeName)) {
	        grabAllTextNodes(subnode, allText);
	      }
	    }
	    return allText;
	  }

	  /**
	   * Used to both remove the possible variant
	   *  and to convert utf16 into code points.
	   *  If there is a zero-width-joiner (U+200D), leave the variants in.
	   * @param   string    the raw text of the emoji match
	   */
	  function grabTheRightIcon(rawText) {
	    // if variant is present as \uFE0F
	    return toCodePoint(rawText.indexOf(U200D) < 0 ?
	      rawText.replace(UFE0Fg, '') :
	      rawText
	    );
	  }

	  /**
	   * DOM version of the same logic / parser:
	   *  emojify all found sub-text nodes placing images node instead.
	   * @param   Element   generic DOM node with some text in some child node
	   * @param   Object    options  containing info about how to parse
	    *
	    *            .callback   Function  the callback to invoke per each found emoji.
	    *            .base       string    the base url, by default twemoji.base
	    *            .ext        string    the image extension, by default twemoji.ext
	    *            .size       string    the assets size, by default twemoji.size
	    *
	   * @return  Element same generic node with emoji in place, if any.
	   */
	  function parseNode(node, options) {
	    var
	      allText = grabAllTextNodes(node, []),
	      length = allText.length,
	      attrib,
	      attrname,
	      modified,
	      fragment,
	      subnode,
	      text,
	      match,
	      i,
	      index,
	      img,
	      rawText,
	      iconId,
	      src;
	    while (length--) {
	      modified = false;
	      fragment = document.createDocumentFragment();
	      subnode = allText[length];
	      text = subnode.nodeValue;
	      i = 0;
	      while ((match = re.exec(text))) {
	        index = match.index;
	        if (index !== i) {
	          fragment.appendChild(
	            createText(text.slice(i, index))
	          );
	        }
	        rawText = match[0];
	        iconId = grabTheRightIcon(rawText);
	        i = index + rawText.length;
	        src = options.callback(iconId, options);
	        if (src) {
	          img = new Image();
	          img.onerror = options.onerror;
	          img.setAttribute('draggable', 'false');
	          attrib = options.attributes(rawText, iconId);
	          for (attrname in attrib) {
	            if (
	              attrib.hasOwnProperty(attrname) &&
	              // don't allow any handlers to be set + don't allow overrides
	              attrname.indexOf('on') !== 0 &&
	              !img.hasAttribute(attrname)
	            ) {
	              img.setAttribute(attrname, attrib[attrname]);
	            }
	          }
	          img.className = options.className;
	          img.alt = rawText;
	          img.src = src;
	          modified = true;
	          fragment.appendChild(img);
	        }
	        if (!img) fragment.appendChild(createText(rawText));
	        img = null;
	      }
	      // is there actually anything to replace in here ?
	      if (modified) {
	        // any text left to be added ?
	        if (i < text.length) {
	          fragment.appendChild(
	            createText(text.slice(i))
	          );
	        }
	        // replace the text node only, leave intact
	        // anything else surrounding such text
	        subnode.parentNode.replaceChild(fragment, subnode);
	      }
	    }
	    return node;
	  }

	  /**
	   * String/HTML version of the same logic / parser:
	   *  emojify a generic text placing images tags instead of surrogates pair.
	   * @param   string    generic string with possibly some emoji in it
	   * @param   Object    options  containing info about how to parse
	   *
	   *            .callback   Function  the callback to invoke per each found emoji.
	   *            .base       string    the base url, by default twemoji.base
	   *            .ext        string    the image extension, by default twemoji.ext
	   *            .size       string    the assets size, by default twemoji.size
	   *
	   * @return  the string with <img tags> replacing all found and parsed emoji
	   */
	  function parseString(str, options) {
	    return replace(str, function (rawText) {
	      var
	        ret = rawText,
	        iconId = grabTheRightIcon(rawText),
	        src = options.callback(iconId, options),
	        attrib,
	        attrname;
	      if (src) {
	        // recycle the match string replacing the emoji
	        // with its image counter part
	        ret = '<img '.concat(
	          'class="', options.className, '" ',
	          'draggable="false" ',
	          // needs to preserve user original intent
	          // when variants should be copied and pasted too
	          'alt="',
	          rawText,
	          '"',
	          ' src="',
	          src,
	          '"'
	        );
	        attrib = options.attributes(rawText, iconId);
	        for (attrname in attrib) {
	          if (
	            attrib.hasOwnProperty(attrname) &&
	            // don't allow any handlers to be set + don't allow overrides
	            attrname.indexOf('on') !== 0 &&
	            ret.indexOf(' ' + attrname + '=') === -1
	          ) {
	            ret = ret.concat(' ', attrname, '="', escapeHTML(attrib[attrname]), '"');
	          }
	        }
	        ret = ret.concat('>');
	      }
	      return ret;
	    });
	  }

	  /**
	   * Function used to actually replace HTML special chars
	   * @param   string  HTML special char
	   * @return  string  encoded HTML special char
	   */
	  function replacer(m) {
	    return escaper[m];
	  }

	  /**
	   * Default options.attribute callback
	   * @return  null
	   */
	  function returnNull() {
	    return null;
	  }

	  /**
	   * Given a generic value, creates its squared counterpart if it's a number.
	   *  As example, number 36 will return '36x36'.
	   * @param   any     a generic value.
	   * @return  any     a string representing asset size, i.e. "36x36"
	   *                  only in case the value was a number.
	   *                  Returns initial value otherwise.
	   */
	  function toSizeSquaredAsset(value) {
	    return typeof value === 'number' ?
	      value + 'x' + value :
	      value;
	  }


	  /////////////////////////
	  //  exported functions //
	  //     declaration     //
	  /////////////////////////

	  function fromCodePoint(codepoint) {
	    var code = typeof codepoint === 'string' ?
	          parseInt(codepoint, 16) : codepoint;
	    if (code < 0x10000) {
	      return fromCharCode(code);
	    }
	    code -= 0x10000;
	    return fromCharCode(
	      0xD800 + (code >> 10),
	      0xDC00 + (code & 0x3FF)
	    );
	  }

	  function parse(what, how) {
	    if (!how || typeof how === 'function') {
	      how = {callback: how};
	    }
	    // if first argument is string, inject html <img> tags
	    // otherwise use the DOM tree and parse text nodes only
	    return (typeof what === 'string' ? parseString : parseNode)(what, {
	      callback:   how.callback || defaultImageSrcGenerator,
	      attributes: typeof how.attributes === 'function' ? how.attributes : returnNull,
	      base:       typeof how.base === 'string' ? how.base : twemoji.base,
	      ext:        how.ext || twemoji.ext,
	      size:       how.folder || toSizeSquaredAsset(how.size || twemoji.size),
	      className:  how.className || twemoji.className,
	      onerror:    how.onerror || twemoji.onerror
	    });
	  }

	  function replace(text, callback) {
	    return String(text).replace(re, callback);
	  }

	  function test(text) {
	    // IE6 needs a reset before too
	    re.lastIndex = 0;
	    var result = re.test(text);
	    re.lastIndex = 0;
	    return result;
	  }

	  function toCodePoint(unicodeSurrogates, sep) {
	    var
	      r = [],
	      c = 0,
	      p = 0,
	      i = 0;
	    while (i < unicodeSurrogates.length) {
	      c = unicodeSurrogates.charCodeAt(i++);
	      if (p) {
	        r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16));
	        p = 0;
	      } else if (0xD800 <= c && c <= 0xDBFF) {
	        p = c;
	      } else {
	        r.push(c.toString(16));
	      }
	    }
	    return r.join(sep || '-');
	  }

	}());
	if (!location.protocol) {
	  twemoji.base = twemoji.base.replace(/^http:/, "");
	}
	module.exports = twemoji;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = [];

	data[0] = {
	  name: 'Food&Drink|🍌',
	  content: ["🌽", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🍅", "🍆", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🍽"]
	};
	data[1] = {
	  name: 'Sport|🏈',
	  content: ["🏂🏻", "🏂🏼", "🏂🏽", "🏂🏾", "🏂🏿", "🏂", "🏃🏻", "🏃🏼", "🏃🏽", "🏃🏾", "🏃🏿", "🏃", "🏄🏻", "🏄🏼", "🏄🏽", "🏄🏾", "🏄🏿", "🏄", "🏅", "🏆", "🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿", "🏇", "🏈", "🏉", "🏊🏻", "🏊🏼", "🏊🏽", "🏊🏾", "🏊🏿", "🏊", "🏋🏻", "🏋🏼", "🏋🏽", "🏋🏾", "🏋🏿", "🏋", "🏌", "🏍", "🏎", "🏏", "🏐", "🏑", "🏒", "🏓"]
	};

	data[2] = {
	  name: 'Animal|🐻',
	  content: ['🐀', '🐁', '🐂', '🐃', '🐄', '🐅', '🐆', '🐇', '🐈', '🐉', '🐊', '🐋', '🐌', '🐍', '🐎', '🐏', '🐐', '🐑', '🐒', '🐓', '🐔', '🐕', '🐖', '🐗', '🐘', '🐙', '🐚', '🐛', '🐜', '🐝', '🐞', '🐟', '🐠', '🐡', '🐢', '🐣', '🐤', '🐥', '🐦', '🐧', '🐨', '🐩', '🐪', '🐫', '🐬', '🐭', '🐮', '🐯', '🐰', '🐱', '🐲', '🐳', '🐴', '🐵', '🐶', '🐷', '🐸', '🐹', '🐺', '🐻', '🐼', '🐽', '🐾']
	};

	data[3] = {
	  name: 'nature|🌏',
	  content: ['🌀', '🌁', '🌂', '🌃', '🌄', '🌅', '🌆', '🌇', '🌈', '🌉', '🌊', '🌋', '🌌', '🌍', '🌎', '🌏', '🌐', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌝', '🌞', '🌟', '🌠', '🌰', '🌱', '🌲', '🌳', '🌴', '🌵', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼', '🌽', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🍄', '🍅', '🍆', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍞', '🍟', '🍠', '🍡', '🍢', '🍣', '🍤', '🍥', '🍦', '🍧', '🍨', '🍩', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🍰', '🍱', '🍲', '🍳', '🍴', '🍵', '🍶', '🍷', '🍸', '🍹', '🍺', '🍻', '🍼']
	};

	exports.default = data;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"emotion-tab\">\r\n  <span class=\"emotion-tabitem\">\r\n    </span>\r\n</div>\r\n<div class=\"emotion-content\">\r\n  <div class=\"emotion-contentitem\">\r\n    contentIten\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	      return (root.returnExportsGlobal = factory($));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require("jquery"));
	  } else {
	    factory(jQuery);
	  }
	}(this, function ($) {

	//@ sourceMappingURL=jquery.caret.map
	/*
	  Implement Github like autocomplete mentions
	  http://ichord.github.com/At.js

	  Copyright (c) 2013 chord.luo@gmail.com
	  Licensed under the MIT license.
	*/

	/*
	本插件操作 textarea 或者 input 内的插入符
	只实现了获得插入符在文本框中的位置，我设置
	插入符的位置.
	*/

	"use strict";
	var EditableCaret, InputCaret, Mirror, Utils, discoveryIframeOf, methods, oDocument, oFrame, oWindow, pluginName, setContextBy;

	pluginName = 'caret';

	EditableCaret = (function() {
	  function EditableCaret($inputor) {
	    this.$inputor = $inputor;
	    this.domInputor = this.$inputor[0];
	  }

	  EditableCaret.prototype.setPos = function(pos) {
	    var fn, found, offset, sel;
	    if (sel = oWindow.getSelection()) {
	      offset = 0;
	      found = false;
	      (fn = function(pos, parent) {
	        var node, range, _i, _len, _ref, _results;
	        _ref = parent.childNodes;
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          node = _ref[_i];
	          if (found) {
	            break;
	          }
	          if (node.nodeType === 3) {
	            if (offset + node.length >= pos) {
	              found = true;
	              range = oDocument.createRange();
	              range.setStart(node, pos - offset);
	              sel.removeAllRanges();
	              sel.addRange(range);
	              break;
	            } else {
	              _results.push(offset += node.length);
	            }
	          } else {
	            _results.push(fn(pos, node));
	          }
	        }
	        return _results;
	      })(pos, this.domInputor);
	    }
	    return this.domInputor;
	  };

	  EditableCaret.prototype.getIEPosition = function() {
	    return this.getPosition();
	  };

	  EditableCaret.prototype.getPosition = function() {
	    var inputor_offset, offset;
	    offset = this.getOffset();
	    inputor_offset = this.$inputor.offset();
	    offset.left -= inputor_offset.left;
	    offset.top -= inputor_offset.top;
	    return offset;
	  };

	  EditableCaret.prototype.getOldIEPos = function() {
	    var preCaretTextRange, textRange;
	    textRange = oDocument.selection.createRange();
	    preCaretTextRange = oDocument.body.createTextRange();
	    preCaretTextRange.moveToElementText(this.domInputor);
	    preCaretTextRange.setEndPoint("EndToEnd", textRange);
	    return preCaretTextRange.text.length;
	  };

	  EditableCaret.prototype.getPos = function() {
	    var clonedRange, pos, range;
	    if (range = this.range()) {
	      clonedRange = range.cloneRange();
	      clonedRange.selectNodeContents(this.domInputor);
	      clonedRange.setEnd(range.endContainer, range.endOffset);
	      pos = clonedRange.toString().length;
	      clonedRange.detach();
	      return pos;
	    } else if (oDocument.selection) {
	      return this.getOldIEPos();
	    }
	  };

	  EditableCaret.prototype.getOldIEOffset = function() {
	    var range, rect;
	    range = oDocument.selection.createRange().duplicate();
	    range.moveStart("character", -1);
	    rect = range.getBoundingClientRect();
	    return {
	      height: rect.bottom - rect.top,
	      left: rect.left,
	      top: rect.top
	    };
	  };

	  EditableCaret.prototype.getOffset = function(pos) {
	    var clonedRange, offset, range, rect, shadowCaret;
	    if (oWindow.getSelection && (range = this.range())) {
	      if (range.endOffset - 1 > 0 && range.endContainer !== this.domInputor) {
	        clonedRange = range.cloneRange();
	        clonedRange.setStart(range.endContainer, range.endOffset - 1);
	        clonedRange.setEnd(range.endContainer, range.endOffset);
	        rect = clonedRange.getBoundingClientRect();
	        offset = {
	          height: rect.height,
	          left: rect.left + rect.width,
	          top: rect.top
	        };
	        clonedRange.detach();
	      }
	      if (!offset || (offset != null ? offset.height : void 0) === 0) {
	        clonedRange = range.cloneRange();
	        shadowCaret = $(oDocument.createTextNode("|"));
	        clonedRange.insertNode(shadowCaret[0]);
	        clonedRange.selectNode(shadowCaret[0]);
	        rect = clonedRange.getBoundingClientRect();
	        offset = {
	          height: rect.height,
	          left: rect.left,
	          top: rect.top
	        };
	        shadowCaret.remove();
	        clonedRange.detach();
	      }
	    } else if (oDocument.selection) {
	      offset = this.getOldIEOffset();
	    }
	    if (offset) {
	      offset.top += $(oWindow).scrollTop();
	      offset.left += $(oWindow).scrollLeft();
	    }
	    return offset;
	  };

	  EditableCaret.prototype.range = function() {
	    var sel;
	    if (!oWindow.getSelection) {
	      return;
	    }
	    sel = oWindow.getSelection();
	    if (sel.rangeCount > 0) {
	      return sel.getRangeAt(0);
	    } else {
	      return null;
	    }
	  };

	  return EditableCaret;

	})();

	InputCaret = (function() {
	  function InputCaret($inputor) {
	    this.$inputor = $inputor;
	    this.domInputor = this.$inputor[0];
	  }

	  InputCaret.prototype.getIEPos = function() {
	    var endRange, inputor, len, normalizedValue, pos, range, textInputRange;
	    inputor = this.domInputor;
	    range = oDocument.selection.createRange();
	    pos = 0;
	    if (range && range.parentElement() === inputor) {
	      normalizedValue = inputor.value.replace(/\r\n/g, "\n");
	      len = normalizedValue.length;
	      textInputRange = inputor.createTextRange();
	      textInputRange.moveToBookmark(range.getBookmark());
	      endRange = inputor.createTextRange();
	      endRange.collapse(false);
	      if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
	        pos = len;
	      } else {
	        pos = -textInputRange.moveStart("character", -len);
	      }
	    }
	    return pos;
	  };

	  InputCaret.prototype.getPos = function() {
	    if (oDocument.selection) {
	      return this.getIEPos();
	    } else {
	      return this.domInputor.selectionStart;
	    }
	  };

	  InputCaret.prototype.setPos = function(pos) {
	    var inputor, range;
	    inputor = this.domInputor;
	    if (oDocument.selection) {
	      range = inputor.createTextRange();
	      range.move("character", pos);
	      range.select();
	    } else if (inputor.setSelectionRange) {
	      inputor.setSelectionRange(pos, pos);
	    }
	    return inputor;
	  };

	  InputCaret.prototype.getIEOffset = function(pos) {
	    var h, textRange, x, y;
	    textRange = this.domInputor.createTextRange();
	    pos || (pos = this.getPos());
	    textRange.move('character', pos);
	    x = textRange.boundingLeft;
	    y = textRange.boundingTop;
	    h = textRange.boundingHeight;
	    return {
	      left: x,
	      top: y,
	      height: h
	    };
	  };

	  InputCaret.prototype.getOffset = function(pos) {
	    var $inputor, offset, position;
	    $inputor = this.$inputor;
	    if (oDocument.selection) {
	      offset = this.getIEOffset(pos);
	      offset.top += $(oWindow).scrollTop() + $inputor.scrollTop();
	      offset.left += $(oWindow).scrollLeft() + $inputor.scrollLeft();
	      return offset;
	    } else {
	      offset = $inputor.offset();
	      position = this.getPosition(pos);
	      return offset = {
	        left: offset.left + position.left - $inputor.scrollLeft(),
	        top: offset.top + position.top - $inputor.scrollTop(),
	        height: position.height
	      };
	    }
	  };

	  InputCaret.prototype.getPosition = function(pos) {
	    var $inputor, at_rect, end_range, format, html, mirror, start_range;
	    $inputor = this.$inputor;
	    format = function(value) {
	      value = value.replace(/<|>|`|"|&/g, '?').replace(/\r\n|\r|\n/g, "<br/>");
	      if (/firefox/i.test(navigator.userAgent)) {
	        value = value.replace(/\s/g, '&nbsp;');
	      }
	      return value;
	    };
	    if (pos === void 0) {
	      pos = this.getPos();
	    }
	    start_range = $inputor.val().slice(0, pos);
	    end_range = $inputor.val().slice(pos);
	    html = "<span style='position: relative; display: inline;'>" + format(start_range) + "</span>";
	    html += "<span id='caret' style='position: relative; display: inline;'>|</span>";
	    html += "<span style='position: relative; display: inline;'>" + format(end_range) + "</span>";
	    mirror = new Mirror($inputor);
	    return at_rect = mirror.create(html).rect();
	  };

	  InputCaret.prototype.getIEPosition = function(pos) {
	    var h, inputorOffset, offset, x, y;
	    offset = this.getIEOffset(pos);
	    inputorOffset = this.$inputor.offset();
	    x = offset.left - inputorOffset.left;
	    y = offset.top - inputorOffset.top;
	    h = offset.height;
	    return {
	      left: x,
	      top: y,
	      height: h
	    };
	  };

	  return InputCaret;

	})();

	Mirror = (function() {
	  Mirror.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"];

	  function Mirror($inputor) {
	    this.$inputor = $inputor;
	  }

	  Mirror.prototype.mirrorCss = function() {
	    var css,
	      _this = this;
	    css = {
	      position: 'absolute',
	      left: -9999,
	      top: 0,
	      zIndex: -20000
	    };
	    if (this.$inputor.prop('tagName') === 'TEXTAREA') {
	      this.css_attr.push('width');
	    }
	    $.each(this.css_attr, function(i, p) {
	      return css[p] = _this.$inputor.css(p);
	    });
	    return css;
	  };

	  Mirror.prototype.create = function(html) {
	    this.$mirror = $('<div></div>');
	    this.$mirror.css(this.mirrorCss());
	    this.$mirror.html(html);
	    this.$inputor.after(this.$mirror);
	    return this;
	  };

	  Mirror.prototype.rect = function() {
	    var $flag, pos, rect;
	    $flag = this.$mirror.find("#caret");
	    pos = $flag.position();
	    rect = {
	      left: pos.left,
	      top: pos.top,
	      height: $flag.height()
	    };
	    this.$mirror.remove();
	    return rect;
	  };

	  return Mirror;

	})();

	Utils = {
	  contentEditable: function($inputor) {
	    return !!($inputor[0].contentEditable && $inputor[0].contentEditable === 'true');
	  }
	};

	methods = {
	  pos: function(pos) {
	    if (pos || pos === 0) {
	      return this.setPos(pos);
	    } else {
	      return this.getPos();
	    }
	  },
	  position: function(pos) {
	    if (oDocument.selection) {
	      return this.getIEPosition(pos);
	    } else {
	      return this.getPosition(pos);
	    }
	  },
	  offset: function(pos) {
	    var offset;
	    offset = this.getOffset(pos);
	    return offset;
	  }
	};

	oDocument = null;

	oWindow = null;

	oFrame = null;

	setContextBy = function(settings) {
	  var iframe;
	  if (iframe = settings != null ? settings.iframe : void 0) {
	    oFrame = iframe;
	    oWindow = iframe.contentWindow;
	    return oDocument = iframe.contentDocument || oWindow.document;
	  } else {
	    oFrame = void 0;
	    oWindow = window;
	    return oDocument = document;
	  }
	};

	discoveryIframeOf = function($dom) {
	  var error;
	  oDocument = $dom[0].ownerDocument;
	  oWindow = oDocument.defaultView || oDocument.parentWindow;
	  try {
	    return oFrame = oWindow.frameElement;
	  } catch (_error) {
	    error = _error;
	  }
	};

	$.fn.caret = function(method, value, settings) {
	  var caret;
	  if (methods[method]) {
	    if ($.isPlainObject(value)) {
	      setContextBy(value);
	      value = void 0;
	    } else {
	      setContextBy(settings);
	    }
	    caret = Utils.contentEditable(this) ? new EditableCaret(this) : new InputCaret(this);
	    return methods[method].apply(caret, [value]);
	  } else {
	    return $.error("Method " + method + " does not exist on jQuery.caret");
	  }
	};

	$.fn.caret.EditableCaret = EditableCaret;

	$.fn.caret.InputCaret = InputCaret;

	$.fn.caret.Utils = Utils;

	$.fn.caret.apis = methods;


	}));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * at.js - 1.5.1
	 * Copyright (c) 2016 chord.luo <chord.luo@gmail.com>;
	 * Homepage: http://ichord.github.com/At.js
	 * License: MIT
	 */
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a0) {
	      return (factory(a0));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(require("jquery"));
	  } else {
	    factory(jQuery);
	  }
	}(this, function ($) {
	var DEFAULT_CALLBACKS, KEY_CODE;

	KEY_CODE = {
	  DOWN: 40,
	  UP: 38,
	  ESC: 27,
	  TAB: 9,
	  ENTER: 13,
	  CTRL: 17,
	  A: 65,
	  P: 80,
	  N: 78,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  BACKSPACE: 8,
	  SPACE: 32
	};

	DEFAULT_CALLBACKS = {
	  beforeSave: function(data) {
	    return Controller.arrayToDefaultHash(data);
	  },
	  matcher: function(flag, subtext, should_startWithSpace, acceptSpaceBar) {
	    var _a, _y, match, regexp, space;
	    flag = flag.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	    if (should_startWithSpace) {
	      flag = '(?:^|\\s)' + flag;
	    }
	    _a = decodeURI("%C3%80");
	    _y = decodeURI("%C3%BF");
	    space = acceptSpaceBar ? "\ " : "";
	    regexp = new RegExp(flag + "([A-Za-z" + _a + "-" + _y + "0-9_" + space + "\'\.\+\-]*)$|" + flag + "([^\\x00-\\xff]*)$", 'gi');
	    match = regexp.exec(subtext);
	    if (match) {
	      return match[2] || match[1];
	    } else {
	      return null;
	    }
	  },
	  filter: function(query, data, searchKey) {
	    var _results, i, item, len;
	    _results = [];
	    for (i = 0, len = data.length; i < len; i++) {
	      item = data[i];
	      if (~new String(item[searchKey]).toLowerCase().indexOf(query.toLowerCase())) {
	        _results.push(item);
	      }
	    }
	    return _results;
	  },
	  remoteFilter: null,
	  sorter: function(query, items, searchKey) {
	    var _results, i, item, len;
	    if (!query) {
	      return items;
	    }
	    _results = [];
	    for (i = 0, len = items.length; i < len; i++) {
	      item = items[i];
	      item.atwho_order = new String(item[searchKey]).toLowerCase().indexOf(query.toLowerCase());
	      if (item.atwho_order > -1) {
	        _results.push(item);
	      }
	    }
	    return _results.sort(function(a, b) {
	      return a.atwho_order - b.atwho_order;
	    });
	  },
	  tplEval: function(tpl, map) {
	    var error, error1, template;
	    template = tpl;
	    try {
	      if (typeof tpl !== 'string') {
	        template = tpl(map);
	      }
	      return template.replace(/\$\{([^\}]*)\}/g, function(tag, key, pos) {
	        return map[key];
	      });
	    } catch (error1) {
	      error = error1;
	      return "";
	    }
	  },
	  highlighter: function(li, query) {
	    var regexp;
	    if (!query) {
	      return li;
	    }
	    regexp = new RegExp(">\\s*(\\w*?)(" + query.replace("+", "\\+") + ")(\\w*)\\s*<", 'ig');
	    return li.replace(regexp, function(str, $1, $2, $3) {
	      return '> ' + $1 + '<strong>' + $2 + '</strong>' + $3 + ' <';
	    });
	  },
	  beforeInsert: function(value, $li, e) {
	    return value;
	  },
	  beforeReposition: function(offset) {
	    return offset;
	  },
	  afterMatchFailed: function(at, el) {}
	};

	var App;

	App = (function() {
	  function App(inputor) {
	    this.currentFlag = null;
	    this.controllers = {};
	    this.aliasMaps = {};
	    this.$inputor = $(inputor);
	    this.setupRootElement();
	    this.listen();
	  }

	  App.prototype.createContainer = function(doc) {
	    var ref;
	    if ((ref = this.$el) != null) {
	      ref.remove();
	    }
	    return $(doc.body).append(this.$el = $("<div class='atwho-container'></div>"));
	  };

	  App.prototype.setupRootElement = function(iframe, asRoot) {
	    var error, error1;
	    if (asRoot == null) {
	      asRoot = false;
	    }
	    if (iframe) {
	      this.window = iframe.contentWindow;
	      this.document = iframe.contentDocument || this.window.document;
	      this.iframe = iframe;
	    } else {
	      this.document = this.$inputor[0].ownerDocument;
	      this.window = this.document.defaultView || this.document.parentWindow;
	      try {
	        this.iframe = this.window.frameElement;
	      } catch (error1) {
	        error = error1;
	        this.iframe = null;
	        if ($.fn.atwho.debug) {
	          throw new Error("iframe auto-discovery is failed.\nPlease use `setIframe` to set the target iframe manually.\n" + error);
	        }
	      }
	    }
	    return this.createContainer((this.iframeAsRoot = asRoot) ? this.document : document);
	  };

	  App.prototype.controller = function(at) {
	    var c, current, currentFlag, ref;
	    if (this.aliasMaps[at]) {
	      current = this.controllers[this.aliasMaps[at]];
	    } else {
	      ref = this.controllers;
	      for (currentFlag in ref) {
	        c = ref[currentFlag];
	        if (currentFlag === at) {
	          current = c;
	          break;
	        }
	      }
	    }
	    if (current) {
	      return current;
	    } else {
	      return this.controllers[this.currentFlag];
	    }
	  };

	  App.prototype.setContextFor = function(at) {
	    this.currentFlag = at;
	    return this;
	  };

	  App.prototype.reg = function(flag, setting) {
	    var base, controller;
	    controller = (base = this.controllers)[flag] || (base[flag] = this.$inputor.is('[contentEditable]') ? new EditableController(this, flag) : new TextareaController(this, flag));
	    if (setting.alias) {
	      this.aliasMaps[setting.alias] = flag;
	    }
	    controller.init(setting);
	    return this;
	  };

	  App.prototype.listen = function() {
	    return this.$inputor.on('compositionstart', (function(_this) {
	      return function(e) {
	        var ref;
	        if ((ref = _this.controller()) != null) {
	          ref.view.hide();
	        }
	        _this.isComposing = true;
	        return null;
	      };
	    })(this)).on('compositionend', (function(_this) {
	      return function(e) {
	        _this.isComposing = false;
	        setTimeout(function(e) {
	          return _this.dispatch(e);
	        });
	        return null;
	      };
	    })(this)).on('keyup.atwhoInner', (function(_this) {
	      return function(e) {
	        return _this.onKeyup(e);
	      };
	    })(this)).on('keydown.atwhoInner', (function(_this) {
	      return function(e) {
	        return _this.onKeydown(e);
	      };
	    })(this)).on('blur.atwhoInner', (function(_this) {
	      return function(e) {
	        var c;
	        if (c = _this.controller()) {
	          c.expectedQueryCBId = null;
	          return c.view.hide(e, c.getOpt("displayTimeout"));
	        }
	      };
	    })(this)).on('click.atwhoInner', (function(_this) {
	      return function(e) {
	        return _this.dispatch(e);
	      };
	    })(this)).on('scroll.atwhoInner', (function(_this) {
	      return function() {
	        var lastScrollTop;
	        lastScrollTop = _this.$inputor.scrollTop();
	        return function(e) {
	          var currentScrollTop, ref;
	          currentScrollTop = e.target.scrollTop;
	          if (lastScrollTop !== currentScrollTop) {
	            if ((ref = _this.controller()) != null) {
	              ref.view.hide(e);
	            }
	          }
	          lastScrollTop = currentScrollTop;
	          return true;
	        };
	      };
	    })(this)());
	  };

	  App.prototype.shutdown = function() {
	    var _, c, ref;
	    ref = this.controllers;
	    for (_ in ref) {
	      c = ref[_];
	      c.destroy();
	      delete this.controllers[_];
	    }
	    this.$inputor.off('.atwhoInner');
	    return this.$el.remove();
	  };

	  App.prototype.dispatch = function(e) {
	    var _, c, ref, results;
	    ref = this.controllers;
	    results = [];
	    for (_ in ref) {
	      c = ref[_];
	      results.push(c.lookUp(e));
	    }
	    return results;
	  };

	  App.prototype.onKeyup = function(e) {
	    var ref;
	    switch (e.keyCode) {
	      case KEY_CODE.ESC:
	        e.preventDefault();
	        if ((ref = this.controller()) != null) {
	          ref.view.hide();
	        }
	        break;
	      case KEY_CODE.DOWN:
	      case KEY_CODE.UP:
	      case KEY_CODE.CTRL:
	      case KEY_CODE.ENTER:
	        $.noop();
	        break;
	      case KEY_CODE.P:
	      case KEY_CODE.N:
	        if (!e.ctrlKey) {
	          this.dispatch(e);
	        }
	        break;
	      default:
	        this.dispatch(e);
	    }
	  };

	  App.prototype.onKeydown = function(e) {
	    var ref, view;
	    view = (ref = this.controller()) != null ? ref.view : void 0;
	    if (!(view && view.visible())) {
	      return;
	    }
	    switch (e.keyCode) {
	      case KEY_CODE.ESC:
	        e.preventDefault();
	        view.hide(e);
	        break;
	      case KEY_CODE.UP:
	        e.preventDefault();
	        view.prev();
	        break;
	      case KEY_CODE.DOWN:
	        e.preventDefault();
	        view.next();
	        break;
	      case KEY_CODE.P:
	        if (!e.ctrlKey) {
	          return;
	        }
	        e.preventDefault();
	        view.prev();
	        break;
	      case KEY_CODE.N:
	        if (!e.ctrlKey) {
	          return;
	        }
	        e.preventDefault();
	        view.next();
	        break;
	      case KEY_CODE.TAB:
	      case KEY_CODE.ENTER:
	      case KEY_CODE.SPACE:
	        if (!view.visible()) {
	          return;
	        }
	        if (!this.controller().getOpt('spaceSelectsMatch') && e.keyCode === KEY_CODE.SPACE) {
	          return;
	        }
	        if (!this.controller().getOpt('tabSelectsMatch') && e.keyCode === KEY_CODE.TAB) {
	          return;
	        }
	        if (view.highlighted()) {
	          e.originalEvent.stopPropagation();
	          e.originalEvent.preventDefault();
	          view.choose(e);
	        } else {
	          view.hide(e);
	        }
	        break;
	      default:
	        $.noop();
	    }
	  };

	  return App;

	})();

	var Controller,
	  slice = [].slice;

	Controller = (function() {
	  Controller.prototype.uid = function() {
	    return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date().getTime());
	  };

	  function Controller(app, at1) {
	    this.app = app;
	    this.at = at1;
	    this.$inputor = this.app.$inputor;
	    this.id = this.$inputor[0].id || this.uid();
	    this.expectedQueryCBId = null;
	    this.setting = null;
	    this.query = null;
	    this.pos = 0;
	    this.range = null;
	    if ((this.$el = $("#atwho-ground-" + this.id, this.app.$el)).length === 0) {
	      this.app.$el.append(this.$el = $("<div id='atwho-ground-" + this.id + "'></div>"));
	    }
	    this.model = new Model(this);
	    this.view = new View(this);
	  }

	  Controller.prototype.init = function(setting) {
	    this.setting = $.extend({}, this.setting || $.fn.atwho["default"], setting);
	    this.view.init();
	    return this.model.reload(this.setting.data);
	  };

	  Controller.prototype.destroy = function() {
	    this.trigger('beforeDestroy');
	    this.model.destroy();
	    this.view.destroy();
	    return this.$el.remove();
	  };

	  Controller.prototype.callDefault = function() {
	    var args, error, error1, funcName;
	    funcName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    try {
	      return DEFAULT_CALLBACKS[funcName].apply(this, args);
	    } catch (error1) {
	      error = error1;
	      return $.error(error + " Or maybe At.js doesn't have function " + funcName);
	    }
	  };

	  Controller.prototype.trigger = function(name, data) {
	    var alias, eventName;
	    if (data == null) {
	      data = [];
	    }
	    data.push(this);
	    alias = this.getOpt('alias');
	    eventName = alias ? name + "-" + alias + ".atwho" : name + ".atwho";
	    return this.$inputor.trigger(eventName, data);
	  };

	  Controller.prototype.callbacks = function(funcName) {
	    return this.getOpt("callbacks")[funcName] || DEFAULT_CALLBACKS[funcName];
	  };

	  Controller.prototype.getOpt = function(at, default_value) {
	    var e, error1;
	    try {
	      return this.setting[at];
	    } catch (error1) {
	      e = error1;
	      return null;
	    }
	  };

	  Controller.prototype.insertContentFor = function($li) {
	    var data, tpl;
	    tpl = this.getOpt('insertTpl');
	    data = $.extend({}, $li.data('item-data'), {
	      'atwho-at': this.at
	    });
	    return this.callbacks("tplEval").call(this, tpl, data, "onInsert");
	  };

	  Controller.prototype.renderView = function(data) {
	    var searchKey;
	    searchKey = this.getOpt("searchKey");
	    data = this.callbacks("sorter").call(this, this.query.text, data.slice(0, 1001), searchKey);
	    return this.view.render(data.slice(0, this.getOpt('limit')));
	  };

	  Controller.arrayToDefaultHash = function(data) {
	    var i, item, len, results;
	    if (!$.isArray(data)) {
	      return data;
	    }
	    results = [];
	    for (i = 0, len = data.length; i < len; i++) {
	      item = data[i];
	      if ($.isPlainObject(item)) {
	        results.push(item);
	      } else {
	        results.push({
	          name: item
	        });
	      }
	    }
	    return results;
	  };

	  Controller.prototype.lookUp = function(e) {
	    var query, wait;
	    if (e && e.type === 'click' && !this.getOpt('lookUpOnClick')) {
	      return;
	    }
	    if (this.getOpt('suspendOnComposing') && this.app.isComposing) {
	      return;
	    }
	    query = this.catchQuery(e);
	    if (!query) {
	      this.expectedQueryCBId = null;
	      return query;
	    }
	    this.app.setContextFor(this.at);
	    if (wait = this.getOpt('delay')) {
	      this._delayLookUp(query, wait);
	    } else {
	      this._lookUp(query);
	    }
	    return query;
	  };

	  Controller.prototype._delayLookUp = function(query, wait) {
	    var now, remaining;
	    now = Date.now ? Date.now() : new Date().getTime();
	    this.previousCallTime || (this.previousCallTime = now);
	    remaining = wait - (now - this.previousCallTime);
	    if ((0 < remaining && remaining < wait)) {
	      this.previousCallTime = now;
	      this._stopDelayedCall();
	      return this.delayedCallTimeout = setTimeout((function(_this) {
	        return function() {
	          _this.previousCallTime = 0;
	          _this.delayedCallTimeout = null;
	          return _this._lookUp(query);
	        };
	      })(this), wait);
	    } else {
	      this._stopDelayedCall();
	      if (this.previousCallTime !== now) {
	        this.previousCallTime = 0;
	      }
	      return this._lookUp(query);
	    }
	  };

	  Controller.prototype._stopDelayedCall = function() {
	    if (this.delayedCallTimeout) {
	      clearTimeout(this.delayedCallTimeout);
	      return this.delayedCallTimeout = null;
	    }
	  };

	  Controller.prototype._generateQueryCBId = function() {
	    return {};
	  };

	  Controller.prototype._lookUp = function(query) {
	    var _callback;
	    _callback = function(queryCBId, data) {
	      if (queryCBId !== this.expectedQueryCBId) {
	        return;
	      }
	      if (data && data.length > 0) {
	        return this.renderView(this.constructor.arrayToDefaultHash(data));
	      } else {
	        return this.view.hide();
	      }
	    };
	    this.expectedQueryCBId = this._generateQueryCBId();
	    return this.model.query(query.text, $.proxy(_callback, this, this.expectedQueryCBId));
	  };

	  return Controller;

	})();

	var TextareaController,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	TextareaController = (function(superClass) {
	  extend(TextareaController, superClass);

	  function TextareaController() {
	    return TextareaController.__super__.constructor.apply(this, arguments);
	  }

	  TextareaController.prototype.catchQuery = function() {
	    var caretPos, content, end, isString, query, start, subtext;
	    content = this.$inputor.val();
	    caretPos = this.$inputor.caret('pos', {
	      iframe: this.app.iframe
	    });
	    subtext = content.slice(0, caretPos);
	    query = this.callbacks("matcher").call(this, this.at, subtext, this.getOpt('startWithSpace'), this.getOpt("acceptSpaceBar"));
	    isString = typeof query === 'string';
	    if (isString && query.length < this.getOpt('minLen', 0)) {
	      return;
	    }
	    if (isString && query.length <= this.getOpt('maxLen', 20)) {
	      start = caretPos - query.length;
	      end = start + query.length;
	      this.pos = start;
	      query = {
	        'text': query,
	        'headPos': start,
	        'endPos': end
	      };
	      this.trigger("matched", [this.at, query.text]);
	    } else {
	      query = null;
	      this.view.hide();
	    }
	    return this.query = query;
	  };

	  TextareaController.prototype.rect = function() {
	    var c, iframeOffset, scaleBottom;
	    if (!(c = this.$inputor.caret('offset', this.pos - 1, {
	      iframe: this.app.iframe
	    }))) {
	      return;
	    }
	    if (this.app.iframe && !this.app.iframeAsRoot) {
	      iframeOffset = $(this.app.iframe).offset();
	      c.left += iframeOffset.left;
	      c.top += iframeOffset.top;
	    }
	    scaleBottom = this.app.document.selection ? 0 : 2;
	    return {
	      left: c.left,
	      top: c.top,
	      bottom: c.top + c.height + scaleBottom
	    };
	  };

	  TextareaController.prototype.insert = function(content, $li) {
	    var $inputor, source, startStr, suffix, text;
	    $inputor = this.$inputor;
	    source = $inputor.val();
	    startStr = source.slice(0, Math.max(this.query.headPos - this.at.length, 0));
	    suffix = (suffix = this.getOpt('suffix')) === "" ? suffix : suffix || " ";
	    content += suffix;
	    text = "" + startStr + content + (source.slice(this.query['endPos'] || 0));
	    $inputor.val(text);
	    $inputor.caret('pos', startStr.length + content.length, {
	      iframe: this.app.iframe
	    });
	    if (!$inputor.is(':focus')) {
	      $inputor.focus();
	    }
	    return $inputor.change();
	  };

	  return TextareaController;

	})(Controller);

	var EditableController,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	EditableController = (function(superClass) {
	  extend(EditableController, superClass);

	  function EditableController() {
	    return EditableController.__super__.constructor.apply(this, arguments);
	  }

	  EditableController.prototype._getRange = function() {
	    var sel;
	    sel = this.app.window.getSelection();
	    if (sel.rangeCount > 0) {
	      return sel.getRangeAt(0);
	    }
	  };

	  EditableController.prototype._setRange = function(position, node, range) {
	    if (range == null) {
	      range = this._getRange();
	    }
	    if (!range) {
	      return;
	    }
	    node = $(node)[0];
	    if (position === 'after') {
	      range.setEndAfter(node);
	      range.setStartAfter(node);
	    } else {
	      range.setEndBefore(node);
	      range.setStartBefore(node);
	    }
	    range.collapse(false);
	    return this._clearRange(range);
	  };

	  EditableController.prototype._clearRange = function(range) {
	    var sel;
	    if (range == null) {
	      range = this._getRange();
	    }
	    sel = this.app.window.getSelection();
	    if (this.ctrl_a_pressed == null) {
	      sel.removeAllRanges();
	      return sel.addRange(range);
	    }
	  };

	  EditableController.prototype._movingEvent = function(e) {
	    var ref;
	    return e.type === 'click' || ((ref = e.which) === KEY_CODE.RIGHT || ref === KEY_CODE.LEFT || ref === KEY_CODE.UP || ref === KEY_CODE.DOWN);
	  };

	  EditableController.prototype._unwrap = function(node) {
	    var next;
	    node = $(node).unwrap().get(0);
	    if ((next = node.nextSibling) && next.nodeValue) {
	      node.nodeValue += next.nodeValue;
	      $(next).remove();
	    }
	    return node;
	  };

	  EditableController.prototype.catchQuery = function(e) {
	    var $inserted, $query, _range, index, inserted, isString, lastNode, matched, offset, query, query_content, range;
	    if (!(range = this._getRange())) {
	      return;
	    }
	    if (!range.collapsed) {
	      return;
	    }
	    if(!e){
	      return false;
	    }
	    if (e.which === KEY_CODE.ENTER) {
	      ($query = $(range.startContainer).closest('.atwho-query')).contents().unwrap();
	      if ($query.is(':empty')) {
	        $query.remove();
	      }
	      ($query = $(".atwho-query", this.app.document)).text($query.text()).contents().last().unwrap();
	      this._clearRange();
	      return;
	    }
	    if (/firefox/i.test(navigator.userAgent)) {
	      if ($(range.startContainer).is(this.$inputor)) {
	        this._clearRange();
	        return;
	      }
	      if (e.which === KEY_CODE.BACKSPACE && range.startContainer.nodeType === document.ELEMENT_NODE && (offset = range.startOffset - 1) >= 0) {
	        _range = range.cloneRange();
	        _range.setStart(range.startContainer, offset);
	        if ($(_range.cloneContents()).contents().last().is('.atwho-inserted')) {
	          inserted = $(range.startContainer).contents().get(offset);
	          this._setRange('after', $(inserted).contents().last());
	        }
	      } else if (e.which === KEY_CODE.LEFT && range.startContainer.nodeType === document.TEXT_NODE) {
	        $inserted = $(range.startContainer.previousSibling);
	        if ($inserted.is('.atwho-inserted') && range.startOffset === 0) {
	          this._setRange('after', $inserted.contents().last());
	        }
	      }
	    }
	    $(range.startContainer).closest('.atwho-inserted').addClass('atwho-query').siblings().removeClass('atwho-query');
	    if (($query = $(".atwho-query", this.app.document)).length > 0 && $query.is(':empty') && $query.text().length === 0) {
	      $query.remove();
	    }
	    if (!this._movingEvent(e)) {
	      $query.removeClass('atwho-inserted');
	    }
	    if ($query.length > 0) {
	      switch (e.which) {
	        case KEY_CODE.LEFT:
	          this._setRange('before', $query.get(0), range);
	          $query.removeClass('atwho-query');
	          return;
	        case KEY_CODE.RIGHT:
	          this._setRange('after', $query.get(0).nextSibling, range);
	          $query.removeClass('atwho-query');
	          return;
	      }
	    }
	    if ($query.length > 0 && (query_content = $query.attr('data-atwho-at-query'))) {
	      $query.empty().html(query_content).attr('data-atwho-at-query', null);
	      this._setRange('after', $query.get(0), range);
	    }
	    _range = range.cloneRange();
	    _range.setStart(range.startContainer, 0);
	    matched = this.callbacks("matcher").call(this, this.at, _range.toString(), this.getOpt('startWithSpace'), this.getOpt("acceptSpaceBar"));
	    isString = typeof matched === 'string';
	    if ($query.length === 0 && isString && (index = range.startOffset - this.at.length - matched.length) >= 0) {
	      range.setStart(range.startContainer, index);
	      $query = $('<span/>', this.app.document).attr(this.getOpt("editableAtwhoQueryAttrs")).addClass('atwho-query');
	      range.surroundContents($query.get(0));
	      lastNode = $query.contents().last().get(0);
	      if (/firefox/i.test(navigator.userAgent)) {
	        range.setStart(lastNode, lastNode.length);
	        range.setEnd(lastNode, lastNode.length);
	        this._clearRange(range);
	      } else {
	        this._setRange('after', lastNode, range);
	      }
	    }
	    if (isString && matched.length < this.getOpt('minLen', 0)) {
	      return;
	    }
	    if (isString && matched.length <= this.getOpt('maxLen', 20)) {
	      query = {
	        text: matched,
	        el: $query
	      };
	      this.trigger("matched", [this.at, query.text]);
	      return this.query = query;
	    } else {
	      this.view.hide();
	      this.query = {
	        el: $query
	      };
	      if ($query.text().indexOf(this.at) >= 0) {
	        if (this._movingEvent(e) && $query.hasClass('atwho-inserted')) {
	          $query.removeClass('atwho-query');
	        } else if (false !== this.callbacks('afterMatchFailed').call(this, this.at, $query)) {
	          this._setRange("after", this._unwrap($query.text($query.text()).contents().first()));
	        }
	      }
	      return null;
	    }
	  };

	  EditableController.prototype.rect = function() {
	    var $iframe, iframeOffset, rect;
	    rect = this.query.el.offset();
	    if (this.app.iframe && !this.app.iframeAsRoot) {
	      iframeOffset = ($iframe = $(this.app.iframe)).offset();
	      rect.left += iframeOffset.left - this.$inputor.scrollLeft();
	      rect.top += iframeOffset.top - this.$inputor.scrollTop();
	    }
	    rect.bottom = rect.top + this.query.el.height();
	    return rect;
	  };

	  EditableController.prototype.insert = function(content, $li) {
	    var data, range, suffix, suffixNode;
	    if (!this.$inputor.is(':focus')) {
	      this.$inputor.focus();
	    }
	    suffix = (suffix = this.getOpt('suffix')) === "" ? suffix : suffix || "\u00A0";
	    data = $li.data('item-data');
	    this.query.el.removeClass('atwho-query').addClass('atwho-inserted').html(content).attr('data-atwho-at-query', "" + data['atwho-at'] + this.query.text);
	    if (range = this._getRange()) {
	      range.setEndAfter(this.query.el[0]);
	      range.collapse(false);
	      range.insertNode(suffixNode = this.app.document.createTextNode("\u200D" + suffix));
	      this._setRange('after', suffixNode, range);
	    }
	    if (!this.$inputor.is(':focus')) {
	      this.$inputor.focus();
	    }
	    return this.$inputor.change();
	  };

	  return EditableController;

	})(Controller);

	var Model;

	Model = (function() {
	  function Model(context) {
	    this.context = context;
	    this.at = this.context.at;
	    this.storage = this.context.$inputor;
	  }

	  Model.prototype.destroy = function() {
	    return this.storage.data(this.at, null);
	  };

	  Model.prototype.saved = function() {
	    return this.fetch() > 0;
	  };

	  Model.prototype.query = function(query, callback) {
	    var _remoteFilter, data, searchKey;
	    data = this.fetch();
	    searchKey = this.context.getOpt("searchKey");
	    data = this.context.callbacks('filter').call(this.context, query, data, searchKey) || [];
	    _remoteFilter = this.context.callbacks('remoteFilter');
	    if (data.length > 0 || (!_remoteFilter && data.length === 0)) {
	      return callback(data);
	    } else {
	      return _remoteFilter.call(this.context, query, callback);
	    }
	  };

	  Model.prototype.fetch = function() {
	    return this.storage.data(this.at) || [];
	  };

	  Model.prototype.save = function(data) {
	    return this.storage.data(this.at, this.context.callbacks("beforeSave").call(this.context, data || []));
	  };

	  Model.prototype.load = function(data) {
	    if (!(this.saved() || !data)) {
	      return this._load(data);
	    }
	  };

	  Model.prototype.reload = function(data) {
	    return this._load(data);
	  };

	  Model.prototype._load = function(data) {
	    if (typeof data === "string") {
	      return $.ajax(data, {
	        dataType: "json"
	      }).done((function(_this) {
	        return function(data) {
	          return _this.save(data);
	        };
	      })(this));
	    } else {
	      return this.save(data);
	    }
	  };

	  return Model;

	})();

	var View;

	View = (function() {
	  function View(context) {
	    this.context = context;
	    this.$el = $("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>");
	    this.$elUl = this.$el.children();
	    this.timeoutID = null;
	    this.context.$el.append(this.$el);
	    this.bindEvent();
	  }

	  View.prototype.init = function() {
	    var header_tpl, id;
	    id = this.context.getOpt("alias") || this.context.at.charCodeAt(0);
	    header_tpl = this.context.getOpt("headerTpl");
	    if (header_tpl && this.$el.children().length === 1) {
	      this.$el.prepend(header_tpl);
	    }
	    return this.$el.attr({
	      'id': "at-view-" + id
	    });
	  };

	  View.prototype.destroy = function() {
	    return this.$el.remove();
	  };

	  View.prototype.bindEvent = function() {
	    var $menu, lastCoordX, lastCoordY;
	    $menu = this.$el.find('ul');
	    lastCoordX = 0;
	    lastCoordY = 0;
	    return $menu.on('mousemove.atwho-view', 'li', (function(_this) {
	      return function(e) {
	        var $cur;
	        if (lastCoordX === e.clientX && lastCoordY === e.clientY) {
	          return;
	        }
	        lastCoordX = e.clientX;
	        lastCoordY = e.clientY;
	        $cur = $(e.currentTarget);
	        if ($cur.hasClass('cur')) {
	          return;
	        }
	        $menu.find('.cur').removeClass('cur');
	        return $cur.addClass('cur');
	      };
	    })(this)).on('click.atwho-view', 'li', (function(_this) {
	      return function(e) {
	        $menu.find('.cur').removeClass('cur');
	        $(e.currentTarget).addClass('cur');
	        _this.choose(e);
	        return e.preventDefault();
	      };
	    })(this));
	  };

	  View.prototype.visible = function() {
	    return this.$el.is(":visible");
	  };

	  View.prototype.highlighted = function() {
	    return this.$el.find(".cur").length > 0;
	  };

	  View.prototype.choose = function(e) {
	    var $li, content;
	    if (($li = this.$el.find(".cur")).length) {
	      content = this.context.insertContentFor($li);
	      this.context._stopDelayedCall();
	      this.context.insert(this.context.callbacks("beforeInsert").call(this.context, content, $li, e), $li);
	      this.context.trigger("inserted", [$li, e]);
	      this.hide(e);
	    }
	    if (this.context.getOpt("hideWithoutSuffix")) {
	      return this.stopShowing = true;
	    }
	  };

	  View.prototype.reposition = function(rect) {
	    var _window, offset, overflowOffset, ref;
	    _window = this.context.app.iframeAsRoot ? this.context.app.window : window;
	    if (rect.bottom + this.$el.height() - $(_window).scrollTop() > $(_window).height()) {
	      rect.bottom = rect.top - this.$el.height();
	    }
	    if (rect.left > (overflowOffset = $(_window).width() - this.$el.width() - 5)) {
	      rect.left = overflowOffset;
	    }
	    offset = {
	      left: rect.left,
	      top: rect.bottom
	    };
	    if ((ref = this.context.callbacks("beforeReposition")) != null) {
	      ref.call(this.context, offset);
	    }
	    this.$el.offset(offset);
	    return this.context.trigger("reposition", [offset]);
	  };

	  View.prototype.next = function() {
	    var cur, next, nextEl, offset;
	    cur = this.$el.find('.cur').removeClass('cur');
	    next = cur.next();
	    if (!next.length) {
	      next = this.$el.find('li:first');
	    }
	    next.addClass('cur');
	    nextEl = next[0];
	    offset = nextEl.offsetTop + nextEl.offsetHeight + (nextEl.nextSibling ? nextEl.nextSibling.offsetHeight : 0);
	    return this.scrollTop(Math.max(0, offset - this.$el.height()));
	  };

	  View.prototype.prev = function() {
	    var cur, offset, prev, prevEl;
	    cur = this.$el.find('.cur').removeClass('cur');
	    prev = cur.prev();
	    if (!prev.length) {
	      prev = this.$el.find('li:last');
	    }
	    prev.addClass('cur');
	    prevEl = prev[0];
	    offset = prevEl.offsetTop + prevEl.offsetHeight + (prevEl.nextSibling ? prevEl.nextSibling.offsetHeight : 0);
	    return this.scrollTop(Math.max(0, offset - this.$el.height()));
	  };

	  View.prototype.scrollTop = function(scrollTop) {
	    var scrollDuration;
	    scrollDuration = this.context.getOpt('scrollDuration');
	    if (scrollDuration) {
	      return this.$elUl.animate({
	        scrollTop: scrollTop
	      }, scrollDuration);
	    } else {
	      return this.$elUl.scrollTop(scrollTop);
	    }
	  };

	  View.prototype.show = function() {
	    var rect;
	    if (this.stopShowing) {
	      this.stopShowing = false;
	      return;
	    }
	    if (!this.visible()) {
	      this.$el.show();
	      this.$el.scrollTop(0);
	      this.context.trigger('shown');
	    }
	    if (rect = this.context.rect()) {
	      return this.reposition(rect);
	    }
	  };

	  View.prototype.hide = function(e, time) {
	    var callback;
	    if (!this.visible()) {
	      return;
	    }
	    if (isNaN(time)) {
	      this.$el.hide();
	      return this.context.trigger('hidden', [e]);
	    } else {
	      callback = (function(_this) {
	        return function() {
	          return _this.hide();
	        };
	      })(this);
	      clearTimeout(this.timeoutID);
	      return this.timeoutID = setTimeout(callback, time);
	    }
	  };

	  View.prototype.render = function(list) {
	    var $li, $ul, i, item, len, li, tpl;
	    if (!($.isArray(list) && list.length > 0)) {
	      this.hide();
	      return;
	    }
	    this.$el.find('ul').empty();
	    $ul = this.$el.find('ul');
	    tpl = this.context.getOpt('displayTpl');
	    for (i = 0, len = list.length; i < len; i++) {
	      item = list[i];
	      item = $.extend({}, item, {
	        'atwho-at': this.context.at
	      });
	      li = this.context.callbacks("tplEval").call(this.context, tpl, item, "onDisplay");
	      $li = $(this.context.callbacks("highlighter").call(this.context, li, this.context.query.text));
	      $li.data("item-data", item);
	      $ul.append($li);
	    }
	    this.show();
	    if (this.context.getOpt('highlightFirst')) {
	      return $ul.find("li:first").addClass("cur");
	    }
	  };

	  return View;

	})();

	var Api;

	Api = {
	  load: function(at, data) {
	    var c;
	    if (c = this.controller(at)) {
	      return c.model.load(data);
	    }
	  },
	  isSelecting: function() {
	    var ref;
	    return !!((ref = this.controller()) != null ? ref.view.visible() : void 0);
	  },
	  hide: function() {
	    var ref;
	    return (ref = this.controller()) != null ? ref.view.hide() : void 0;
	  },
	  reposition: function() {
	    var c;
	    if (c = this.controller()) {
	      return c.view.reposition(c.rect());
	    }
	  },
	  setIframe: function(iframe, asRoot) {
	    this.setupRootElement(iframe, asRoot);
	    return null;
	  },
	  run: function() {
	    return this.dispatch();
	  },
	  destroy: function() {
	    this.shutdown();
	    return this.$inputor.data('atwho', null);
	  }
	};

	$.fn.atwho = function(method) {
	  var _args, result;
	  _args = arguments;
	  result = null;
	  this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function() {
	    var $this, app;
	    if (!(app = ($this = $(this)).data("atwho"))) {
	      $this.data('atwho', (app = new App(this)));
	    }
	    if (typeof method === 'object' || !method) {
	      return app.reg(method.at, method);
	    } else if (Api[method] && app) {
	      return result = Api[method].apply(app, Array.prototype.slice.call(_args, 1));
	    } else {
	      return $.error("Method " + method + " does not exist on jQuery.atwho");
	    }
	  });
	  if (result != null) {
	    return result;
	  } else {
	    return this;
	  }
	};

	$.fn.atwho["default"] = {
	  at: void 0,
	  alias: void 0,
	  data: null,
	  displayTpl: "<li>${name}</li>",
	  insertTpl: "${atwho-at}${name}",
	  headerTpl: null,
	  callbacks: DEFAULT_CALLBACKS,
	  searchKey: "name",
	  suffix: void 0,
	  hideWithoutSuffix: false,
	  startWithSpace: true,
	  acceptSpaceBar: false,
	  highlightFirst: true,
	  limit: 5,
	  maxLen: 20,
	  minLen: 0,
	  displayTimeout: 300,
	  delay: null,
	  spaceSelectsMatch: false,
	  tabSelectsMatch: true,
	  editableAtwhoQueryAttrs: {},
	  scrollDuration: 150,
	  suspendOnComposing: true,
	  lookUpOnClick: true
	};

	$.fn.atwho.debug = false;

	}));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./jquery.atwho.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./jquery.atwho.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".atwho-view {\n    position:absolute;\n    top: 0;\n    left: 0;\n    display: none;\n    margin-top: 18px;\n    background: white;\n    color: black;\n    border: 1px solid #DDD;\n    border-radius: 3px;\n    box-shadow: 0 0 5px rgba(0,0,0,0.1);\n    min-width: 120px;\n    z-index: 11110 !important;\n}\n\n.atwho-view .atwho-header {\n    padding: 5px;\n    margin: 5px;\n    cursor: pointer;\n    border-bottom: solid 1px #eaeff1;\n    color: #6f8092;\n    font-size: 11px;\n    font-weight: bold;\n}\n\n.atwho-view .atwho-header .small {\n    color: #6f8092;\n    float: right;\n    padding-top: 2px;\n    margin-right: -5px;\n    font-size: 12px;\n    font-weight: normal;\n}\n\n.atwho-view .atwho-header:hover {\n    cursor: default;\n}\n\n.atwho-view .cur {\n    background: #3366FF;\n    color: white;\n}\n.atwho-view .cur small {\n    color: white;\n}\n.atwho-view strong {\n    color: #3366FF;\n}\n.atwho-view .cur strong {\n    color: white;\n    font:bold;\n}\n.atwho-view ul {\n    /* width: 100px; */\n    list-style:none;\n    padding:0;\n    margin:auto;\n    max-height: 200px;\n    overflow-y: auto;\n}\n.atwho-view ul li {\n    display: block;\n    padding: 5px 10px;\n    border-bottom: 1px solid #DDD;\n    cursor: pointer;\n    /* border-top: 1px solid #C8C8C8; */\n}\n.atwho-view small {\n    font-size: smaller;\n    color: #777;\n    font-weight: normal;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.insertElemToEditor = insertElemToEditor;
	function insertElemToEditor(editor, text) {
	  editor.focus();
	  // 获取选定对象
	  var selection = getSelection();
	  // 判断是否有最后光标对象存在
	  if (lastEditRange) {
	    // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
	    selection.removeAllRanges();
	    selection.addRange(lastEditRange);
	  }
	  // 判断选定对象范围是编辑框还是文本节点
	  if (selection.anchorNode.nodeName != '#text') {
	    // 如果是编辑框范围。则创建表情文本节点进行插入
	    if (text.nodeType === 3) {
	      text = document.createTextNode(text);
	    } else if (text.nodeType === 1) {
	      text = text;
	    }
	    debugger;
	    console.log(text);
	    if (editor.childNodes.length > 0) {
	      // 如果文本框的子元素大于0，则表示有其他元素，则按照位置插入表情节点
	      for (var i = 0; i < editor.childNodes.length; i++) {
	        if (i == selection.anchorOffset) {
	          editor.insertBefore(text, editor.childNodes[i]);
	        }
	      }
	    } else {
	      // 否则直接插入一个表情元素
	      editor.appendChild(text);
	    }
	    // 创建新的光标对象
	    var range = document.createRange();
	    // 光标对象的范围界定为新建的表情节点
	    range.selectNodeContents(text);
	    // 光标位置定位在表情节点的最大长度
	    range.setStart(text, text.length);
	    // 使光标开始和光标结束重叠
	    range.collapse(true);
	    // 清除选定对象的所有光标对象
	    selection.removeAllRanges();
	    // 插入新的光标对象
	    selection.addRange(range);
	  } else {
	    // 如果是文本节点则先获取光标对象
	    var range = selection.getRangeAt(0);
	    // 获取光标对象的范围界定对象，一般就是textNode对象
	    var textNode = range.startContainer;
	    // 获取光标位置
	    var rangeStartOffset = range.startOffset;
	    // 文本节点在光标位置处插入新的表情内容
	    textNode.insertData(rangeStartOffset, text);
	    // 光标移动到到原来的位置加上新内容的长度
	    range.setStart(textNode, rangeStartOffset + text.length);
	    // 光标开始和光标结束重叠
	    range.collapse(true);
	    // 清除选定对象的所有光标对象
	    selection.removeAllRanges();
	    // 插入新的光标对象
	    selection.addRange(range);
	  }
	  // 无论如何都要记录最后光标对象
	  lastEditRange = selection.getRangeAt(0);
	}

/***/ }
/******/ ]);