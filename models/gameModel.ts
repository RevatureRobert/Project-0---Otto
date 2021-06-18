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


    constructor(genre, id, developer, release, subgenre, title){
        this.genre = genre;
        this.id = id;
        this.developer = developer;
        this.release = release;
        this.subgenre = subgenre;
        this.title = title;
    }
}

export default Game;