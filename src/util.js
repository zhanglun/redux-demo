export function insertTextToEditor(editor, text) {
  editor.focus();
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
    if(text.nodeType === 3){
      text = document.createTextNode(text);
    } else if(text.nodeType === 1) {
      text = text;
    }
    debugger;
    console.log(text);
    if (editor.childNodes.length > 0) {
      // 如果文本框的子元素大于0，则表示有其他元素，则按照位置插入表情节点
      for (var i = 0; i < editor.childNodes.length; i++) {
        if (i == selection.anchorOffset) {
          editor.insertBefore(text, editor.childNodes[i])
        }
      }
    } else {
      // 否则直接插入一个表情元素
      editor.appendChild(text)
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
    textNode.insertData(rangeStartOffset, text)
    // 光标移动到到原来的位置加上新内容的长度
    range.setStart(textNode, rangeStartOffset + text.length)
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

export function insertElemToEditor(editor, elemstr){

  var selection = window.getSelection ? window.getSelection() : document.selection;
  var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
  if (window.lastEditRange) {
    // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
    selection.removeAllRanges()
    selection.addRange(lastEditRange)
  }
  if (!window.getSelection) {
    editor.focus();
    selection.getRangeAt(0);
    range.pasteHTML(elemstr);
    range.collapse(false);
    range.select();
  }
  else {
    editor.focus();
    range.collapse(false);
    var hasR = range.createContextualFragment(elemstr);
    var hasR_lastChild = hasR.lastChild;
    while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() == "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() == "br") {
      var e = hasR_lastChild;
      hasR_lastChild = hasR_lastChild.previousSibling;
      hasR.removeChild(e)
    }
      range = selection.getRangeAt(0);
      range.insertNode(hasR);
      if (hasR_lastChild) {
        range.setEndAfter(hasR_lastChild);
        range.setStartAfter(hasR_lastChild);
      }
      // 清除选定对象的所有光标对象
      selection.removeAllRanges()
      // 插入新的光标对象
      selection.addRange(range)
    window.lastEditRange = selection.getRangeAt(0);

  }
  editor.focus();
}