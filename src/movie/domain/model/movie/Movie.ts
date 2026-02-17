import Character from "../character/Character";
import Director from "../director/Director";
import Image from "../image/Image";
import Producer from "../producer/Producer";
import Studio from "../studio/Studio";
import Trailer from "../trailer/Trailer";
import Clasification from "./Clasification";
import Genre from "./Genre";

export default class Movie {
    private id: string;
    private title: string;
    private synopsis: string;
    private reseale: Date;
    private clasification: Clasification;
    private genre: Genre;
    private characters: Character[];
    private director: Director;
    private producers: Producer[];
    private studio: Studio;
    private Images: Image[]
    private trailer: Trailer
    isNull: boolean;

    constructor(movie: MovieInterface){
        if(
            movie.producers.length === 0 || 
            movie.characters.length === 0 ||
            !movie.director ||
            !movie.studio
        ){
            throw new Error("Invalid");
        }
        this.id = movie.id;
        this.title = movie.title;
        this.synopsis = movie.synopsis;
        this.reseale = movie.reseale;
        this.clasification = movie.clasification;
        this.genre = movie.genre;
        this.characters = movie.characters;
        this.director = movie.director;
        this.producers = movie.producers;
        this.studio = movie.studio;
        this.Images = movie.Images;
        this.trailer = movie.trailer;
        this.isNull = false;
    }

    getId = (): string => this.id;
    getTitle = (): string => this.title;
    getSynopsis = (): string => this.synopsis;
    getReseale = (): Date => this.reseale;
    getClasification = (): Clasification => this.clasification;
    getGenre = (): Genre => this.genre;
    getCharacters = (): Character[] => this.characters;
    getDirector = (): Director => this.director;
    getProducers = (): Producer[] => this.producers;
    getStudio = (): Studio => this.studio;
    getImages = (): Image[] => this.Images;
    getTrailer = (): Trailer => this.trailer;

    setTitle = (title: string): void => {
        this.title = title;
    }

    setSynopsis = (synopsis: string): void => {
        this.synopsis = synopsis;
    }

    setReseale = (reseale: Date): void => {
        this.reseale = reseale;
    }

    setClasification = (clasification: Clasification): void => {
        this.clasification = clasification;
    }

    setGenre = (genre: Genre): void => {
        this.genre = genre;
    }

    setCharacters = (characters: Character[]): void => {
        this.characters = characters;
    }

    setDirector = (director: Director): void => {
        this.director = director;
    }

    setProducers = (producers: Producer[]): void => {
        this.producers = producers;
    }

    setStudio = (studio: Studio): void => {
        this.studio = studio;
    }

    setImages = (images: Image[]): void => {
        this.Images = images;
    }

    setTrailer = (trailer: Trailer): void => {
        this.trailer = trailer;
    }

}

export interface MovieInterface {
    id: string;
    title: string;
    synopsis: string;
    reseale: Date;
    clasification: Clasification;
    genre: Genre;
    characters: Character[];
    director: Director;
    producers: Producer[];
    studio: Studio;
    Images: Image[]
    trailer: Trailer
}