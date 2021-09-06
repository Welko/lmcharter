import * as THREE from "../node_modules/three/build/three.module.js";
import {Fretboard} from "./fretboard.js";

export class Stage {

    private readonly fretboard: Fretboard; // TODO make multiple possible

    public constructor() {
        this.fretboard = new Fretboard();
    }


}

export default Stage;