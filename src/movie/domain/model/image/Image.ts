export default class Image {
    private readonly id: string;
    private thumbnails: string
    private source: string
    isNull: boolean

    constructor(image: ImageInterface) {
        this.id = image.id;
        this.thumbnails = image.thumbnails;
        this.source = image.source;
        this.isNull = false
    }

    getId = (): string => this.id;

    getThumbnails = (): string => this.thumbnails;

    getSource = (): string => this.source;

    setThumbnails = (thumbnails: string): void => {
        this.thumbnails = thumbnails;
    }

    setSource = (source: string): void => {
        this.source = source;
    }
}

export interface ImageInterface {
    id: string
    thumbnails: string
    source: string
}