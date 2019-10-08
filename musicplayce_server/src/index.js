import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(async (req, res, next) => {
	req.context = {
		models,
	};
	next();
});

app.use('/string', routes.string);


connectDb().then(async () => {
	console.log("Conectou");
	app.listen(process.env.PORT, () => {
		console.log(`Listening on port ${process.env.PORT}`);
	});
});

