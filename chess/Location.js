import { File } from "./defs.js";

const keys = Object.keys(File);
console.log(keys);
class Location {
    #file;
    #rank;
    #name;
    constructor(file, rank) {
        this.#name = "" + keys[file] + rank;
        this.#file = file;
        this.#rank = rank;
    }
    getFile() {
        return this.#file;
    }
    getRank() {
        return this.#rank;
    }
    getName() {
        return this.#name
    }
    equals(Obj) {
        if (this === Obj) return true;
        return false;
    }
}

class LocationFactory {

}

export { Location, LocationFactory };
