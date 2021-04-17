import {makeAutoObservable} from "mobx";
import {ChangeEvent} from "react";

class State {
    name = ""
    surname = ""

    constructor() {
        makeAutoObservable(this)
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this[e.currentTarget.name as "name" | "surname"] = e.currentTarget.value
    }
}

export default new State()