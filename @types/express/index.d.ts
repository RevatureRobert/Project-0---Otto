import { IGame } from "../../models/gameModel";

declare module 'express' {
    export interface Request  {
        body: {
            game?: IGame
        };
    }
}
