import React from 'react'
import { Link } from 'react-router-dom'

function SingleUser(props) {
    
  const {avatar_url: pfp, login: name} = props.user

  return (
    <div className='card bg-gray-800 text-neutral-content bg-opacity-50 compact shadow-md'>
      <div className="flex-row items-center card-body space-x-4">
        <div>
            <div className="avatar">
                <div className="rounded-full w-14 h-14">
                    <img src={pfp} alt={`profile_of_${name}`} />
                </div>
            </div>
        </div>
        <div>
            <h4 className='card-title'>{'@'+name}</h4>
            <Link to={`/user/${name}`} className='btn btn-xs btn-ghost mt-2'>
                Visit Profile
            </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleUser
