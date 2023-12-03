import { collision } from "./collision.js";
import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	INITIAL_Y_VELOCITY,
} from "./constants.js";
import { randomX } from "./util.js";

const platformArray = [];
const platformImg = new Image();
platformImg.src = "assets/img/platform.png";
const platformWidth = 60;
const platformHeight = 18;

let platform = {
	img: platformImg,
	x: CANVAS_WIDTH / 2,
	y: CANVAS_HEIGHT - 100,
	width: platformWidth,
	height: platformHeight,
};

platformArray.push(platform);

//add more platform
for (let i = 1; i < 7; i++) {
	let platform = {
		img: platformImg,
		x: randomX(),
		y: CANVAS_HEIGHT - i * 75 - 150,
		width: platformWidth,
		height: platformHeight,
	};
	platformArray.push(platform);
}

//for adding new platform
function generateNewPlatform() {
  let platform = {
    img: platformImg,
    x: randomX(),
    y: -platformHeight,
    width: platformWidth,
    height: platformHeight,
  };
  platformArray.push(platform);
}

export function generatePlatform(ctx, player) {
	for (let i = 0; i < platformArray.length; i++) {
		let platform = platformArray[i];

		//remove old platforms if doodler in 3/4 of canvas height
		if (player.velocity.y < 0 && player.position.y < (CANVAS_HEIGHT * 3/4)) {
			platform.y -= INITIAL_Y_VELOCITY;
		}
    
		//collision detection
		if (collision(player, platform) && player.velocity.y >= 0) {
      player.velocity.y = INITIAL_Y_VELOCITY;
			// console.log(collision(player, platform));
		}
    
		ctx.drawImage(
      platform.img,
			platform.x,
			platform.y,
			platform.width,
			platform.height
      );
    }

    //remove old platforms
    while(platformArray.length >0 && platformArray[0].y > CANVAS_HEIGHT){
      platformArray.shift();//removes first element from array
      generateNewPlatform();
    }
}
