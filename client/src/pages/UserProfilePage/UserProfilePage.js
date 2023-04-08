import avatar from "../../assets/images/avatar.png";
import "./UserProfilePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// components

import PreferedLanguageCard from "../../components/PreferedLanguageCard/PreferedLanguageCard";
import PreferedHobbyCard from "../../components/PreferedHobbyCard/PreferedHobbyCard";
import CurrentLocationCard from "../../components/CurrentLocationCard/CurrentLocationCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import BackArrow from "../../components/BackArrow/BackArrow";

export default function UserProfilePage() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(user);
  return (
    <div className="profile__page">
      <div className="profile">
        <div className="backarrow">
          <BackArrow />
        </div>
        <img className="profile__avatar" src={user.avatar} />
        <h5 className="profile__name">{user.name}</h5>
      </div>
      <div className="profile__category">
        <h5 className="profile__bio">About me</h5>
        <div className="bio">
          <p className="bio__user">{user.bio}</p>
        </div>
      </div>
      <div className="profile__category">
        <h5 className="profile__title">My hobbies</h5>
        {/* <PreferedHobbyCard /> */}
      </div>
      <div className="profile__category">
        <h5 className="profile__title">Prefered languages</h5>
        {/* <PreferedLanguageCard /> */}
      </div>
      <div className="profile__category">
        <h5 className="profile__title">Current location</h5>
        {/* <CurrentLocationCard /> */}
      </div>
      {/* <NavigationBar /> */}
    </div>
  );
}
