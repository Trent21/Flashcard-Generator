function ClozeCard (text, cloze, fulltext) 
  { this.text = text;
  this.cloze = cloze;
  this.fulltext = text +" "+ cloze
}




var colorGrass = new ClozeCard("the color of grass is ", "green");
var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(grass.text); 
console.log(grass.cloze); 
console.log(grass.fulltext); 





module.exports = ClozeCard;