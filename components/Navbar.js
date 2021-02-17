import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    const { user, error, isLoading } = useUser();

    return (
        <header>
            <Link href="/">
                <h1>Home</h1>
            </Link>
            <nav className="space-x-3 m-x-auto mb-6 flex justify-center">
                <Link href="/snippets/html">HTML</Link>
                <Link href="/snippets/css">CSS</Link>
                <Link href="/snippets/javascript">JavaScript</Link>
                {!isLoading && !user && (
                    <Link href="/api/auth/login">Login</Link>
                )}
                {!isLoading && user && (
                    <Link href="/mySnippets">My Snippets</Link>
                )}
                {!isLoading && user && (
                    <Link href="/api/auth/logout">Logout</Link>
                )}
            </nav>
        </header>
    );
}
