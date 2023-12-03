const keys={
  a: false,
  // s: false,
  d: false,
  // w: false,
  space: false,
  arrowLeft: false,
  arrowRight: false,
}

window.addEventListener('keydown',(e)=>{
  switch(e.key){
    case 'a':
      keys.a=true;
      break;
    // case 's':
    //   keys.s=true;
    //   break;
    case 'd':
      keys.d=true;
      break;
    // case 'w':
    //   keys.w=true;
    //   break;
    case ' ':
      keys.space=true;
      break;
    case 'ArrowLeft':
      keys.arrowLeft=true;
      break;
    case 'ArrowRight':
      keys.arrowRight=true;
      break;
  }
});


window.addEventListener('keyup',(e)=>{
  switch(e.key){
    case 'a':
      keys.a=false;
      break;
    // case 's':
    //   keys.s=false;
    //   break;
    case 'd':
      keys.d=false;
      break;
    // case 'w':
    //   keys.w=false;
    //   break;
    case ' ':
      keys.space=false;
      break;
    case 'ArrowLeft':
      keys.arrowLeft=false;
      break;
    case 'ArrowRight':
      keys.arrowRight=false;
      break;
  }
});


export {keys};