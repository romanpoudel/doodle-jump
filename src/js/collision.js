/**
 *
 * @param {object} a
 * @param {object} b
 * @returns boolean
 */
export function collision(doodler, platform) {
	if (
    doodler.position.x < platform.x + platform.width &&
    doodler.position.x + doodler.width > platform.x &&
    doodler.position.y < platform.y + platform.height &&
    doodler.position.y + doodler.height > platform.y
	) {
		return true;
	}else{
    return false;
  }
}
