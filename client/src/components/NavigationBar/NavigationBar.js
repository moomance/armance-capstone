import "./NavigationBar.scss";
import { useNavigate } from "react-router-dom";

import search from "../../assets/icons/search.png";
import profileIcon from "../../assets/icons/profile.png";
import chat from "../../assets/icons/chat.png";

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
      <div className="navigation__search" onClick={onClick}>
        <img className="navigation__icon" alt="icon" src={search} />
      </div>
      <div className="navigation__item" onCLick={profile}>
        <img className="navigation__icon" alt="icon" src={profileIcon} />
        <p className="navigation__label--bold">Profile</p>
      </div>
    </div>
  );
}
