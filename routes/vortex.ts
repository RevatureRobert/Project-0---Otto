import { Router } from 'express';
import { getAllGames, getByGenreAndTitleGames, getByGenreGames, addOrUpdateGames, delGames } from './leylines'

const buildRoute = new Router();


/**
 * 
 */
buildRoute.get('/', getAllGames);
buildRoute.get('/:genre', getByGenreGames);
buildRoute.get('/:genre/:title', getByGenreAndTitleGames);
buildRoute.put('/add', addOrUpdateGames);
buildRoute.delete('/delete/:genre/:id', delGames);


/**
 * 
 */
const totalRouter = Router();
totalRouter.use('/games', buildRoute);
export default totalRouter;