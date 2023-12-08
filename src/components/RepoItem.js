
import {FaLink, FaEye, FaInfo, FaStar, FaUtensils,} from 'react-icons/fa'


function RepoItem({repo}) {
   
     const {name, html_url, description, watchers_count, open_issues, forks, stargazers_count, }= repo

   

  return (
    <div className='card rounded-lg text-black bg-neutral-300 p-2 mb-2'>
      <div className="card-body">
      <h4 className='text-2xl card-title mb-2'>
        <a href = {html_url} target="_blank" rel="noreferrer"><FaLink className='inline mr-2'/>{name}</a>
      </h4>
     
      <p className='mb-4'>{description}</p>
      <div>
        <div className="badge badge-info mr-2 p-3"><FaEye className='mr-1'/>{watchers_count}</div>
        <div className="badge badge-error mr-2 p-3"><FaInfo className='mr-1'/>{open_issues}</div>
        <div className="badge badge-error mr-2 p-3"><FaUtensils className='mr-1'/>{forks}</div>
        <div className="badge badge-success mr-2 p-3"><FaStar className='mr-1'/>{stargazers_count}</div>
      </div>
      </div>
     
    </div>
  )
}

export default RepoItem
