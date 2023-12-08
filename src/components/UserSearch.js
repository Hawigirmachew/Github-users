import React, { useContext, useState } from 'react'
import GithubContext from '../context/github/GithubContext'
import AlertContext from '../context/alert/AlertContext'

function UserSearch() {
    const [text, setText] = useState('')
    const {users, fetchUsers, clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)
    
    const handleChange = (e)=> {
        console.log('udfgeutegyfdg')
        setText(e.target.value)}


    const handelSubmit = (e) =>{
        e.preventDefault()
        if(text === ''){
          setAlert('Please enter an input', 'error')
        }
        else{
          fetchUsers(text)
            setText('')
        }
    }


  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8
    '>
      <div>
        <form  onSubmit={handelSubmit}>
            <div className='form-control'>
                <div className='relative'>
                    <input type="text" className='w-full pr-40 bg-neutral text-white input input-lg' placeholder = 'Search for user' 
                    value = {text}
                    onChange={handleChange}
                    />
                    <button type = 'submit' className='absolute right-0 top-0 rounded-l-none btn btn-lg bg-black text-white'
                   
                    >Search</button>
                </div>
            </div>
        </form>
      </div>
      <div>
       {users.length > 0 && 
        <button className='btn btn-lg bg-black btn-ghost  text-white ' onClick={clearUsers}>Clear</button>}
      </div>
    </div>
  )
}

export default UserSearch
