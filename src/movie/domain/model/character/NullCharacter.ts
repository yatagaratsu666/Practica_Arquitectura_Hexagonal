import Category from "./Category";
import Character from "./Character";

export default class NullCharacter extends Character {
    constructor(){
        super({
            names: "Unknown", 
            surnames: "Unknown", 
            category: Category.Unknown
        })
        this.isNull = true
    }

    override setNames = (_names: string): void => {
        throw new Error("Cannot set names on NullDirector");
    }

    override setSurnames = (_surnames: string): void => {
        throw new Error("Cannot set surnames on NullDirector");
    }
    
    override setCategory = (_category: Category): void => {
        throw new Error("Cannot set reputation on NullDirector");
    }
}