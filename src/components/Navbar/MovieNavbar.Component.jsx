import React, { useContext } from 'react'
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi'
import { MovieContext } from '../../context/Movie.context';


const NavSmall = () => {
  const {movie} = useContext(MovieContext);

  return (
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div>
         <h3 className='text-xl font-bold'>
        {movie.original_title}</h3>
    </div>
    <div className='w-8 w-8'>
      <BiShareAlt className='w-full h-full' />
  </div>

  </div>
  

  
    </>
  );
};

const NavbarLarge = () => {
  return (
    <>
      <div className='container flex mx-auto px-4 items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
          <div className='w-10 h-10 '>
            <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png' 
            alt='logo' 
            className='w-full h-full' 
            />

          </div>

          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch/>
          <input 
            type="search" 
            className='w-full bg-transparent border-none focus:outline-none'
            placeholder="Search for movies, events, plays, sports and activities"

          />
        </div>
        </div>
        <div className="flex items-centre gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Delhi NCR <BiChevronDown/>
          </span>
          <button className='bg-red-600 text-white px-2 py-2 text-sm rounded'>
            Sign In
          </button>
          <div className='w-8 h-8 text-white'>
            <BiMenu className='w-full h-full' />
          </div>

        </div>
      </div>
    </>
  )
}

const MovieNavbar = () => {

  
  return (
  <>
  <nav className='bg-white border-v-2 lg:border-b-0 lg:bg-darkBackground-400 p-4'>
    <div className='lg:hidden'>
      {/* Mobile and Medium Screen  */}

      <NavSmall />
    </div>

    <div className='hidden w-full lg:flex'>
      {/* For LArge Screen  */}

      <NavbarLarge />
      </div>
      </nav>
      </>
      );
  
};

export default MovieNavbar;