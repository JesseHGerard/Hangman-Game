const dictionary = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', '', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie', 'schwiffty'];


//hidden word for user to guess
let keyWord;

//quantity of letters remaining that have not been guessed by user
let keyLettersRemaining;

//an array of letters in keyWord that have not been guessed by user
let keyWordLetters;

//key pressed by user
let userGuess;

//quantity of guesses remaining before lose
let guessRemaining = 8;

//an array of letters incorrectly guessed by user
let wrongGuesses = [];

//count of games lost by user
let loseCount = 0;

//count of games won by user
let winCount = 0;

//sets quantity of letter guesses before lose
const guessQty = 8;

//sets quantity of key ids
const keySlots = 10;

//picks new keyWord at random
const newKeyWord = () => {
  let tempWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  keyLettersRemaining = tempWord.length;
  keyWordLetters = tempWord.split('');
  return tempWord;
};

//run when letter NOT contined in keyWord is guessed
const decGuessRemaining = () => {
  guessRemaining--;
  wrongGuesses.forEach(function(letter, index) {
    document.getElementById(`wrong${index}`).innerHTML = letter.toUpperCase();
  });
  if (guessRemaining <= 0) {
    gameLose();
  };
};

//run when letter contined in keyWord is guessed
const correctGuess = () => {
  keyWordLetters.forEach(function(letter, index) {
      if(letter === userGuess) {
        keyWordLetters[index] = null;
        keyLettersRemaining--;
        document.getElementById(`key${index}`).innerHTML = letter.toUpperCase();
      };
    }
  );
  if (keyLettersRemaining <= 0) {
    gameWin();
  };
};

//clears innerHTML of keys
const clearKeyIds = () => {
  for (let i = keySlots-1; i >= 0; i--) {
    document.getElementById(`key${i}`).innerHTML = '';
  };
};

const clearWrongIds = () => {
  for (let j = 7; j>= 0; j--) {
    document.getElementById(`wrong${j}`).innerHTML = '';
  };
};

const hideEmptyKey = () => {
  for (let i = keySlots-1; i >= 0; i--) {
    document.getElementById(`key${i}`).setAttribute("class", "display-none");
  };
  for (let i = keyWord.length-1; i >= 0; i--) {
    document.getElementById(`key${i}`).setAttribute("class", "key-container");
  };
};

const gameReset = () => {
  setTimeout(function(){
    clearKeyIds();
    clearWrongIds();
    keyWord = newKeyWord();
    console.log(`KeyWord: ${keyWord}`);
    guessRemaining = guessQty;
    wrongGuesses = [];
    hideEmptyKey();
  }, 1000);

};

const gameLose = () => {
  loseCount++;
  document.getElementById('losses').innerHTML = `Losses ${loseCount}`;
  console.log(`loseCount: ${loseCount}`);
  gameReset();
};

const gameWin = () => {
  winCount++;
  document.getElementById('wins').innerHTML = `Wins ${winCount}`;
  console.log(`winCount: ${winCount}`);
  gameReset();
};


const checkInKeyWord = () => {
  if (keyWord.includes(userGuess)) {
    //userGuess DOES contain a valid letter
    console.log(`${userGuess} is part of keyWord`);
    correctGuess();
  } else {
    if (keyWord.includes(userGuess) === false) {
      //userGuess does not contain a valid letter
      console.log(`${userGuess} is NOT part of keyWord`);
      wrongGuesses.push(userGuess);
      console.log(`wrongGuesses: ${wrongGuesses}`)
      decGuessRemaining();
    };
  };
};


//---------------------------------------
// Game Start!

console.log("You're playing Hangman!");
guessRemaining = guessQty;
keyWord = newKeyWord();
document.addEventListener("DOMContentLoaded", function() {
  hideEmptyKey();
});

console.log(`keyWord: ${keyWord}`);

//listen for key input
document.onkeypress = function(event) {

  checkInKeyWord;
  userGuess = event.key.toLowerCase();
  console.log(`userGuess: ${userGuess}`);
  checkInKeyWord();
  console.log('-------------');


};
