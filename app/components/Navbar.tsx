import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
   <header className="fixed top-0 left-0 w-full bg-white shadow-sm px-5 py-3 z-50 font-work-sans">
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/pitchspacelogo.png" alt="logo" width={144} height={30}/>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
