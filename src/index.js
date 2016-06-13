require('./emotion.less');
import Emotion from './emotion';

let btn = document.querySelector('.emojiBtn');
let emojiContainer = btn.parentNode;
let uuid = Math.random().toString(36).substring(2);
let emotion = null;

emojiContainer.dataset.tag = uuid;
console.log(emojiContainer);

emojiContainer.addEventListener('mouseover', function(){
  if(!this.dataset.emoji){
    emotion = new Emotion({triggerBtn: btn, uuid: uuid, container: this});
    this.dataset.emoji = true;
  }
}, false);

emojiContainer.addEventListener('click', function(){
  emotion.open();
}, false);
