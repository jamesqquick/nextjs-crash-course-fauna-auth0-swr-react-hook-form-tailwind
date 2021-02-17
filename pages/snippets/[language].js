import Head from 'next/head';
import { getSnippetsByLanguage } from '../../utils/Fauna';
import Snippet from '../../components/Snippet';
import { useRouter } from 'next/router';

export default function SnippetsByLanguage({ language, snippets }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Code Snippets for "{language}" </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="my-12">
                <h1 className="text-red-100 text-2xl mb-6">
                    Code Snippets for "{language}"
                </h1>
                {snippets &&
                    snippets.length > 0 &&
                    snippets.map((snippet) => (
                        <Snippet key={snippet.id} snippet={snippet} />
                    ))}
                {!snippets ||
                    (snippets.length === 0 && (
                        <p className="text-red-200">
                            There are no snippets yet
                        </p>
                    ))}
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const { language } = context.params;
    console.log(language);
    const snippets = await getSnippetsByLanguage(language.toLowerCase());
    return {
        props: { language: language, snippets }, // will be passed to the page component as props
    };
}
