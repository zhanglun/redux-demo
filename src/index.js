require('./emotion.less');
import Emotion from './emotion';

let btn = document.querySelector('.emojiBtn');
let emojiContainer = btn.parentNode;
let uuid = Math.random().toString(36).substring(2);
let emotion = null;

// 获取当前光标所在的位置
let _getPointPosition = function (elem) {
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

let _setEditableCaretPostion = function (elem, pos) {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(el.childNodes[2], pos);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
};

$(btn).emotion({
    input: $('.emoji-editor'),
});
$('.emoji-editor').on('keyup', (e) => {
    // 获取选定对象
    var selection = getSelection();
    // 设置最后光标对象
    window.lastEditRange = selection.getRangeAt(0);
}).on('click', (e) => {
// 获取选定对象
    var selection = getSelection();
    // 设置最后光标对象
    window.lastEditRange = selection.getRangeAt(0);
})