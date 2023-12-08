import React, { useContext } from "react";
import Spinner from "./Spinner";
import GithubContext from "../context/github/GithubContext";
import UserItem from "./UserItem";
function UserList() {
  const {users, isLoading} = useContext(GithubContext)
 
 
  
  return isLoading ? <Spinner /> :(
    <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-5'>
      {users.map((user) =>(
        <UserItem key = {user.id} user = {user}/>
      ))}
    </div>
  );
}

export default UserList;
