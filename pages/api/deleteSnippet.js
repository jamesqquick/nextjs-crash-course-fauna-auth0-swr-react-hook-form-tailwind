import { deleteSnippet } from '../../utils/Fauna';
export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    console.log(req.body);
    console.log(req.body.id);
    const { id } = req.body;
    console.log(id);
    try {
        const deleted = await deleteSnippet(id);
        return res.status(200).json(deleted);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
