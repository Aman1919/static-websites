import * as THREE from "three"


export default class Cube{
cube= new THREE.Group();
cubeMesh:any;
uniform = {
    opacity:{
        value:1.0
    }
}
    constructor(x:number,y:number,z:number){
    this.InitCube(x,y,z);
    }

    InitCube(x:number,y:number,z:number){
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
                const material = new THREE.ShaderMaterial({
                    uniforms:this.uniform,
                   transparent:true,
                    vertexShader:vertexShaders,
                    fragmentShader:fragmentShaders
                });
                const cube = new THREE.Mesh( geometry, material );
                this.cubeMesh = cube;
                this.cube.add(cube);
                const Edges = new THREE.EdgesGeometry(geometry);
                const line = new THREE.LineSegments(Edges,new THREE.LineBasicMaterial({color:"black",linewidth: 5}))
                this.cube.add(line);
                this.cube.position.set(x,y,z);
            }

}


const vertexShaders = `
varying vec3 pos;
uniform float opacity;
void main(){
pos = position;
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
const fragmentShaders = `
varying vec3 pos;
uniform float opacity;
void main(){
vec4 red = vec4(0.8, 0.2, 0.2, opacity);        
vec4 green = vec4(0.2, 0.8, 0.2, opacity);      
vec4 blue = vec4(0.2, 0.2, 0.8, opacity);       
vec4 yellow = vec4(0.9, 0.9, 0.5, opacity);    
vec4 orange = vec4(0.9, 0.5, 0.2, opacity);    
vec4 white = vec4(0.8, 0.8, 0.8, opacity);      
vec4 black = vec4(0.1, 0.1, 0.1, opacity);      


          float scale = .499;

bool front = pos.x > scale;
bool top = pos.y > scale;
bool right = pos.z > scale;
bool left = pos.z < -scale;
bool bottom = pos.y< -scale;
bool back = pos.x< -scale;

  if (front) {
              gl_FragColor = red;
          } else if (back) {
              gl_FragColor = orange;
          } else if (top) {
              gl_FragColor = white;
          } else if (bottom) {
              gl_FragColor = yellow;
          } else if (right) {
              gl_FragColor = blue;
           } else if (left) {
              gl_FragColor = green;
          } else {
              gl_FragColor = black;
          }

}
`