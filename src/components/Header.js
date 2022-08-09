import { Link } from "react-router-dom";
import NavMain from "./NavMain";

function Header() {
  return (
    <header className="pageheader">
      <h1>
        <Link to="/">Movie Corner</Link>
      </h1>
      <NavMain />
    </header>
  );
}

export default Header;
