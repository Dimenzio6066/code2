"use strict";
var linterTest;
(function (linterTest) {
    let KEY;
    (function (KEY) {
        KEY[KEY["Pos"] = 1] = "Pos";
        KEY[KEY["neg"] = -1] = "neg";
    })(KEY || (KEY = {}));
    const info = { text: "G`udetmvhsgBncd1 ", key: KEY.Pos };
    console.log(deCrypt(info.text, info.key));
    function deCrypt(text, _key) {
        let result = "";
        for (let i = 0; i < text.length; i++)
            result += String.fromCharCode(text.charCodeAt(i) + _key);
        return result;
    }
})(linterTest || (linterTest = {}));
