
let greg 
let art
let unseen 
let clrs

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
  clrs = [
    color(211, 211, 211),  // Light Gray
    color(0, 128, 128),    // Deep Teal
    color(51, 51, 51)      // Charcoal Gray
  ]
  
  background(clrs[0]);//background(255,215,0)
  greg = new Vehicle(width/2,height/2,clrs[2],3) //color(0,128,128)
  art = new Vehicle(random(width),random(height),clrs[1],5) //color(0)
  unseen = createVector(random(width),random(height))
  rectMode(CENTER)
  

}

function draw() {
  background(clrs[0])
  if (frameCount%300 ==0) unseen = createVector(random(width),random(height))
  // put drawing code here
  let seekArt = p5.Vector.sub(art.pos,greg.pos)
  let seekMyst = p5.Vector.sub(unseen,art.pos)
  let seekGreg = p5.Vector.sub(greg.pos,art.pos)
  seekGreg.setMag(0.1);
  seekArt.setMag(0.1)
  seekMyst.setMag(0.1)
  greg.applyForce(seekArt)
  art.applyForce(seekMyst)
  greg.update()
  art.update()
  greg.edges()
  art.edges()
  greg.show()
  art.show()

}



/*
for (let i = 0; i <gregs.length;i++){
  let mousepos = createVector(mouseX,mouseY);
  let seek = p5.Vector.sub(mousepos,gregs[i].pos);
  seek.setMag(0.1);
  gregs[i].applyForce(seek);
  gregs[i].update();
  gregs[i].edges();
  gregs[i].show();
  }

  */
