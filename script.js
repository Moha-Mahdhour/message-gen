// an objet that contains all the message elements.
const messageElements = {
  firstWord: ["you are", "he is", "she is"],
  secondWord: ["a strong", "a fat", "a crazy", "a tall", "a anxious", "a big"],
  lastWord: ["gay", "genius", "driver", "dude", "homo"],
};

const randomMessage = (obj) => {
  //choosing random words from each property in the objects
  let word1 = obj.firstWord[Math.floor(Math.random() * obj.firstWord.length)];
  let word2 = obj.secondWord[Math.floor(Math.random() * obj.secondWord.length)];
  let word3 = obj.lastWord[Math.floor(Math.random() * obj.lastWord.length)];
  //linking everything to be in a sentence.
  console.log("Knock-Knock");
  console.log(`${word1} ${word2} ${word3}`);
};

randomMessage(messageElements);
