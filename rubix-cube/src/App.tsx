import './App.css';
import  { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import SceneInit from './components/SceneInit';
import RubixCube from './components/RubixCube';

function App() {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const [CubeSize,setCubeSize] = useState(3);
const [generate,setGenerate]=useState(true);
const [rubixCube,setRubixCube]=useState<RubixCube | null>(null)
 useEffect(()=>{
  if(!canvasRef.current||!generate)return;
const canvas = canvasRef.current;
const scene = new SceneInit(canvas);
const Rubix = new RubixCube(CubeSize);
scene.scene.add(Rubix.RubixCubeGroup);
scene.animate();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2()
setRubixCube(Rubix);
function mousedown(e:any){
  mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera(mouse,scene.camera);

  const intersects = raycaster.intersectObject(scene.scene).filter(obj=>{
    return obj.object.type === 'Mesh'
  });
  if(intersects.length>0){
    Rubix.highLightCube(intersects[0].object)
  }else{
    Rubix.resetHightLight();
  }

}

function keyDown(e:any){
  const key = e.key;
Rubix.keyDown(key);
}
window.addEventListener("keydown",keyDown)
canvas.addEventListener('mousedown',mousedown)
setGenerate(false);
 },[canvasRef,generate])

return (
  <div className='app'>
    <h1>N - Dimensions Rubix Cube</h1>
    <p>Note: 1. Select a Cube piece then press keys below to move the faces <br/>
    2. If Your are seeing only bright color it could be bcz cube has become big try zooming out.
    </p>
    <div className='flex'>

    <div className='form-container'>

     <input type="text" className='form-input' value={CubeSize} onChange={(e)=>{
      const value  = Number(e.target.value);
      if(!isNaN(value))setCubeSize(value);
     }} />
 
     <button className='form-button' onClick={()=>setGenerate(true)}>Generate</button>
    </div>
    <div className="gamepad">
    <div className="key w" onClick={()=>rubixCube?.keyDown("w")}>W</div>
    <div className="key a" onClick={()=>rubixCube?.keyDown("a")}>A</div>
    <div className="key s" onClick={()=>rubixCube?.keyDown("s")}>S</div>
    <div className="key d" onClick={()=>rubixCube?.keyDown("d")}>D</div>
    <div className="key q" onClick={()=>rubixCube?.keyDown("q")}>Q</div>
    <div className="key e" onClick={()=>rubixCube?.keyDown("e")}>E</div>
  </div>

    </div>

    <canvas ref={canvasRef}></canvas>
  </div>

);
}

export default App;