import Trailer from "./Trailer";

export default class NullTrailer extends Trailer{
    isNull: boolean;

    constructor(){
        super({
            id: 'not-found',
            source: 'not-found'
        });
        this.isNull = true
    }

    override setSource = (_source: string): void => {
        throw new Error("Cannot set source on NullTrailer");
    }
}