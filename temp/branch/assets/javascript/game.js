const dictionary = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', '', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie', 'schwiffty'];

//array contains id names of divs to display key word letters
const keyIdNames = ['key0', 'key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8', 'key9'];

//hidden word for user to guess
let keyWord;

//quantity of letters remaining that have not been guessed by user
let keyLettersRemaining;

//an array of letters in keyWord that have not been guessed by user
let keyWordLetters;

//key pressed by user
let userGuess;

//quantity of guesses remaining before lose
let guessRemaining;

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
  console.log('newKeyWord() has completed');
};

//run when letter NOT contined in keyWord is guessed
const decGuessRemaining = () => {
  wrongGuesses.forEach(function(letter, index) {
        document.getElementById(`wrong${index}`).innerHTML = letter.toUpperCase();
    }
  );
  guessRemaining--;
  console.log(guessRemaining);
  if (guessRemaining <= 0) {
    gameLose();
  };
  console.log('decGuessRemaining() has completed')
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
  console.log('correctGuess() has completed');
};

const clearLetterIds = () => {
  document.addEventListener("DOMContentLoaded", function() {
    for (i = 0; i < 10; i++) {
      document.getElementById(keyIdNames[i]).innerHTML = '';
    };
  });

};



const gameReset = () => {
  clearLetterIds();
  keyWord = newKeyWord();
  guessRemaining = guessQty;
  wrongGuesses = [];
  console.log('gameReset() has complted');
};

const gameLose = () => {
  loseCount++;
  console.log(`loseCount: ${loseCount}`);
  gameReset();
  console.log('gameLose() has completed');
};

const gameWin = () => {
  winCount++;
  console.log(`winCount: ${winCount}`);
  gameReset();
  console.log('gameWin() has completed')
};

//checks if userGuess is part of keyWord
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

const debugMode = () => {
  console.log("***************");
  console.log("keyWord: " + keyWord);
  console.log("keyLettersRemaining: " + keyLettersRemaining);
  console.log("keyWordLetters: " + keyWordLetters);
  console.log("userGuess: " + userGuess);
  console.log("guessRemaining: " + guessRemaining);
  console.log("wrongGuesses: " + wrongGuesses);
  console.log("loseCount: " + loseCount);
  console.log("winCount: " + winCount);
  console.log('***************');
}



//---------------------------------------
// Game Start!

console.log("You're playing Hangman!");
gameReset();


//listen for key input
document.onkeypress = function(event) {

  checkInKeyWord;
  userGuess = event.key.toLowerCase();
  console.log(`userGuess: ${userGuess}`);
  checkInKeyWord();
  console.log('-------------');

  ////comment in below for debugMode in console
  debugMode();

};
