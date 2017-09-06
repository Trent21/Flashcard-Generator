function ClozeCard (text, cloze, fulltext) 
  { this.text = text;
  this.cloze = cloze;
  this.fulltext = text +" "+ cloze
}




var colorGrass = new ClozeCard("the color of grass is ", "green");
var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(colorGrass.text); 
console.log(colorGrass.cloze); 
console.log(colorGrass.fulltext); 





module.exports = ClozeCard;
