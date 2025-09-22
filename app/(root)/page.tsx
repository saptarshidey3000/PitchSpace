import React from 'react';

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


export default function Home() {
  return (
    <>
      {/* This main container sets up the primary background color and the vertical stripe pattern.
        The `-mt-6` class is added here to apply a negative margin, pulling the component up 
        to cover the white space left by the parent layout's padding.
      */}
      <main
        className="flex min-h-screen w-full justify-center bg-[#ee2b69] px-4 font-['Work_Sans'] -mt-6"
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
          <div className="relative mt-8 w-full max-w-2xl">
            <input
              type="text"
              placeholder="SEARCH STARTUP"
              className="w-full rounded-full border-[3px] border-black bg-white py-4 pl-6 pr-20 font-bold text-black placeholder:font-bold placeholder:text-black/70 focus:outline-none shadow-[4px_4px_0px_0px_#000]"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
