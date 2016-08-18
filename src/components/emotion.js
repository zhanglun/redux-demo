require('./emotion.less');
import twemoji from 'twemoji';
import data from './data';

let defaults = {
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
  onSelect: function () { // 当选中表情时触发
  },
  onMDBearSelect: function () { },
};

let emotionPanelHtml = require('./panel.html');

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
  let _tablist = '';
  let _contentlist = '';
  let _faceItems = '';

  this.$el.emotionPanel = $('<div></div>');
  this.$el.emotionPanel.attr('id', 'emotion_' + this.settings.uuid);
  this.$el.emotionPanel.addClass('emotion-panel');
  this.$el.emotionPanel.html(emotionPanelHtml);
  this.$el.emotionTablist = this.$el.emotionPanel.find('.emotion-tab');
  this.$el.emotionContentlist = this.$el.emotionPanel.find('.emotion-content');

  data.forEach((item, i) => {
    let active = i === this.settings.defaultTab ? 'active' : '';

    _tablist += '<span class="emotion-tabitem ' + active + '" data-tab-index="' + (i) + '"">' + item.name.split('|')[1] + '</span>';
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
  let _this = this;
  let $tabList = this.$el.emotionTablist;
  let $contentList = this.$el.emotionContentlist;

  // 切换tab
  $tabList.on('click', '.emotion-tabitem', function (event) {
    let $this = $(this);
    let targetIndex = $this.attr('data-tab-index');
    if (!$this.hasClass('active')) {
      _this.load(targetIndex);
      $this
        .siblings('.active')
        .removeClass('active');
      $this.addClass('active');

      $contentList.find('.emotion-contentitem')
        .removeClass('active')
        .eq(targetIndex)
        .addClass('active');
    }

  });

  // 选中表情
  $contentList.on('click', '.emotion-item', function (e) {

    let val = $(this).find('img').attr('alt');
    let target = _this.$target.get(0);
    target.focus();
    // 调用 insertImg 方法插入表情
    console.log(_getPointPosition(target));
    let currentPos = _getPointPosition(target);
    let oldVal = target.innerHTML;
    _insertimg(target, twemoji.parse(val));
    // target.innerHTML = oldVal.slice(0, currentPos) + twemoji.parse(val) + oldVal.slice(currentPos);
    console.log('after: %s', _getPointPosition(target));
    document.title = currentPos + twemoji.parse(val).length;
    // TODO: set eidtable caret Position;
    // if (target.setSelectionRange) {
    //   target.setSelectionRange(currentPos + val.length, currentPos + val.length);
    // } else {

    // }
  })
  _this.$target.get(0).focus();
  return false;
};

/**
 * 加载单个tab的表情
 * @param  {Numer} index 当前tab的索引
 */
Emotion.prototype.load = function (index) {
  // let _contentlist = '';
  let _faceItems = '';
  let active = index === this.settings.defaultTab ? 'active' : '';
  let $content = this.$el.emotionContentlist.find('.emotion-contentitem').eq(index);

  if ($content.data('load')) {
    console.log('loade');
    return;
  }

  data[index].content.forEach(function (face, i) {
    _faceItems += '<span class="emotion-item">' + twemoji.parse(face) + '</span>';
  });
  $content.html(_faceItems).data('load', true);
};

/**
 * 打开或者隐藏
 */
Emotion.prototype.openAndClose = function () {
  let $panel = this.$el.emotionPanel;
  if ($panel.hasClass('open')) {
    $panel
      .removeClass('open')
      .addClass('close');
  } else {
    $panel
      .removeClass('close')
      .addClass('open');
  }
}

// 绑定到jquery上

$.fn.emotion = function (options) {
  options = options || {};
  return this.each(function () {
    new Emotion(this, $.extend({}, {
      input: "#" + $(this).data("target")
    }, options));
  });
};

export default Emotion;



function _insertimg(container, elemstr) {
  var selection = window.getSelection ? window.getSelection() : document.selection;
  var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
  if (window.lastEditRange) {
    // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
    selection.removeAllRanges()
    selection.addRange(lastEditRange)
  }
  if (!window.getSelection) {
    container.focus();
    selection.getRangeAt(0);
    range.pasteHTML(elemstr);
    range.collapse(false);
    range.select();
  }
  else {
    container.focus();
    range.collapse(false);
    var hasR = range.createContextualFragment(elemstr);
    var hasR_lastChild = hasR.lastChild;
    while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() == "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() == "br") {
      var e = hasR_lastChild;
      hasR_lastChild = hasR_lastChild.previousSibling;
      hasR.removeChild(e)
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
      selection.removeAllRanges()
      // 插入新的光标对象
      selection.addRange(range)
    window.lastEditRange = selection.getRangeAt(0);

  }
  container.focus();
}
