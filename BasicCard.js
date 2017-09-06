function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}



var colorGrass = new BasicCard(
    "What is the color of the grass?", "Green");


console.log(colorGrass.front); 


console.log(colorGrass.back); 


module.exports = BasicCard
