import "./NavigationBar.scss";
import { useNavigate } from "react-router-dom";

import search from "../../assets/icons/search.png";
import profileIcon from "../../assets/icons/profile.png";
import chat from "../../assets/icons/chat.png";
import { Link } from "react-router-dom";

export default function NavigationBar({ onClick }) {
  const navigate = useNavigate();
  function profile() {
    navigate("/profile");
  }
  return (
    <div className="navigation">
      <div className="navigation__item">
        <img className="navigation__icon" alt="icon" src={chat} />
        <p className="navigation__label">Chats</p>
      </div>
      <Link to="/groups" className="navigation__search">
        <img className="navigation__icon" alt="icon" src={search} />
      </Link>
      <Link to="/profile" className="navigation__item">
        <img
          onCLick={() => profile()}
          className="navigation__icon"
          alt="icon"
          src={profileIcon}
        />
        <p className="navigation__label--bold">Profile</p>
      </Link>
    </div>
  );
}
