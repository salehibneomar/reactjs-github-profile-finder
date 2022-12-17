import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import GithubFinderContext from '../../Context/Github/GithubFinderContext'
import Spinner from '../Layout/Spinner'
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from 'react-icons/fa'

function UserProfile() {
  const {getUserProfile, isLoading, userProfile} = useContext(GithubFinderContext)
  const params = useParams()

  useEffect(()=>{
    getUserProfile(params.name)
    .catch((err)=>{
      window.location = '/not-found'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = userProfile


  if(isLoading){
    return <Spinner/>
  }

  return (
      <div className='mx-auto w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost btn-active'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='card card-compact image-full rounded-lg shadow'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
                <p className='flex-grow-0'>@{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-3'>
            <div className='mb-6'>
              <h1 className='text-2xl lg:text-3xl card-title'>
                {name}
              </h1>
              <p>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className='w-full rounded-lg shadow stats'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='stat lg:border-r'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-sm lg:text-lg stat-value'>
                    {location ==='' ? 'N/A' : location}
                  </div>
                </div>
                <div className='stat'>
                  <div className='stat-title text-md'>Website</div>
                  <div className='text-sm lg:text-lg stat-value'>
                    {blog === '' ? 'N/A' : (<a href={blog} target='_blank' rel='noreferrer'>
                      {blog}
                    </a>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-6 rounded-lg shadow stats'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='stat lg:border-r'>
              <div className='stat-figure text-secondary'>
                <FaUsers className='text-2xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-2xl md:text-4xl'>
                {followers}
              </div>
            </div>

            <div className='stat lg:border-r'>
              <div className='stat-figure text-secondary'>
                <FaUserFriends className='text-2xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-2xl md:text-4xl'>
                {following}
              </div>
            </div>

            <div className='stat lg:border-r'>
              <div className='stat-figure text-secondary'>
                <FaCodepen className='text-2xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-2xl md:text-4xl'>
                {public_repos}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaStore className='text-2xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-2xl md:text-4xl'>
                {public_gists}
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default UserProfile
