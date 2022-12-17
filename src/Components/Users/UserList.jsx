import React from 'react'
import { useContext } from 'react'
import GithubFinderContext from '../../Context/Github/GithubFinderContext'
import Spinner from '../Layout/Spinner'
import SingleUser from './SingleUser'

function UserList() {
  const {users, isLoading} = useContext(GithubFinderContext)
  
  if(isLoading){
    return <Spinner/>
  }

  return (
    <div className='w-10/12 mb-10 mx-auto'>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => {
                return <SingleUser key={user.id} user={user} />
            })}
        </div>
    </div>
  )
}

export default UserList
