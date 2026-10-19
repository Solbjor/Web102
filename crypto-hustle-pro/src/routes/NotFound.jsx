import { Link } from "react-router"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <Link style={{ color: "white" }} to="/">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
