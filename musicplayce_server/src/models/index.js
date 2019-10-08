import mongoose from 'mongoose';

import StringMPC from './stringMPC';

const connectDb = () => {
	return mongoose.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true
	});
};

const models = { StringMPC };

export {connectDb};
export default models;
