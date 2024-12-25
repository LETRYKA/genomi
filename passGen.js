import generateName from "./nameGenerator.js";
import birthGenerator from "./birthGenerator.js"
import generateloc from "./locationGen.js"

let a = {
    "Ө": "O", "ө": "o",
    "Ү": "U", "ү": "u",
    "Ё": "YO", "ё": "yo",
    "Й": "I", "й": "i",
    "Ц": "TS", "ц": "ts",
    "У": "U", "у": "u",
    "К": "K", "к": "k",
    "Э": "E", "э": "e",
    "Г": "G", "г": "g",
    "Ш": "SH", "ш": "sh",
    "З": "Z", "з": "z",
    "Х": "KH", "х": "kh",
    "Ч": "CH", "ч": "ch",
    "С": "S", "с": "s",
    "М": "M", "м": "m",
    "И": "I", "и": "i",
    "Т": "T", "т": "t",
    "Ь": "I", "ь": "i",
    "Б": "B", "б": "b",
    "Ю": "Y", "ю": "y",
    "Я": "Y", "я": "y",
    "А": "A", "а": "a",
    "Д": "D", "д": "d",
    "Ж": "J", "ж": "j",
    "Л": "L", "л": "l",
    "П": "P", "п": "p",
    "Р": "R", "р": "r",
    "С": "S", "с": "s",
    "В": "V", "в": "v",
    "Н": "N", "н": "n",
    "Ф": "F", "ф": "f"
};

function transliterate(word) {
    return word.split('').map(function (char) {
        return a[char] || char;
    }).join("");
}

console.log(transliterate(generateName()))