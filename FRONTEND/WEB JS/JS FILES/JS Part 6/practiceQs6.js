let str = ["hi", "hello", "bye", "tata", "!"];
function conCat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result = str[i] + result
    }

    return result;
}