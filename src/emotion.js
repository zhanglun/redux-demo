import twemoji from 'twemoji';
import data from './data';
let defaults = {
  width: '200',
  height: '300',
  position: 'right',
  fadeTime: 100,
  input: '', // 要绑定的表单元素的选择器
  imgPath: "https://dn-mdpub.qbox.me/emotion/", // 表情图片的路径
  defaultTab: 1, // 默认显示哪一列表情
  mdBear: true, // 是否显示明道表情
  offset: 20, // 尖角的位置偏移
  history: true, // 是否显示历史表情
  historySize: 40,
  historyKey: "mdEmotion",
  relatedSpace: 0, // 与相对元素的位置
  placement: "top", // 表情面板显示的位置，有top、right、bottom、left
  onSelect: function () { // 当选中表情时触发
  },
  onMDBearSelect: function () {},
};

let emotionPanelHtml = require('./panel.html');
console.log($);

function Emotion(el, conf) {
  this.settings = $.extend({}, defaults, conf);
  // if (document.getElementById('emotion_' + conf.uuid)) {
  //   return;
  // }
  this.$el = {};
  // 出发的按钮
  this.$el.btn = $(el);
  // 面板的容器
  this.$el.container = $(el).parent();
  // 接收表情的容器
  this.$target = $(this.settings.input);

  this.init();
}

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

  console.log(data);

  data.forEach((item, i) => {
    let active = i === this.settings.defaultTab ? 'active' : '';

    _tablist += '<span class="emotion-tabitem ' + active + '" data-tab-index="' + (i) + '"">' + twemoji.parse(item.name) + '</span>';
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
  var $panel = this.$el.emotionPanel;
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
