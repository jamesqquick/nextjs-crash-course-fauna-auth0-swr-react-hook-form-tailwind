import Head from 'next/head';
import Snippet from '../components/Snippet';
import useSWR from 'swr';
import Header from '../components/Header';
export default function Home() {
    const { data: snippets, mutate } = useSWR('/api/snippets');
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <Header
                    title="Errday Code Snippets"
                    subtitle="Start sharing snippets today!"
                />
                {snippets &&
                    snippets.map((snippet) => (
                        <Snippet key={snippet.id} snippet={snippet} />
                    ))}
            </main>
        </div>
    );
}
