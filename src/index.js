import Emotion from './components/emotion';
import 'jquery';
import '../node_modules/jquery.caret/src/jquery.caret.js';
import '../node_modules/at.js/dist/js/jquery.atwho.js';
import '../node_modules/at.js/dist/css/jquery.atwho.css';
import * as util from './util';

let btn = document.querySelector('.emojiBtn');
let emojiContainer = btn.parentNode;
let uuid = Math.random().toString(36).substring(2);
let emotion = null;


$(function () {

    $(btn).emotion({
        input: $('#emoji-editor1'),
    });


    $('.emoji-editor').on('paste', (e) => {

        // 考虑到以后会存在文件之类的出img之外的标签，
        // 所以只能在粘贴的时候先去掉标签然后插入到光标所在位置 

        // 将复制的图文混合中包含的图片直接去掉 
        let clipboardData = e.originalEvent.clipboardData;
        let data = clipboardData ? clipboardData.getData('text/plain') : window.clipboardData.getData('Text');
        if (data) {
            // 插入文本 
            var eidtor = $('.emoji-editor').get(0);
            util.insertTextToEditor(editor, text);
        }
        e.preventDefault();
        return false;
    });


    initAt();

    $('.addFile').on('click', function (e) {
        var node = $('<div>');
        node.addClass = "message-thumbnail";
        node.append('<img  src="http://localhost:10001/modules/mdpublic/chat/resource/images/people200x200.png"/>');
        util.insertElemToEditor($('.emoji-editor').get(0), node.get(0).outerHTML);
    });

    $(document).on('keydown', '#emoji-editor', function (e) {
        // 获取选定对象
        var selection = getSelection();
        // 设置最后光标对象
        window.lastEditRange = selection.getRangeAt(0);
        if (e.keyCode == 13 && e.ctrlKey) {
            console.log('换行');
            document.execCommand('insertHTML', false, '\n<br />\n<br />');
        } else if (e.keyCode == 13 && !e.ctrlKey) {
            console.log('faxiaoxi ');
        }
    })
});

function initAt() {
    $.fn.atwho.debug = true
    var emojis = [
        "smile", "iphone", "girl", "smiley", "heart", "kiss", "copyright", "coffee",
        "a", "ab", "airplane", "alien", "ambulance", "angel", "anger", "angry",
        "arrow_forward", "arrow_left", "arrow_lower_left", "arrow_lower_right",
        "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right",
        "art", "astonished", "atm", "b", "baby", "baby_chick", "baby_symbol",
        "balloon", "bamboo", "bank", "barber", "baseball", "basketball", "bath",
        "bear", "beer", "beers", "beginner", "bell", "bento", "bike", "bikini",
        "bird", "birthday", "black_square", "blue_car", "blue_heart", "blush",
        "boar", "boat", "bomb", "book", "boot", "bouquet", "bow", "bowtie",
        "boy", "bread", "briefcase", "broken_heart", "bug", "bulb",
        "person_with_blond_hair", "phone", "pig", "pill", "pisces", "plus1",
        "point_down", "point_left", "point_right", "point_up", "point_up_2",
        "police_car", "poop", "post_office", "postbox", "pray", "princess",
        "punch", "purple_heart", "question", "rabbit", "racehorse", "radio",
        "up", "us", "v", "vhs", "vibration_mode", "virgo", "vs", "walking",
        "warning", "watermelon", "wave", "wc", "wedding", "whale", "wheelchair",
        "white_square", "wind_chime", "wink", "wink2", "wolf", "woman",
        "womans_hat", "womens", "x", "yellow_heart", "zap", "zzz", "+1",
        "-1"
    ]
    var jeremy = decodeURI("J%C3%A9r%C3%A9my") // Jérémy
    var names = ["Jacob", "Isabella", "Ethan", "Emma", "Michael", "Olivia", "Alexander", "Sophia", "William", "Ava", "Joshua", "Emily", "Daniel", "Madison", "Jayden", "Abigail", "Noah", "Chloe", "你好", "你你你", jeremy, "가"];

    var names = $.map(names, function (value, i) {
        return { 'id': i, 'name': value, 'email': value + "@email.com" };
    });
    var emojis = $.map(emojis, function (value, i) { return { key: value, name: value } });

    var at_config = {
        at: "@",
        data: names,
        headerTpl: '<div class="atwho-header">Member List<small>↑&nbsp;↓&nbsp;</small></div>',
        insertTpl: '${atwho-at}${name}',
        displayTpl: '<li data-mentionid="${name}">${name} <small>${email}</small></li>',
        limit: 200,
        startWithSpace: false,
        callbacks: {
            remoteFilter: function () {
                console.log(arguments);
            },
            beforeInsert: function (value, $item, e) {
                console.log($item);
                return value;
            },
        }
    }
    var emoji_config = {
        at: ":",
        data: emojis,
        displayTpl: "<li>${name} <img src='https://assets-cdn.github.com/images/icons/emoji/${key}.png'  height='20' width='20' /></li>",
        insertTpl: ':${key}:',
        delay: 400
    }
    emoji_config.insertTpl = "<img src='https://assets-cdn.github.com/images/icons/emoji/${name}.png'  height='20' width='20' />"
    var $inputer = $('.emoji-editor');
    $inputer.atwho(at_config).atwho(emoji_config);
    $inputer.on('inserted.atwho', function (e, elem) {
        window.mentionsInserted = 
        console.log(elem);
    });
    $inputer.on("matched.atwho", function (event, flag, query) {
        console.log(event, "matched " + flag + " and the result is " + query);
    });

    $('.emoji-editor1').on('blur', function () {
        console.log('emoji-editor1 blur');
    })

    $('.triggerbtn').on('click', function () {
        var $inputer = $('.emoji-editor');
        var value = $inputer.val();
        mentions = value.match(/@\S+/ig);
        metnions = mentions.map(function(item){
            // 去掉@
            return item.slice(1);
        });
    })
}
