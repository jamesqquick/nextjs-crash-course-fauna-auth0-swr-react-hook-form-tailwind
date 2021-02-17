import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <nav className="space-x-3 m-x-auto">
            <Link href="/">Home</Link>
            <Link href="/snippets/html">HTML</Link>
            <Link href="/snippets/css">CSS</Link>
            <Link href="/snippets/javascript">JavaScript</Link>
        </nav>
    );
}
