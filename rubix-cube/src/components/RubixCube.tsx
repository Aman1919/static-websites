import * as THREE from "three";
import Cube from "./Cube";
import { Easing, Tween } from "@tweenjs/tween.js";

export default class RubixCube {
    size: number
    RubixCubeGroup = new THREE.Group()
    selectedCube: Cube | null = null;
    cubes: Cube[] = [];
    rotating = false
    constant = 0.1
    constructor(size = 3) {
        this.size = size;
        this.InitRubixCube();
    }

    InitRubixCube() {
        const n = this.size;
        const a = 0.5 * (1 - n);
        const b = 0.5 * (n - 0.5);
        for (let x = a; x < b; x++) {
            for (let y = a; y < b; y++) {
                for (let z = a; z < b; z++) {
                    const cube = new Cube(x, y, z);
                    this.cubes.push(cube)
                    this.RubixCubeGroup.add(cube.cube);
                }
            }
        }
    }

    highLightCube(cube: any) {
        this.cubes.forEach(c => {
            if (c.cubeMesh.uuid === cube.uuid) {
                this.selectedCube = c;
                c.uniform.opacity.value = 0.5;
            } else {
                c.uniform.opacity.value = 1.0;
            }
        })
    }

    cubeInXaxis(c: Cube, c1: any) {
     return   c.cube.position.x > c1.cube.position.x - this.constant &&
        c.cube.position.x < c1.cube.position.x + this.constant
    }
    cubeInYaxis(c: Cube, c1: any) {
  return      c.cube.position.y > c1.cube.position.y - this.constant &&
        c.cube.position.y < c1.cube.position.y + this.constant
    }
    cubeInZaxis(c: Cube, c1: any) {
     return   c.cube.position.z > c1.cube.position.z - this.constant &&
        c.cube.position.z < c1.cube.position.z + this.constant
    }

    RotateOnAxis(cube: Cube, axis: THREE.Vector3) {
        const start = { angle: 0 };
        const end = { angle: Math.PI / 2 };
        const prev = { angle: 0 };
        this.rotating = true
        const tween = new Tween(start).to(end, 500).easing(Easing.Quadratic.InOut)
            .onUpdate(({ angle }) => {
                cube.cube.position.applyAxisAngle(axis, angle - prev.angle)
                cube.cube.rotateOnWorldAxis(axis, angle - prev.angle);
                prev.angle = angle;

            })
            .start()
        tween.onComplete(() => this.rotating = false)
        function animate() {
            tween.update()
            requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }


    keyDown(key: string) {
        if (!this.selectedCube || this.rotating) return;
 if(key ==='w'){
    this.rotate(1, 0, 0);
 }else if(key==='s'){
    this.rotate(-1, 0, 0);
 }else if(key==='a'){
    this.rotate(0, 1, 0);
 }else if(key==='d'){
    this.rotate(0, -1, 0);
 }else if(key==='q'){
    this.rotate(0, 0, 1);
 }else if(key==='e'){
    this.rotate(0, 0, -1);
 }

    }

    rotate(x: number, y: number, z: number) {
        const axis = new THREE.Vector3(x, y, z);
        if (x !== 0) this.cubes.forEach(cube => {
            if (this.cubeInXaxis(cube, this.selectedCube)) {
                this.RotateOnAxis(cube, axis);
            }
        })
        if (y !== 0) this.cubes.forEach(cube => {
            if (this.cubeInYaxis(cube, this.selectedCube)) {
                this.RotateOnAxis(cube, axis);
            }
        })
        if (z !== 0) this.cubes.forEach(cube => {
            if (this.cubeInZaxis(cube, this.selectedCube)) {
                this.RotateOnAxis(cube, axis);
            }
        })
    }

    resetHightLight() {
        this.selectedCube = null;
        this.cubes.forEach(c => { c.uniform.opacity.value = 1.0 })
    }



}