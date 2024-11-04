let category;
const plantEat=false// check with boolean values
const meatEat=false
const allEat=false
const notKnown=undefined;

console.log(plantEat? category='herbivores':meatEat? category='carnivores' : allEat? category='omnivore': notKnown);// Use ternary operator to evaluate the value of 'category

const tier = "nsfw deck";
let output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);// using the 'fall-through' of the switch statement for a purpose!