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

var editor = new MediumEditor('.emoji-editor', {
    disableReturn: true,
    disableDoubleReturn: true,
    disableExtraSpaces: true,
    disableEditing: true,
    toolbar: false,
    anchor: {
        placeholderText: 'Type a link',
        customClassOption: 'btn',
        customClassOptionText: 'Create Button'
    },
    paste: {
        cleanAttrs: ['class', 'style', 'dir'],
        cleanTags: ['label', 'meta', 'img']
    },
    anchorPreview: {
        hideDelay: 300
    },
    placeholder: {
        text: 'Click to edit'
    }
});

editor.subscribe('editableKeydown', function (e, elem) {
    if ((event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)
        && event.keyCode === 13) {
        // 换行处理
        // 阻断原处理流程
        event.preventDefault();
        util.insertElemToEditor($('.emoji-editor').get(0), '<br />');
        util.insertElemToEditor($('.emoji-editor').get(0), '<br />');
    }
});

// $('.emoji-editor').on('paste', (e) => {

//     // 考虑到以后会存在文件之类的出img之外的标签，
//     // 所以只能在粘贴的时候先去掉标签然后插入到光标所在位置 

//     // 将复制的图文混合中包含的图片直接去掉 
//     let clipboardData = e.originalEvent.clipboardData;
//     let data = clipboardData ? clipboardData.getData('text/plain') : window.clipboardData.getData('Text');
//     if (data) {
//         // 插入文本 
//         var eidtor = $('.emoji-editor').get(0);
//         util.insertTextToEditor(editor, text);
//     }
//     e.preventDefault();
//     return false;
// });

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
        insertTpl: '<span>${atwho-at}${name}</span>',
        displayTpl: "<li>${name} <small>${email}</small></li>",
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

    $('.emoji-editor').atwho(at_config).atwho(emoji_config);
    $('.emoji-editor').on('inserted.atwho', function (e) {
        $(this).find('.atwho-inserted span').first().unwrap();
    });
}


$(function () {

    initAt();

    $(document).on('keydown', '.emoji-editor', function (e) {
        // 获取选定对象
        var selection = getSelection();
        // 设置最后光标对象
        window.lastEditRange = selection.getRangeAt(0);
        if (e.keyCode == 13 && e.ctrlKey) {
            console.log('换行');
        } else if (e.keyCode == 13 && !e.ctrlKey) {
            console.log('faxiaoxi ');
        }
    }).on('click', (e) => {
        // 获取选定对象
        var selection = getSelection();
        // 设置最后光标对象
        window.lastEditRange = selection.getRangeAt(0);
    })

});

