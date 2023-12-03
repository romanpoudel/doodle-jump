import { Character } from "./Character.js";
import { animate } from "./animate.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants.js";

const canvas = document.getElementById("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext("2d");
const initialPosition = {
  x: canvas.width / 2,
  y: canvas.height - 150,
};

const player = new Character(initialPosition,"assets/img/lik-puca.png");

animate(ctx, player);

//repaint canvas on resize
// window.addEventListener('resize',()=>{
//   canvas.width=window.innerWidth;
//   canvas.height=window.innerHeight;
//   animate(ctx,player);
// });
