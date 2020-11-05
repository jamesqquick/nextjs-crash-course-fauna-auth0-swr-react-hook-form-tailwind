import { createSnippet } from '../../utils/Fauna';
export default async function handler(req, res) {
    const { code, language, description, name } = req.body;
    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }
    try {
        const createdSnippet = await createSnippet(
            code,
            language,
            description,
            name
        );
        return res.status(200).json(createdSnippet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
