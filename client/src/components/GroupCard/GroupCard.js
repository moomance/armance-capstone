import hiking from "../../assets/images/hiking.png";
import "./GroupCard.scss";

import { useNavigate } from "react-router-dom";

export default function GroupCard({ group }) {
  const navigate = useNavigate();

  // function groupDetails() {
  //   navigate(`/groups/${group.id}`);
  // }
  function groupDetails() {
    navigate(`/groups/${group.id}`);
  }
  return (
    <div className="group__card" onClick={groupDetails}>
      <div className="group__details">
        <div className="group__name">
          <img className="group__image" alt="group" src={group.image} />
          <h5 className="group__title">{group.name}</h5>
        </div>
        <div className="group__members">
          <div className="group__photos">
            <img className="photo" alt="user" src={hiking} />
          </div>
          <p className="group__number">+5</p>
        </div>
      </div>
      <div className="group__content">
        <p>{group.bio}</p>
      </div>
    </div>
  );
}
