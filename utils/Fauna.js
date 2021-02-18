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
    const snippets = data.map((snippet) => {
        snippet.id = snippet.ref.id;
        delete snippet.ref;
        return snippet;
    });

    return snippets;
};

const getSnippetById = async (id) => {
    const snippet = await faunaClient.query(
        q.Get(q.Ref(q.Collection('snippets'), id))
    );
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet;
};

const getSnippetsByUser = async (userId) => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Match(q.Index('snippets_by_user'), userId)),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    const snippets = data.map((snippet) => {
        snippet.id = snippet.ref.id;
        delete snippet.ref;
        return snippet;
    });

    return snippets;
};

const getSnippetsByLanguage = async (language) => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Match(q.Index('snippets_by_language'), language)),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    const snippets = data.map((snippet) => {
        snippet.id = snippet.ref.id;
        delete snippet.ref;
        return snippet;
    });

    return snippets;
};

const createSnippet = async (code, language, description, name, userId) => {
    return await faunaClient.query(
        q.Create(q.Collection('snippets'), {
            data: { code, language, description, name, userId },
        })
    );
};

const updateSnippet = async (id, code, language, name, description, userId) => {
    return await faunaClient.query(
        q.Update(q.Ref(q.Collection('snippets'), id), {
            data: { code, language, name, description, userId },
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
    getSnippetById,
    getSnippetsByUser,
    updateSnippet,
    deleteSnippet,
    getSnippetsByLanguage,
};
