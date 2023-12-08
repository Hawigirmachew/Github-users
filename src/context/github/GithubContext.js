import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";
import axios from "axios";

const Github_Url = process.env.REACT_APP_BASE_URL;
const Github_Token = process.env.REACT_APP_GITHUB_USERS_TOKEN;

const GithubContext = createContext();

const github = axios.create({
  baseURL:Github_Url,
  headers:{
    Authorization: `token ${Github_Token}`,
  }
})

export const GithubProvider = ({ children }) => {
  const intailState = {
    users: [],
    user: {},
    repos:[],
    isLoading: false,
  };
  const setLoading = () =>
    dispatch({
      type: "Set_Loading",
    });
  const [state, dispatch] = useReducer(githubReducer, intailState);

  const fetchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({ q: text });

    //using axios api to fetch data 
    //automatically converts the data to json so no need to use res.json()
    const res = await github.get(`/search/users?${params}`)
    const items = res.data.items
    dispatch({
      type: "Get_Users",
      payload: items, // holds the information
    });


    //using fetch api to fetch the data
    // const res = await fetch(`${Github_Url}/search/users?${params}`, {
    //   headers: {
    //     Authorization: `token ${Github_Token}`,
    //   },
    // });
    // const { items } = await res.json();
    
    
  };
  //get single user
  const getUser = async (login) => {
    setLoading();

   const res = await github.get(`/users/${login}`)
    if (res.status === 404) {
      window.location("/notfound");
    } else {
      const data = res.data;

      dispatch({
        type: "Get_User",
        payload: data,
      });
    }
  };
// get user repos
  const getUserRepos =async  (login) =>{
     setLoading()
     
     const params = new URLSearchParams({
      sort :'created', 
      per_page:10
     })

     const res = await github.get(`/users/${login}/repos?${params}`)
     const data = res.data
     dispatch({
      type:'Get_Repos',
      payload:data
     })
  }
  const clearUsers = () =>
    dispatch({
      type: "Clear_Users",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        user:state.user,
        repos:state.repos,
        fetchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
