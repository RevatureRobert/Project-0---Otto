import * as express from 'express';
import totalRouter from './routes/vortex';
const app = express();

/**
 * 
 */
app.use(express.json())
app.use('/api', totalRouter);


/**
 * 
 */
app.listen(4000, () => {
    console.log('Listening on port 4000...')
})