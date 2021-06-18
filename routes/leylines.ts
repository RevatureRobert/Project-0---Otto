import GameDao from '../Dao/Build';
import { IGame } from '../models/gameModel';
import { Request, Response } from 'express';


const gameDao = new GameDao();


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllGames(req: Request, res: Response) {
    const users = await gameDao.getAll();
    return res.status(200).json({users});
}


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getByGenreGames(req: Request, res: Response) {
    const { genre } = req.params;
    const users = await gameDao.getByGenre(genre);
    return res.status(200).json({users});
}


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getByGenreAndTitleGames(req: Request, res: Response) {
    const { genre, title } = req.params;
    const users = await gameDao.getById(genre, title);
    return res.status(200).json({users});
}


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOrUpdateGames(req: Request, res: Response) {
    //const { game } = req.body;
    console.log(req.body);
    const users = await gameDao.addOrUpdate(req.body);
    return res.status(200).json({users});
}


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function delGames(req: Request, res: Response) {
    const users = await gameDao.delById(req.params);
    return res.status(200).json({users});
}

