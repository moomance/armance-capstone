import "./UserCard.scss";
import josh from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";

export default function UserCard() {
  const navigate = useNavigate();

  function userProfile() {
    navigate("/users");
  }
  return (
    <>
      <div className="user__card" onClick={() => userProfile()}>
        <img alt="user" className="user__image" src={josh} />
        <div className="user__name-container">
          <p className="user__name">Amelia</p>
        </div>
      </div>
    </>
  );
}
