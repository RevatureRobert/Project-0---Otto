import { Router } from 'express';
import { getAllGames, getByGenreAndTitleGames, getByGenreGames, addOrUpdateGames, delGames } from './leylines'

const buildRoute = new Router();


/**
 * Break out the HTTP into individual Objects and Functions.
 * '/' is the entire collection.
 * '/genre' is to get games by the Genre of the game.
 * '/title' is an advanced search for specific titles per genre.
 * '/add' can add a game or update one.
 * '/delete' will remove a game from the table dependant on both genre and id.
 * Progress to 'leylines.ts'.
 */
buildRoute.get('/', getAllGames);
buildRoute.get('/:genre', getByGenreGames);
buildRoute.get('/:genre/:title', getByGenreAndTitleGames);
buildRoute.put('/add', addOrUpdateGames);
buildRoute.delete('/delete/:genre/:id', delGames);


/**
 * Using './games', this new Router object condenses the HTTP Requests into a single object.
 */
const totalRouter = Router();
totalRouter.use('/games', buildRoute);
export default totalRouter;