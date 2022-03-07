function introduction(name) {
    return `Hi, my name is ${name}.`
}
introduction("Aki");
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Aki","Ember.js");
function introductionWithLanguageOptional(name, language) {
    if(!language) {
        return  `Hi, my name is ${name} and I am learning to program in JavaScript.`;
    } else {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
}
introductionWithLanguageOptional("Gracie","JavaScript");