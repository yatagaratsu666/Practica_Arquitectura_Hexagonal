import Character from "../character/Character";
import NullCharacter from "../character/NullCharacter";
import Director from "../director/Director";
import NullDirector from "../director/NullDirector";
import Image from "../image/Image";
import NullProducer from "../producer/NullProducer";
import Producer from "../producer/Producer";
import NullStudio from "../studio/NullStudio";
import Studio from "../studio/Studio";
import NullTrailer from "../trailer/NullTrailer";
import Trailer from "../trailer/Trailer";
import Clasification from "./Clasification";
import Genre from "./Genre";
import Movie from "./Movie";

export default class NullMovie extends Movie {
    isNull: boolean;

    constructor(){
        super({
            id: 'not-found',
            title: 'not-found',
            synopsis: 'not-found',
            reseale: new Date(),
            clasification: Clasification.uknown,
            genre: Genre.unknown,
            characters: [new NullCharacter()],
            director: new NullDirector(),
            producers: [new NullProducer()],
            studio: new NullStudio(),
            Images: [],
            trailer: new NullTrailer(),
        });
        this.isNull = true
    }

    override setTitle = (_title: string): void => {
        throw new Error("Cannot set title on NullMovie");
    }
    override setSynopsis = (_synopsis: string): void => {
        throw new Error("Cannot set synopsis on NullMovie");
    }

    override setReseale = (_reseale: Date): void => {
        throw new Error("Cannot set reseale on NullMovie");
    }

    override setClasification = (_clasification: Clasification): void => {
        throw new Error("Cannot set clasification on NullMovie");
    }

    override setGenre = (_genre: Genre): void => {
        throw new Error("Cannot set genre on NullMovie");
    }

    override setCharacters = (_characters: Character[]): void => {
        throw new Error("Cannot set characters on NullMovie");
    }

    override setDirector = (_director: Director): void => {
        throw new Error("Cannot set director on NullMovie");
    }

    override setProducers = (_producers: Producer[]): void => {
        throw new Error("Cannot set producers on NullMovie");
    }

    override setStudio = (_studio: Studio): void => {
        throw new Error("Cannot set studio on NullMovie");
    }

    override setImages = (_images: Image[]): void => {
        throw new Error("Cannot set images on NullMovie");
    }

    override setTrailer = (_trailer: Trailer): void => {
        throw new Error("Cannot set trailer on NullMovie");
    }
}

    