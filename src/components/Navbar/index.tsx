"use client";

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
    <nav className="flex items-center justify-between flex-wrap bg-transparent z-10 p-6 fixed w-full">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <span className="text-xl">Betty Norling</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 hover:text-stone-600 hover:border-white">
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <Link href="/work" className="block mt-4 lg:inline-block lg:mt-0 hover:text-stone-500 text-md mr-4">
            Work
          </Link>
        </div>
        <div className="text-sm lg:ml-auto">
          <Link href="/contact" className="block mt-4 text-md lg:inline-block lg:mt-0 hover:text-stone-500 mr-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
    </header>
  );
}
