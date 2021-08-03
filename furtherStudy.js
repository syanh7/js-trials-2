"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  console.log(words1Set)
  const words2Set = new Set(words2);
  console.log(words2Set)

  const results = new Set();

  for (const word of words1Set) {
    if(words2Set.has(word)){
      results.add(word);
    }
  }

  return Array.from(results);

}


function kidsGame(names) {
  // Replace this with your code
}
