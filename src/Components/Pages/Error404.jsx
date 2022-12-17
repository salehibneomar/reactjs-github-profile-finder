import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function Error404() {
  return (
    <div className='text-center'>
      <h1 className='text-8xl mb-4 font-bold'>404</h1>
      <p className='text-xl mb-4'>Oops the page you're looking for isn't available!</p>
      <Link to='/' className='btn btn-sm btn-info rounded-full'>
          <FaHome className='mr-2' />
          Go To Home Page
      </Link>
    </div>
  )
}

export default Error404