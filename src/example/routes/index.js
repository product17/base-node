import express from 'express';
import presenters from '../presenters';

const app = express();
const router = express.Router();

router.use('/hello-world', presenters.hello);

app.use(router);

export default app;
