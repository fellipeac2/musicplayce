import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	const string = await req.context.models.StringMPC.find();
	return res.send(string);
});

router.get('/:stringId', async (req, res) => {
	const string = await req.context.models.StringMPC.findById(
		req.params.stringId,
	);
	return res.send(string);
});

router.post('/', async (req, res) => {
	const string = await req.context.models.StringMPC.create({
		value: req.body.text,
	});

	return res.send(string);
});

router.delete('/:stringId', async (req, res) => {
	const string = await req.context.models.StringMPC.findById(
		req.params.stringId,
	);
	let result = null;
	if(string) {
		result = await string.remove();
	}
	return res.send(result);
});

router.put('/:stringId', async (req, res) => {
		const string = await req.context.models.StringMPC.findByIdAndUpdate(req.params.stringId, {
		value: req.body.text
	});
	return res.send(string);
});

export default router;
