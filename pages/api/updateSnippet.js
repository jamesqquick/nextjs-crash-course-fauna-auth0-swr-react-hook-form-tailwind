import { updateSnippet } from '../../utils/Fauna';
export default async function handler(req, res) {
    const { id, code, language } = req.body;
    if (req.method !== 'PUT') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }
    try {
        const updated = await updateSnippet(id, code, language);
        return res.status(200).json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
