export default abstract class Person {
    protected names: string;
    protected surnames: string;

    constructor(names: string, surname: string) {
        this.names = names;
        this.surnames = surname;
    }

    getNames(): string {
        return this.names
    }

    setNames(names: string): void {
        this.names = names
    }        

    getSurname(): string {
        return this.surnames
    }

        setSurnames(surnames: string): void {
        this.surnames = surnames
    }   

}