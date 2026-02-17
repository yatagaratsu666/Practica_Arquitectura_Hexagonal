export default class Studio {
    private id: string;
    private name: string;

    constructor(studio: StudioInterface) {
        this.id = studio.id;
        this.name = studio.name;
    }

    getId = (): string => this.id;

    getName = (): string => this.name;

    setName = (name: string): void => {
        this.name = name;
    }
}

export interface StudioInterface {
    id: string;
    name: string;
}