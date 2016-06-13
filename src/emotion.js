import twemoji from 'twemoji';
import data from './data';

let defaults = {
  width: '200',
  height: '300',
  position: 'right',
  fadeTime: 100,
};
let emotionPanelHtml = require('./panel.html');

function Emotion(conf) {
  this.settings = Object.assign({}, defaults, conf);
  if (document.getElementById('emotion_' + conf.uuid)) {
    return;
  }
  this.$el = {};
  this.$el.container = this.settings.container;
  this.$el.triggerBtn = this.settings.triggerBtn;
  console.log('new Emotion');
  console.log(this.settings);
  this.init();
}

Emotion.prototype.init = function () {
  console.log('emoji keybroad init!');
  this.createPicker();
};


Emotion.prototype.createPicker = function(){
  this.$el.emotionPanel = document.createElement('div');
  this.$el.emotionPanel.id = 'emotion_' + this.settings.uuid;
  this.$el.emotionPanel.className = 'emotion-panel';
  this.$el.emotionPanel.innerHTML = emotionPanelHtml;
  this.$el.container.appendChild(this.$el.emotionPanel);
};

Emotion.prototype.open = function () {
  console.log('emotion open!');
  this.$el.emotionPanel.classList.add('open');
};

Emotion.prototype.close = function () {
  console.log('emotion close!');
  this.$el.emotionPanel.classList.remove('open');
};

export default Emotion;
