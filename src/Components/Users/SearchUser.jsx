import React from 'react'
import { useState, useContext } from 'react'
import GithubFinderContext from '../../Context/Github/GithubFinderContext'
import AlertContext from '../../Context/Alert/AlertContext'

function SearchUser() {
  const {users, searchUsers, clearSearchItems} = useContext(GithubFinderContext)
  const {setAlertHandler} = useContext(AlertContext)
  const [searchKey, setSearchKey] = useState('')
  
  const handleOnchange = (e) => {
    const value = e.target.value;
    setSearchKey(value);
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    setSearchKey(searchKey.trim());
    if(searchKey===''){
        setAlertHandler("warning", 'Search field cannot be empty!')
        clearSearchItems()
    }
    else{
        searchUsers(searchKey)
        .then((data)=>{
            if(data.length === 0){
                setAlertHandler("info", 'No Search Results Found!')
            }
            else{
                setSearchKey('')
                setAlertHandler(undefined)
            }
        })
        .catch((err)=> {
            setAlertHandler("error", err.message)
        });
        
    }

  }
    
  return (
    <div className='w-10/12 mb-10 mx-auto'>
        <div className="grid grid-cols-1 gap-8">
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className='w-full input input-lg text-black bg-gray-200' placeholder='Type...' value={searchKey} onChange={handleOnchange} />

                            <button type='submit' className='absolute top-0 right-0 btn btn-lg rounded-l-none bg-gray-700 border-gray-700'>GO</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length < 1 ? '' : (<div>
                <button 
                    type='button' 
                    className='btn btn-active btn-ghost'
                    onClick={ ()=> clearSearchItems() }
                >Clear
                </button>
            </div>)}
        </div>
    </div>
  )
}

export default SearchUser
