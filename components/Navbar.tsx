'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Navbar: React.FC = () => {

  return (
    <nav className="bg-slate-800 p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-white font-light text-xl"><Link href={'/'}>my application</Link></h1>
        </div>
        <div>
          <button
            className={`text-slate-800 px-4 py-2 rounded-md bg-green-400 flex items-center`}
            data-client-only="true"
          >
            <AiOutlinePlus className="mr-2" />
            <Link href={'/addtopic'}>
                Add topic
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
