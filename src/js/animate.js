import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants.js";
import { Sprite } from "./Sprite.js";
import { generatePlatform } from "./platform.js";
import { collision } from "./collision.js";
import { score } from "./score.js";

const background = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "assets/img/jungle-bck@2x.png",
});

export function animate(ctx, player) {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	//background
	// ctx.save();
	// ctx.scale(4, 4);
	// ctx.translate(0,-background.image.height + CANVAS_HEIGHT);
	background.update(ctx);
	// ctx.restore();

	//move
	player.move(ctx);

	//generate platforms
	generatePlatform(ctx, player);

	//show score
	ctx.fillStyle = "black";
	ctx.font = "20px Arial";
	ctx.fillText(`Score: ${player.score}`, 20, 40);
	//score update
	score(player);

	requestAnimationFrame(() => animate(ctx, player));
}
