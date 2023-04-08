import "./UserCard.scss";
import josh from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user }) {
  const navigate = useNavigate();

  function userProfile() {
    navigate(`/users/${user.id}`);
  }
  return (
    <>
      <div className="user__card" onClick={() => userProfile()}>
        <img alt="user" className="user__image" src={user.avatar} />
        <div className="user__name-container">
          <p className="user__name">{user.name}</p>
        </div>
      </div>
    </>
  );
}
