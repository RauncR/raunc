/*
Gamelet - a starting point for creating games
This is a multiline comment
Remember the syntax - actually same comment syntax to Java
*/
const ball = document.getElementById("ball"); //get the ball
document.addEventListener("keydown", handleKeyPress); //listen for keys
let position = 0; //set initial position

/*
handleKeyPress
responds to certain key presses by updating position
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position -= 30;
  }
  if (e.code === "ArrowRight") {
    position += 50;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  //Update the ball's position
  ball.style.left = position + "px";
}
