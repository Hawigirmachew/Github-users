import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="shadow-lg py-5 px-3 bg-neutral-300 rounded">
      <div className="flex  items-center gap-8">
       <div className="avatar">
       <div className="rounded-full w-14 h-14">
          <img src={avatar_url} alt="" />
        </div>
       </div>
       <div className="title">
        <div>
          <h3>{login}</h3>
          <Link className="" to={`/users/${login}`}>View User Profile</Link>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default UserItem;
