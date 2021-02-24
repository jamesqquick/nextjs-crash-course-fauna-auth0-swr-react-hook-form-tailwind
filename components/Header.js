import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link';

export default function Header({ title, subtitle = '' }) {
    const { user, isLoading } = useUser();

    return (
        <header className="my-12">
            <h1 className="text-red-100 text-2xl">{title}</h1>
            <p className="text-red-200">
                Create and browse snippets you use every day in Web Development!
            </p>
            {!isLoading && user && (
                <Link href="/new">
                    <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create a Snippet!
                    </a>
                </Link>
            )}
            {!isLoading && !user && (
                <Link href="/api/auth/login">
                    <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login to Create Snippets!
                    </a>
                </Link>
            )}
        </header>
    );
}
