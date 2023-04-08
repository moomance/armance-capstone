import "./GroupDetailsPage.scss";
import UserCard from "../../components/UserCard/UserCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

import BackArrow from "../../components/BackArrow/BackArrow";
import { useEffect } from "react";
import axios from "axios";

export default function GroupDetailsPage() {
  const [group, setGroup] = useState({});
  const [users, setUsers] = useState([]);
  const { groupId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/groups/${groupId}`)
      .then((res) => setGroup(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:8080/api/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  console.log(group.name);
  return (
    <div className="details">
      <div className="details__navigation">
        <BackArrow />
        <h1 className="details__title">{group.name}</h1>
      </div>
      <img className="details__image" alt="group" src={group.image} />
      <div className="details__member">
        <h2>Members | 8</h2>
        <div className="details__users">
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
        <div className="details__bio">
          <h2>About the group</h2>
          <p className="details__description">{group.bio}</p>
        </div>
      </div>
      <div className="details__button">Join the group</div>
    </div>
  );
}
