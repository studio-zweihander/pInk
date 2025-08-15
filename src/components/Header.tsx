import React from 'react';

type Props = {
    query: string;
    setQuery: (q: string) => void;
};

export default function Header({ query, setQuery }: Props) {
    return (
        <header className='w-full h-16 bg-dark borcer-b border-gray-200 flex items-center px-4'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <span className='text-lg font-semibold'>pInk</span>
                </div>
                <div className='ml-4'>
                    <label htmlFor="search" className='sr-only'>Pesquisar comics</label>
                    <input 
                        id='search'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Buscar quadrinhos...'
                        className='w-80 px-3 py-2 rounded border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300' 
                    />
                </div>
            </div>
        </header>
    );
}