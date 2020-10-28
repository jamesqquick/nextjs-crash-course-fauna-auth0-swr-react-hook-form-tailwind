import { getSnippets, getSnippetsByLanguage } from '../../utils/Fauna';
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405);
    }

    const { language } = req.query;
    try {
        if (language) {
            const snippets = await getSnippetsByLanguage(language);
            return res.status(200).json(snippets);
        }
        const snippets = await getSnippets();
        return res.status(200).json(snippets);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
