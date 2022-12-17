import React from 'react'
import SearchUser from '../Users/SearchUser'
import UserList from '../Users/UserList'

function Home() {
  return (
    <div className='object-center'>
      <SearchUser/>
      <UserList/>
    </div>
  )
}

export default Home
