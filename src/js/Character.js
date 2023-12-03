import { CANVAS_HEIGHT, CANVAS_WIDTH, GRAVITY, SPEED } from "./constants.js";
import { keys } from "./input.js";
import { generatePlatform } from "./platform.js";
import { Sprite } from "./Sprite.js";

export class Character extends Sprite {
	constructor(position, imageSrc) {
		super({ imageSrc });
		this.position = position;
		this.velocity = {
			x: 0,
			y: 1,
		};
		this.score = 0;
		this.maxScore = 0;
		this.gameOver = false;
	}
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
		} 

		//player goes outside the platform then game over
		if (this.position.y >= CANVAS_HEIGHT) {
			this.gameOver = true;
		}

		//keyboard input
		if (keys.a || keys.arrowLeft) {
			this.position.x -= SPEED;
		} else if (keys.d || keys.arrowRight) {
			this.position.x += SPEED;
		}else if (keys.space && this.gameOver) {
			//restart the game
			this.score = 0;
			this.maxScore=0;
			this.position  = {
				x: CANVAS_WIDTH / 2,
				y: CANVAS_HEIGHT - 150,
			};
			this.gameOver = false;
			generatePlatform(ctx, this);
			console.log("restart")
		} else if (keys.space) {
			this.velocity.y = -SPEED;
		} 
	}
}
