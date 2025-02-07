import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class SceneInit{
camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
scene = new THREE.Scene();
renderer:THREE.WebGLRenderer | undefined;
stats:Stats|undefined;
orbitControls:any;
constructor(canvas:HTMLCanvasElement){
this.InitScene(canvas);
}

InitScene(canvas:HTMLCanvasElement){
this.renderer = new THREE.WebGLRenderer({canvas,antialias:true});
this.renderer.setSize(Math.min(window.innerWidth*0.97,1200),Math.min(window.innerHeight*0.9,700))
this.camera.position.set(5,5,5);
this.stats = new Stats();
document.body.appendChild(this.stats.dom);
this.orbitControls = new OrbitControls(this.camera,this.renderer.domElement)
const axesHelper = new THREE.AxesHelper( 5 );
this.scene.add( axesHelper );
window.addEventListener('resize',()=>this.render());
}

animate(){
window.requestAnimationFrame(this.animate.bind(this));
this.render();
this.stats?.update()
this.orbitControls.update();
}

render(){
    this.renderer?.render(this.scene,this.camera);
}

resize(){
    this.camera.aspect = window.innerWidth/window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.render();
}

}