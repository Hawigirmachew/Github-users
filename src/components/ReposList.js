import RepoItem from "./RepoItem"
function ReposList({repos}) {
  
  return (
    <div className="rounded-lg shadow-xl bg-neutral text-white card mt-6 px-6">
    
        <div className="card-body">
            <h2 className="text-3xl font-bold my-5 card-title">
                Latest Repositories
            </h2>
            {repos.map(repo=> (
            <RepoItem key = {repo.id} repo = {repo}/>
            ))}
        </div>
   
    </div>
  )
}

export default ReposList
