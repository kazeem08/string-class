String.prototype.hasVowels = function () {
    return /[aeiou]/i.test(this) ? true : false;
}

String.prototype.toUpper = function () {
    let regex = /[a-z]/;
    let charValue2 = 0;
    let output = '';
    for (let element of this) {
        let charValue = element.charCodeAt(0);
        if (regex.test(element)) {
            charValue2 = charValue - 32;
            output += String.fromCharCode(charValue2);
        }
        else {
            output += element;
        }
    }

    return output;
}

String.prototype.toLower = function () {
    let regex = /[A-Z]/;
        let charValue2 = 0;
            let output = '';
        for(let element of this){
            let charValue = element.charCodeAt(0);
            if(regex.test(element)){
                charValue2 = charValue + 32;
                output += String.fromCharCode(charValue2);
            }
            else{
                output += element;
            }
        }
    
        return output;
}

String.prototype.ucFirst = function () {
    let output = '';
    for (let i = 0; i < this.length; i++) {
        (i === 0) ? output += this[i].toUpper() : output += this[i];
    }
    return output;
}

String.prototype.isQuestion = function () {
    let regex = /[?]$/;
    return (regex.test(this)) ? true : false;
}

String.prototype.words = function () {
    //Code here
}

String.prototype.wordCount = function () {
    //Code here
}

String.prototype.inverseCase = function () {
    //Code here
}

String.prototype.alternatingCase = function () {
    //Code here
}

String.prototype.numberWords = function () {
    //Code here
}

module.exports = String;