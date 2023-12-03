import { points } from "./util.js";

export function score(player) {
	if (player.velocity.y < 0) {
		player.maxScore += points();
		if (player.maxScore > player.score) {
			player.score = player.maxScore;
		}
	} else if (player.velocity.y >= 0) {
		player.maxScore -= points();
	}
}
