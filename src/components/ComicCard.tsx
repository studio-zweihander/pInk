import React from 'react';
import Link from 'next/link';

type Comic = {
    id: number;
    title: string;
    year: number;
    cover: string;
    link: string;
};

export default function ComicCard({ comic }: { comic: Comic }) {
    return (
        <article className='w-64 border border-gray-200 rounded overflow-hidden shadow-sm bg-white'>
            <Link href={`/comic/${comic.id}`}>
                <a>
                    <div className='w-full h-40 bg-gray-100 overflow-hidden flex items-center justify-center'>
                        {comic.cover ? (
                            <img src={comic.cover} alt={comic.title} className='w-full h-full object-cover'/>
                        ) : (
                            <div className='text-gray-400'>Sem capa</div>
                        )}
                    </div>
                    <div className='p-3'>
                        <h3 className='font-semibold text-sm line-clamp-2'>{comic.title}</h3>
                        <div className='text-xs text-gray-500 mt-1'></div>
                    </div>
                </a>
            </Link>
        </article>
    )
}