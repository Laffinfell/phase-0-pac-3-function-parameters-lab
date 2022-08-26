function introduction(name) {
    return `Hi, my name is ${name}.`;
}
introduction("Aki")

function introductionWithLanguage(value1, value2) {
    return `Hi, my name is ${value1} and I am learning to program in ${value2}.`;
}
introductionWithLanguage1(Aki)
introductionWithLanguage2(Ember.js)

function introductionWithLanguageOptional(value1 = "User", value2 = "JavaScript") {
    return `Hi, my name is ${value1} and I am learning to program in ${value2}.`;
}
introductionWithLanguageOptional1("Gracie")
introductionWithLanguageOptional2()