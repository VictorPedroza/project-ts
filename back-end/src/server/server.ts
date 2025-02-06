import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

import { router } from '../routes/routes';

app.use(router);

export { app }
