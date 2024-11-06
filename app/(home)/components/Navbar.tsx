"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();


  return (
    <div className='md:p-24 p-14 flex items-center justify-between'>
      <button className='cursor-pointer transition-all duration-300 -rotate-3'>
        <h1 className='text-2xl font-bold relative inline-block'>
          <span className='relative z-10 bg-primary '>ameny.online</span>
        </h1>
      </button>

      <div className='flex justify-end'>
        {theme === 'light' ? (
          <button
            className='p-2 hover:text-primary transition-all duration-400'
            onClick={() => setTheme('dark')}
          >
            <Moon size={35} />
          </button>
        ) : (
          <button
            className='p-2 hover:text-primary transition-all duration-400'
            onClick={() => setTheme('light')}
          >
            <Sun size={35} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
