const motivationWords = [
    "inspiration",
    "determination",
    "goal",
    "success",
    "ambition",
    "perseverance",
    "drive",
    "passion",
    "focus",
    "commitment",
    "enthusiasm",
    "resilience",
    "courage",
    "mindset",
    "achievement"
];

const motivationAdverbs = [
    "enthusiastically",
    "determinedly",
    "consistently",
    "positively",
    "courageously",
    "resiliently",
    "passionately",
    "fervently",
    "actively",
    "steadfastly",
    "focusedly",
    "relentlessly",
    "successfully",
    "purposefully",
    "diligently"
];
//fonction pour les phrases
const sentences = (wordArr, adverbArr) => {
    let randomIndex = Math.floor(Math.random()*16);
    let randomWord = wordArr[randomIndex];
    let randomAdverb = adverbArr[randomIndex];
    if (randomIndex >= 0 && randomIndex < 4) {
        return `Your ${randomWord} very ${randomAdverb} alows you to be proud of you!`
    } else if (randomIndex >= 5 && randomIndex < 8) {
        return `You must ${randomAdverb} feel your ${randomWord}`
    } else if (randomIndex >= 9 && randomIndex < 12) {
        return `You must earn some ${randomWord} to ${randomAdverb} succeed in your life`
    } else {
        return `Well, at least your ${randomWord} ${randomAdverb} suits you...`
    }
};

let sentence = sentences(motivationWords, motivationAdverbs);
console.log(sentence)