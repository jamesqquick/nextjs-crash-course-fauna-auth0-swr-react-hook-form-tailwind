import Head from 'next/head';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useSWR from 'swr';
import Snippet from '../components/Snippet';
import Header from '../components/Header';

export default function MySnippets() {
    const { data: snippets } = useSWR('/api/mySnippets');

    return (
        <div>
            <Head>
                <title>My Code Snippets</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="my-12">
                <Header title="My Code Snippets" />
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
        </div>
    );
}

export const getServerSideProps = withPageAuthRequired();
