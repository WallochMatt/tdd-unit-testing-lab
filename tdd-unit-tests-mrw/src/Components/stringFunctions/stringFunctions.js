


function capFistLetter(text){
    let newText = text.replace(`${text.charAt(0)}`, `${text.charAt(0).toUpperCase()}`)
    return newText
}

function concatStrings(text1, text2){
    let newText = `${text1}${text2}`
    return newText
}

function secondWord(text){
    let newArray = text.split(" ");
    return `${newArray[1]}`
}

export {capFistLetter, concatStrings, secondWord}