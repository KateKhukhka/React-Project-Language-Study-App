import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <Link to="/" className="nav_link">
        Home
      </Link>

      <Link to="/game" className="nav_link">
        Card Game
      </Link>
    </nav>
  );
}

export default NavBar;
