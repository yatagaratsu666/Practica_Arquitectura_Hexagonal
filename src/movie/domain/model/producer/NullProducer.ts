import Producer from "./Producer";
import Role from "./Role";

export default class NullProducer extends Producer{
    constructor(){
        super({
            names: "No Name", 
            surnames: "No Surname", 
            role: Role.Unknown
        })
        this.isNull = true;
    }

    override setNames = (_names: string): void => {
        throw new Error("Cannot set names on NullProducer");
    }

    override setSurnames = (_surnames: string): void => {
        throw new Error("Cannot set surnames on NullProducer");
    }

    override setRole = (_role: Role): void => {
        throw new Error("Cannot set role on NullProducer");
    }
}