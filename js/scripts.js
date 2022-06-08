

let vowelFlag = true;
const vowel = ["a"]
vowel.forEach(function(element) {
  if (element === "a") {
    vowel.concat("way");
    
    vowelFlag = true;

  };
  console.log("found!!")

});
vowelFlag;

let consonantFlag = true;
const consonant = ["b"]
consonant.forEach(function(element) {
  if (element === "b") {
    consonantFlag = true;
  };
  console.log("found!!")

});
consonantFlag;

function pigLatin(text) {
  let newArray = [];
  let vowels = ["a", "e", "i", "o", "u"]
  console.log(vowels);
  const textArray = text.split("");
  for (i = 0; i <= 0; i++) {
    if (vowels.includes(textArray[i])) {
      newArray.push(textArray + "way");
    } else {
        newArray.push(textArray);      
    }
  }
  newArray.join();
  return newArray.toString().replace(/,/g, '');
}
pigLatin("vakay");

function pigLatin(text) {
  let newArray = [];
  let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
  console.log(consonants);
  const textArray = text.split("");
  for (i = 0; i <= 0; i++) {
    if (consonants.includes(textArray[i])) {
      newArray.push(textArray + "ay");
    } else {
        newArray.push(textArray);      
    }
  }
  newArray.join();
  return newArray.toString().replace(/,/g, '');
}
pigLatin("vakay");