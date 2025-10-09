import React from 'react';
import SearchForm from '../components/SearchForm';
import StartupCard ,{StartupTypeCard} from '../components/StartupCard';
import { client } from '@/sanity/lib/client';
import { STARTUP_QUERY } from '@/sanity/lib/queries';
 

// A simple SVG icon for the search button.
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

// const posts =[
//   {
//     _createdAt : new Date(),
//     _id :1,
//     views :66,
//     author :{_id:1 , name :'Aishi'},
//     decription : "its a description",
//     image:"https://i.pinimg.com/1200x/66/15/99/661599a355100a9aab8fe7c5e6823d40.jpg",
//     catagory :"ai",
//     title:"ai revelution"
//   } ,
// ];


export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {
  const query =(await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY)
  return (
    <>
      {/* This main container sets up the primary background color and the vertical stripe pattern.
        The `-mt-6` class is added here to apply a negative margin, pulling the component up 
        to cover the white space left by the parent layout's padding.
      */}
      <main
        className="flex h-[550px] w-full justify-center bg-[#ee2b69] px-4 font-['Work_Sans'] -mt-6"

        style={{
          backgroundImage: 'repeating-linear-gradient(to right, transparent 0 30px, rgba(0,0,0,0.05) 30px 32px)',
        }}
      >
        <div className="flex w-full flex-col items-center py-20">
          
          {/* Top Button: "PITCH, VOTE, AND GROW" */}
          <div className="mb-6">
            <span className="border-2 border-black bg-[#fbe843] px-5 py-2 font-extrabold text-black shadow-[2px_2px_0px_0px_#000]">
              PITCH, VOTE, AND GROW
            </span>
          </div>

          {/* Main Heading Block.
            This uses the styles defined in the `.heading` utility class.
            It is responsive with different text sizes for mobile and larger screens.
          */}
          <div className="my-5 bg-black px-6 py-3 text-center">
             <h1 className="max-w-5xl font-work-sans text-[36px] font-extrabold leading-[46px] text-white sm:text-[54px] sm:leading-[64px]">
                PITCH YOUR STARTUP,
                <br />
                CONNECT WITH ENTREPRENEURS
            </h1>
          </div>
         

          {/* Subtitle Text */}
          <p className="my-5 max-w-lg text-center text-lg text-white">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
          </p>

          {/* Search Bar UI.
            This container positions the input field and the search button.
            It features a thick border and an offset box-shadow for a chunky, tactile feel.
          */}
          <div className="relative mt-1 w-full max-w-2xl">
            {/* <input
              type="text"
              placeholder="SEARCH STARTUP"
              className="w-full rounded-full border-[3px] border-black bg-white py-4 pl-6 pr-20 font-bold text-black placeholder:font-bold placeholder:text-black/70 focus:outline-none shadow-[4px_4px_0px_0px_#000]"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80">
                <SearchIcon />
              </button>
            </div> */}
            <SearchForm query={query} />
          </div>
        </div>
      </main>
      <section className='px-6 py-10 max-w-7xl mx-auto'>
<p className="text-[30px] font-semibold">
  {query ? `search result for "${query}"` : 'All Startups'}
</p>

<ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
  {posts && posts.length > 0 ? (
    posts.map((post: StartupTypeCard, index: number) => (
     <StartupCard key={post._id} post={post} />

    ))
  ) : (
    <p>No Startup found</p>
  )}
</ul>

      </section>
    </>
  );
}
