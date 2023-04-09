import "./UserCard.scss";
import josh from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function UserCard({ gr, setUserDetails }) {
  const navigate = useNavigate();

  function userProfile() {
    navigate(`/users/${gr.user_id}`);
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/user_hobbies/${gr.user_id}`)
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="user__card" onClick={() => userProfile()}>
        <img alt="user" className="user__image" src={gr.avatar} />
        <div className="user__name-container">
          <p className="user__name">{gr.name}</p>
        </div>
      </div>
    </>
  );
}
