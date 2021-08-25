/**
 * 
 */
export interface IGame {
    genre: string;
    id: string;
    developer: string;
    release: string;
    subgenre: string;
    title: string;
    started: boolean;
    finished: boolean;
}

/**
 * 
 */
class Game implements IGame {

    public genre: string;
    public id: string;
    public developer: string;
    public release: string;
    public subgenre: string;
    public title: string;
    public started: boolean;
    public finished: boolean;

    constructor(genre, id, developer, release, subgenre, title, started, finished){
        this.genre = genre;
        this.id = id;
        this.developer = developer;
        this.release = release;
        this.subgenre = subgenre;
        this.title = title;
        this.started = started;
        this.finished = finished
    }
}

export default Game;