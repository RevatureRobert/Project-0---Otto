import * as express from 'express';
import totalRouter from './routes/vortex';
const app = express();

/**
 * './api' to declare the api version of my site, then proceeds to the Routes folder.
 */
app.use(express.json())
app.use('/api', totalRouter);


/**
 * Listen declares the port 4000.
 */
app.listen(4000, () => {
    console.log('Listening on port 4000...')
})