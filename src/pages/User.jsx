import { useParams, Link } from "react-router-dom"
import { useEffect, useContext } from "react"
//component
import Spinner from '../components/Spinner'
//context 
import GithubContext from "../context/github/GithubContext"
//icons
import {FaUser, FaUserFriends, FaCode, FaStore}  from 'react-icons/fa'
import ReposList from "../components/ReposList"

function User() {
    const {user, getUser, isLoading, repos, getUserRepos} = useContext(GithubContext)
    const params = useParams()
    // eslint-disable-next-line 
    useEffect(() =>{
    getUser(params.login)
    getUserRepos(params.login)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {name, login, avatar_url, bio, twitter_username, blog, location, type, followers, following, html_url, hireable, public_repos, public_gists} = user

   

  return isLoading  ? <Spinner /> :(
    <div className="w-full mx-auto lg:w-10/12 mb-6">
      <Link to='/' className="text-white">Back To Search User</Link>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 md:gap-3 xl:gab-4 mt-4">
          <div className=" mb-4 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src = {avatar_url} alt="user profile pic" />
              </figure>
              <div className="card-body justify-end mt-60">
                <h2 className="card-title ">{name}</h2>
                <p>{login}</p>

              </div>

            </div>
          </div>
          <div className="col-span-2">
               <div className="mb-4">
               <h1 className="text-3xl  card-title">{name} <div className="badge badge-success text-white">{type}</div>{hireable && <div className="badge badge-info">Hireable</div>}
                </h1>
                <p>Bio : {bio ? (<span>{bio}</span>):<span>No Bio</span>}              
                </p>
                <div className="card-actions mt-5">
                  <a href={html_url} target="_blank" rel = 'noreferrer' className="btn btn-ouline">Visit Github Profile</a>
                </div>
               </div>
              {(location || blog || twitter_username) &&
               <div className="p-4 stats w-full rounded-lg shadow-xl bg-neutral-300 ">
               {location && <div className="stat">
                   <div className="stat-title text-black text-lg">Location</div>
                   <div className="stat-value text-xl">{location}</div>
                   
               </div>}
               {blog && <div className="stat">
                   <div className="stat-title text-black text-lg">Website</div>
                 <div className="stat-value text-xl">
                 <a href={`http://${blog}`} target="_blank" rel="noreferrer">Profile</a>
                 </div>
                   
               </div>}
               {twitter_username && <div className="stat">
                   <div className="stat-title text-black text-lg">Twitter</div>
                   <div className="stat-value text-xl"> <a href={`http://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">{twitter_username}</a></div>
                   
               </div>}
               
                           </div>}
               <div className="p-4 mt-4 stats w-full rounded-lg shadow-xl bg-neutral-300 ">
                 <div className="stat">
                  <div className="stat-figure">
                    <FaUser className="text-3xl"/>
                   
                  </div>
                  <div className="stat-title">Followers</div>
                    <div className="stat-value">{followers}</div>
                 </div>
                 <div className="stat">
                  <div className="stat-figure">
                    <FaUserFriends className="text-3xl"/>
                   
                  </div>
                  <div className="stat-title">Followering</div>
                    <div className="stat-value">{following}</div>
                 </div>
                 <div className="stat">
                  <div className="stat-figure">
                    <FaCode className="text-3xl"/>
                   
                  </div>
                  <div className="stat-title">Public Repo</div>
                    <div className="stat-value">{public_repos}</div>
                 </div>
                 <div className="stat">
                  <div className="stat-figure">
                    <FaStore className="text-3xl"/>
          
                  </div>
                  <div className="stat-title">Public Gists</div>
                    <div className="stat-value">{public_gists}</div>
                 </div>
               </div>
          </div>
      </div>
      <ReposList repos = {repos}/>
    </div>
  )
}

export default User
