import "./NavBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useImperativeHandle } from "react";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        CODE FRIENDS
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/CreatePost">Create Post</CustomLink>
        <CustomLink to="/Profile">Profile</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
