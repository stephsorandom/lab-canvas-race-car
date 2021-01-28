let canvas = document.querySelector("canvas")

canvas.width = 500
canvas.height = 700

let ctx = canvas.getContext("2d")

//ITERATION 1
let roadImg = new Image()
roadImg.src = "./images/road.png"
// let road = {x:0, y:0, w:450, h:600, img:roadImg}
// roadImg.onload = function() {
//   ctx.drawImage(roadImg, 0, 0, 450, 600)
// }

//ITERATION 2 
let carImg = new Image()
carImg.src = "./images/car.png"
// carImg.onload = function() {
//   ford.draw()
// }


//ITERATION 3

//creating this class is a blue print
//gives paramaters to blueprint 
class Car {
  constructor() {
    this.x = 250
    this.y = 500
    this.w = 90
    this.h = 140
    this.img = carImg
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  //this goes with CONTROL KEYS and tells blueprint how far to move in each direction when key is pressed on.
    moveUp() {
      this.y -= 30
    }
    moveDown() {
      this.y += 30
    }
    moveLeft() {
      this.x = -30
    }
    moveRight() {
      this.x += 30
    }
}

//creating a new car, takes the blueprint from ^^ and prints that new car
let ford = new Car()
ford.draw()

class Obsticle {
  constructor (x, y, w, h, color){
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.color = color
}
 draw() {
   ctx.fillstyle = this.color
   ctx.fillRect(this.x, this.y, this.w, this.h)
 }
}
let box = new Obsticle(50, 50, 30, 60, "orange")
box.draw()







//redraws canvas on every animation pixel
let interval = null
function animate() {
  interval = requestAnimationFrame(animate)
  //Flipping to a new page <-> clearing the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)


//lets it know every move the car makes, to redraw the screen
  ctx.drawImage(roadImg, 0, 0, 450, 600)
  //calls function to draw
  ford.draw()
  box.draw()
}
animate()




// CONTROL KEYS 
//onkeydown function : lets computer know when keys are pushed down, to move in that direction
window.onkeydown = function(e) {
  switch(e.key) {
    case "ArrowLeft":
      ford.moveLeft()
     break;
    case "ArrowRight":
      ford.moveRight()
     break;
    case "ArrowUp":
      ford.moveUp()
     break;
    case "ArrowDown":
      ford.moveDown()
     break;
  }
}


//ITERATION 4
















































// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };
