import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="text-center">
        <p>The page you requested is 404.</p>
        <Link className="btn btn-primary mt-5" to = '/'><IoHome className="mr-2"/>Go Back To Home</Link>
    </div>
  )
}

export default NotFound
