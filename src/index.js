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

$('.emoji-editor').on('paste', (e) => {

    // 考虑到以后会存在文件之类的出img之外的标签，
    // 所以只能在粘贴的时候先去掉标签然后插入到光标所在位置 

    // 将复制的图文混合中包含的图片直接去掉 
    let clipboardData = e.originalEvent.clipboardData;
    let data = clipboardData.getData('text/plain') || '';
    if (data) {
        console.log(data);
        // 插入文本 
        var eidtor = $('.emoji-editor').get(0);
        eidtor.focus()
        // 获取选定对象
        var selection = getSelection()
        // 判断是否有最后光标对象存在
        if (lastEditRange) {
            // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
            selection.removeAllRanges()
            selection.addRange(lastEditRange)
        }
        // 判断选定对象范围是编辑框还是文本节点
        if (selection.anchorNode.nodeName != '#text') {
            // 如果是编辑框范围。则创建表情文本节点进行插入
            var text = document.createTextNode(data)

            if (eidtor.childNodes.length > 0) {
                // 如果文本框的子元素大于0，则表示有其他元素，则按照位置插入表情节点
                for (var i = 0; i < eidtor.childNodes.length; i++) {
                    if (i == selection.anchorOffset) {
                        eidtor.insertBefore(text, edit.childNodes[i])
                    }
                }
            } else {
                // 否则直接插入一个表情元素
                eidtor.appendChild(text)
            }
            // 创建新的光标对象
            var range = document.createRange()
            // 光标对象的范围界定为新建的表情节点
            range.selectNodeContents(text)
            // 光标位置定位在表情节点的最大长度
            range.setStart(text, text.length)
            // 使光标开始和光标结束重叠
            range.collapse(true)
            // 清除选定对象的所有光标对象
            selection.removeAllRanges()
            // 插入新的光标对象
            selection.addRange(range)
        } else {
            // 如果是文本节点则先获取光标对象
            var range = selection.getRangeAt(0)
            // 获取光标对象的范围界定对象，一般就是textNode对象
            var textNode = range.startContainer;
            // 获取光标位置
            var rangeStartOffset = range.startOffset;
            // 文本节点在光标位置处插入新的表情内容
            textNode.insertData(rangeStartOffset, data)
            // 光标移动到到原来的位置加上新内容的长度
            range.setStart(textNode, rangeStartOffset + data.length)
            // 光标开始和光标结束重叠
            range.collapse(true)
            // 清除选定对象的所有光标对象
            selection.removeAllRanges()
            // 插入新的光标对象
            selection.addRange(range)
        }
        // 无论如何都要记录最后光标对象
        lastEditRange = selection.getRangeAt(0)

    }
    e.preventDefault();
    return false;
});