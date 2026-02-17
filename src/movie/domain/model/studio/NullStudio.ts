import Studio from "./Studio";

export default class NullStudio extends Studio {
    isNull: boolean;

    constructor(){
        super({
            id: 'not-found', 
            name: 'not found'
        });
        this.isNull = true
    }

    override setName = (_name: string): void => {
        throw new Error("Cannot set name on NullStudio");
    }

}