const keys={
  a: false,
  // s: false,
  d: false,
  // w: false,
  space: false,
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
  }
});


export {keys};