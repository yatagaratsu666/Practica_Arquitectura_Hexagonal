export default class Trailer{
    private id: string;
    private source: string;

    constructor(trailer: TrailerInterface) {
        this.id = trailer.id;
        this.source = trailer.source;
    }

    getId = (): string => this.id;

    getSource = (): string => this.source;

    setSource = (source: string): void => {
        this.source = source;
    }
}

export interface TrailerInterface {
    id: string
    source: string
}