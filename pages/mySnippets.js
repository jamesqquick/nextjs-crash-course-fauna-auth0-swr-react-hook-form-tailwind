import Head from 'next/head';
import React from 'react';

export default function mySnippets() {
    const snippets = [];
    return (
        <div>
            <Head>
                <title>My Code Snippets</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="my-12">
                <h1 className="text-red-100 text-2xl mb-6">My Code Snippets</h1>
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

//TODO: Server props, require authentication
