import React from 'react';
import Code from './code';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Snippet({ snippet }) {
    const router = useRouter();

    return (
        <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl text-gray-800 font-bold">
                    {snippet.data.name}
                </h2>
                <span className="font-bold text-xs text-red-800 px-2 py-1 rounded-lg ">
                    {snippet.data.language}
                </span>
            </div>
            <p className="text-gray-900 mb-4">{snippet.data.description}</p>
            <Code code={snippet.data.code} />
            <Link href={`/edit/${snippet.id}`}>
                <a className="text-gray-800 mr-2">Edit</a>
            </Link>
        </div>
    );
}
