const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const getSnippets = async () => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('snippets'))),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    return data;
};

const getSnippetsByLanguage = async (language) => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Match(q.Index('snippets_by_language'), language)),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    return data;
};

const createSnippet = async (code, language) => {
    return await faunaClient.query(
        q.Create(q.Collection('snippets'), { data: { code, language } })
    );
};

const updateSnippet = async (id, code, language) => {
    return await faunaClient.query(
        q.Update(q.Ref(q.Collection('snippets'), id), {
            data: { code, language },
        })
    );
};

const deleteSnippet = async (id) => {
    return await faunaClient.query(
        q.Delete(q.Ref(q.Collection('snippets'), id))
    );
};

module.exports = {
    createSnippet,
    getSnippets,
    getSnippetsByLanguage,
    updateSnippet,
    deleteSnippet,
};
