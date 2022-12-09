import { Link } from "react-router-dom";
import { NavBarContainer, UlContainer } from "./styles";

export function NavBar() {
  return (
    <NavBarContainer>
      <h2 className="TitlePage">
        <Link to={`/`}>Blog</Link>
      </h2>
      <UlContainer>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            New Post
          </Link>
        </li>
      </UlContainer>
    </NavBarContainer>
  );
}
