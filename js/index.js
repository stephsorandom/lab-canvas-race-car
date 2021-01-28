let canvas = document.querySelector("canvas")


canvas.width = 500
canvas.height = 700

let ctx = canvas.getContext("2d")

let roadImg = new Image()
roadImg.src = "./images/road.png"
// let road = {x:0, y:0, w:450, h:600, img:roadImg}
// roadImg.onload = function() {
//   ctx.drawImage(roadImg, 0, 0, 450, 600)
// }

let carImg = new Image()
carImg.src = "./images/car.png"
// carImg.onload = function() {
//   ford.draw()
// }

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

let ford = new Car()
ford.draw()




let interval = null
function animate() {
  interval = requestAnimationFrame(animate)
  //Flipping to a new page <-> clearing the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)



  ctx.drawImage(roadImg, 0, 0, 450, 600)
  ford.draw()

}
animate()



// CONTROL KEYS 
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
















































// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };
