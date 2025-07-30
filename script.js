//Solution by EntenUte
function overlap(word1, word2) {
    console.log("Word Overlapping challenge by the Coding Sloth");
  for (let i = 0; i <= word1.length; i++) {
    const suffix = word1.slice(i);      //gets a possible start for word2
    if (word2.startsWith(suffix)) {     //checks if it es the start
      return word1 + word2.slice(suffix.length);    //If it's the start, it combines the words.
    }
  }
  return word1 + word2;
}

console.log(overlap("sweden", "denmark")); // test
console.log(overlap("dodge", "dodge"));     //test2