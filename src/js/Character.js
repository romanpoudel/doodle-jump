import { CANVAS_HEIGHT, CANVAS_WIDTH, GRAVITY, SPEED } from "./constants.js";
import { keys } from "./input.js";
import { Sprite } from "./Sprite.js";

export class Character extends Sprite {
	constructor(position,imageSrc) {
		super({imageSrc})
		this.position = position;
		// this.x = x;
		// this.y = y;
		this.velocity = {
			x: 0,
			y: 1,
		};
		// this.width = width;
		// this.height = height;
		// this.color = "#49c";
		this.score = 0;
		this.maxScore = 0;
	}
	// draw(ctx) {
	// 	// ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
	// 	// ctx.fillStyle = "white";
	// 	// ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	// 	ctx.fillStyle = this.color;
	// 	ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	// }

	/**
	 *
	 * @param {object} player
	 */
	move(ctx) {
		this.draw(ctx);
		this.position.y += this.velocity.y;
		this.position.x += this.velocity.x;
		//stoping doodle from going outside from sides
		if (this.position.x < 0) {
			this.position.x = 0;
		} else if (this.position.x + this.width > CANVAS_WIDTH) {
			this.position.x = CANVAS_WIDTH - this.width;
		}
		/*this condition does not stop the player from falling in the next frame ,
		in next frame the player will fall again but it sets velocity to 0 so the third frame the player will not fall.*/
		if (this.position.y + this.height + this.velocity.y < CANVAS_HEIGHT) {
			this.velocity.y += GRAVITY;
		} else {
			this.velocity.y = 0;
		}
		//keyboard input
		if (keys.a) {
			this.position.x -= SPEED;
		} else if (keys.d) {
			this.position.x += SPEED;
		}
		// else if (keys.w) {
		// 	this.velocity.y = -1;
		// } else if (keys.s) {
		// 	this.velocity.y = +1;
		// }
		else if (keys.space) {
			this.velocity.y = -SPEED;
		}
	}
}
