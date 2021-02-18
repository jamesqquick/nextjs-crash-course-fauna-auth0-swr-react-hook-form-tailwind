import Head from 'next/head';
import { getSnippetsByLanguage } from '../../utils/Fauna';
import Snippet from '../../components/Snippet';
import Header from '../../components/Header';

export default function SnippetsByLanguage({ language, snippets }) {
    return (
        <>
            <Head>
                <title>Code Snippets for "{language}" </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="my-12">
                <Header title={`${language.toUpperCase()} Snippets`} />

                {snippets &&
                    snippets.length > 0 &&
                    snippets.map((snippet) => (
                        <Snippet key={snippet.id} snippet={snippet} />
                    ))}
                {!snippets ||
                    (snippets.length === 0 && (
                        <p className="text-red-200">
                            There are no {language} snippets yet 🙁
                        </p>
                    ))}
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const { language } = context.params;
    const snippets = await getSnippetsByLanguage(language.toLowerCase());
    return {
        props: { language, snippets },
    };
}
