import * as THREE from "../node_modules/three/build/three.module.js";

export abstract class Object {
    public abstract render(r: THREE.WebGLRenderer, c: THREE.PerspectiveCamera | THREE.OrthographicCamera): void;
}