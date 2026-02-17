import Image from "./Image";

export default class NullImage extends Image {
    isNull: boolean;

    constructor(){
        super({
            id: 'not-found',
            thumbnails: 'not-found',
            source: 'not-found'
        });
        this.isNull = true
    }

    setThumbnails = (_thumbnails: string): void => {
        throw new Error("Cannot set thumbnails on NullImage");
    }

    setSource = (_source: string): void => {
        throw new Error("Cannot set source on NullImage");
    }
}