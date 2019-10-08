import mongoose from 'mongoose';

const stringSchema = new mongoose.Schema({
	value: {
		type: String,
		unique: false,
	},
});

const StringMPC = mongoose.model('string', stringSchema);

export default StringMPC;
