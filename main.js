let letterSearch = ["non", "asal", "banan", "olma", "aziza", "gul", "mashina"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let word of letterSearch) {

    if (word.toLowerCase().includes('n')) {


        wordsWithN.push(word);
    } else {

        wordsWithoutN.push(word);
    }
}


console.log("N harfi bilan yoziladigan sozlar:", wordsWithN);
console.log("N harfi bilan yozilmaydigan sozlar", wordsWithoutN);
