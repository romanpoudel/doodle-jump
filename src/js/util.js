import { CANVAS_WIDTH, POINT } from "./constants.js";

export function randomX() {
    return Math.floor(Math.random() * (CANVAS_WIDTH*3/4));
}

/**
 * 
 * @returns {number} random points
 */
export function points(){
    return Math.floor(Math.random()*POINT);
}