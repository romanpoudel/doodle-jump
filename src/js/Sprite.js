export class Sprite {
	constructor({ position, imageSrc }) {
		this.position = position;
		this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;
    }
		this.image.src = imageSrc;
	}
  draw(ctx) {
    if(!this.image) return;
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  update(ctx){
    this.draw(ctx);
  }
}
