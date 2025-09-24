import React from 'react'
import Form from 'next/form'
import SearchformReset from './SearchformReset';
const SearchIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const SearchForm = () => {
  const query = "Test"
  return (
    <Form action="/" scroll={false} 
    placeholder="SEARCH STARTUP"
    className='w-full rounded-full border-[3px] border-black bg-white py-4 pl-6 pr-20 font-bold text-black placeholder:font-bold placeholder:text-black/70 focus:outline-none shadow-[4px_4px_0px_0px_#000]'>
      <input
      name='query'
      defaultValue={query}

      placeholder="SEARCH STARTUP"
      />
      <div className='absolute inset-y-0 right-2 flex items-center'>
            {query && <SearchformReset/> }
            <button 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80">
                <SearchIcon />
            </button>
      </div>
    </Form>
  )
}

export default SearchForm