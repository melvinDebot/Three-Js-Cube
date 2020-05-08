let scene = new TREE.Scene();
let camera = new TREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let renderer = new TREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//game logic
let update = function(){

};

//draw Scene
let render = function (){
  renderer.render(scene, camera)
};

// run game loop (update, render, reapeat)
let gameLoop = function() {
  requestAnimationFrame(gameLoop);
  update();
  render();
};

gameLoop();
