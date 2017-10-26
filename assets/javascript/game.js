const dictionary = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', '', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie', 'schwiffty'];

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let keyWord;

let keyLettersRemaining;

let keyWordLetters;

let userGuess;

const newKeyWord = () => {
  let tempWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  keyLettersRemaining = tempWord.length;
  keyWordLetters = tempWord.split('');
  return tempWord;
};

let guessRemaining = 8;

let wrongGuesses = [];

let loseCount;

let winCount;

const decGuessRemaining = () => {
  guessRemaining--;
  console.log(guessRemaining);
  if (guessRemaining <= 0) {
    gameLose();
  };
};

const correctGuess = () => {
  keyWordLetters.forEach(function(letter) {
      if(letter === userGuess) {
        keyLettersRemaining--;
      };
    }
  );
  if (keyLettersRemaining <= 0) {
    gameWin();
  };
};

const gameReset = () => {
  keyWord = newKeyWord();
  console.log(`KeyWord: ${keyWord}`);
  guessRemaining = 8;
  wrongGuesses = [];
};

const gameLose = () => {
  gameReset();
  loseCount++;
  console.log(`loseCount: ${loseCount}`);
};

const gameWin = () => {
  gameReset();
  winCount++;
  console.log(`winCount: ${winCount}`);
};

const checkInKeyWord = () => {
  if (keyWord.includes(userGuess)) {
    //userGuess DOES contain a valid letter
    correctGuess();
    console.log(`${userGuess} is part of keyWord`);
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
keyWord = newKeyWord();
console.log(`keyWord: ${keyWord}`);

//listen for key input
document.onkeyup = function(event) {

  checkInKeyWord;
  userGuess = event.key;
  console.log(`userGuess: ${userGuess}`);
  checkInKeyWord();
  console.log('-------------');


};
