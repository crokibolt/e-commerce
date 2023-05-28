import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[72px] w-screen'>
      <div className='flex justify-between content-center py-6 px-10'>
        <div className='text-3xl font-semibold'>
          <Link to='/'>CROKSHOP</Link>
        </div>
        <div>
          <div className='flex items-center justify-evenly text-xl gap-8 relative'>
            <div className='flex items-center hover:border-t-black border-t-2 border-white'>
              <Link to='/'>Homepage</Link>
            </div>
            <div className='hover:border-t-black border-t-2 border-white'>
              <Link to='/'>About</Link>
            </div>
            <div className='hover:border-t-black border-t-2 border-white'>
              <Link to='/'>Contact us</Link>
            </div>
            <div className='relative hover:border-t-black border-t-2 border-white'>
              <Link to='/Cart'>
                <FontAwesomeIcon icon={faCartShopping} /> <span className='absolute text-sm top-[-6px] right-[-17px] rounded-xl px-2 bg-green-500'>0</span>
              </Link>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Navbar