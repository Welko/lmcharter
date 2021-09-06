import * as THREE from "../node_modules/three/build/three.module.js";
import uiApp from "./ui/app.js";

const app = new uiApp();
document.body.appendChild(app.dom);

const renderer = new THREE.WebGLRenderer();
const container = app.containerDomElement;
container.appendChild(renderer.domElement);

const width = container.clientWidth;
const height = container.clientHeight;
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

const resize = function() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
};

window.addEventListener("resize", resize);
resize();