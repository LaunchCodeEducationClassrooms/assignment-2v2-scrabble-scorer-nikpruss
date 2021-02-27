// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

 function scrabbleScorer(word){
  word = word.toLowerCase();
  let numericalScore = 0;

  for (let i=0; i<word.length; i++){
    numericalScore += newPointStructure[word[i]];
  }
  return numericalScore;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! \n");
   return input.question("Enter a word to score: ");
};

function simpleScorer(word){
  word = word.toUpperCase();
  let numericalScore = 0;

  for (let i = 0; i < word.length; i++) {
    numericalScore ++;
  }

  return numericalScore;
}

function vowelBonusScorer(word){
  word = word.toUpperCase();
  let numericalScore = 0;

  for (let i = 0; i < word.length; i++) {
    if(word[i] == "A" || word[i] == "E" || word[i] == "I" || word[i] == "O" || word[i] == "U" ){
      numericalScore += 3;
    }else {
      numericalScore ++;
    }
  }

  return numericalScore;
}
let simpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: function (word){
    word = word.toUpperCase();
    let numericalScore = 0;

    for (let i = 0; i < word.length; i++) {
     numericalScore ++;
    }

    return numericalScore;
  }
};
let vowelBonusScore = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: function (word){
    word = word.toUpperCase();
    let numericalScore = 0;

    for (let i = 0; i < word.length; i++) {
      if(word[i] == "A" || word[i] == "E" || word[i] == "I" || word[i] == "O" || word[i] == "U" ){
       numericalScore += 3;
      }else {
        numericalScore ++;
      }
    }
    return numericalScore;
  }
};
let scrabbleScore = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: function (word){
    word = word.toLowerCase();
	  let numericalScore = 0;

    for (let i=0; i<word.length; i++){
     numericalScore += Number(newPointStructure[word[i]]);    
    }
    return numericalScore;
  }
};

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt() {
  return scoringAlgorithms[ input.question ("Which scoring algorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ") ];
}

function transform(object) {
  let objectTransformed = {

  };
  for (item in object){
    for (i=0; i<object[item].length; i++){
      objectTransformed [object[item][i].toLowerCase()] = Number(item);
    }
  }
  return objectTransformed;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  let userInput = initialPrompt();
  console.log (scorerPrompt().scorerFunction(userInput));   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

