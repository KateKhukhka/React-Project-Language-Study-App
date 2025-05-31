import imgLogo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={imgLogo} alt="logo" />
        </Link>
        <h1>Language Study Cards</h1>
      </div>
    </header>
  );
}

export default Header;
