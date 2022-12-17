import React from 'react'
import LoadingIcons from 'react-loading-icons'

function Spinner() {
  return (
    <div className='flex justify-center' >
      <LoadingIcons.Bars className='w-10' />
    </div>
  )
}

export default Spinner
