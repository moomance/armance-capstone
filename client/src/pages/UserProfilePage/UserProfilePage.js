import avatar from "../../assets/images/avatar.png";
import "./UserProfilePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import BackArrow from "../../components/BackArrow/BackArrow";
import UserProfileHobbiesCard from "../../components/UserProfileHobbiesCard/UserProfileHobbiesCard";

export default function UserProfilePage({ userDetails }) {
  const [icon, setIcon] = useState("Paris");

  const flagIcon = (language) => {
    switch (language) {
      case "French":
        return "🇫🇷";
      case "English":
        return "🇺🇸";
      case "Spanish":
        return "🇪🇸";
      case "German":
        return "🇩🇪";
      case "Italian":
        return "🇮🇹";
      case "Japanese":
        return "🇯🇵";
    }
  };

  const locationFlag = (location) => {
    switch (location) {
      case "New York":
        return "🇺🇸";
      case "Paris":
        return "🇫🇷";
      case "Tokyo":
        return "🇯🇵";
      case "Barcelona":
        return "🇪🇸";
      case "Rome":
        return "🇮🇹";
      case "Berlin":
        return "🇩🇪";
    }
  };
  return (
    <div className="profile__page">
      <div className="profile">
        <div className="backarrow">
          <BackArrow />
        </div>
        <img className="profile__avatar" src={userDetails[0].avatar} />
        <h5 className="profile__name">{userDetails[0].name}</h5>
      </div>
      <div className="profile__category">
        <h5 className="profile__bio">About me</h5>
        <div className="bio">
          <p className="bio__user">{userDetails[0].bio}</p>
        </div>
      </div>
      <div className="profile__category">
        <h5 className="profile__title">My hobbies ({userDetails.length})</h5>
        <div className="profile__container">
          {userDetails.map((userDetail) => {
            return <UserProfileHobbiesCard userDetail={userDetail} />;
          })}
        </div>
      </div>
      <div className="profile__category">
        <h5 className="profile__title">
          Prefered languages ({userDetails.length})
        </h5>
        <div className="profile__container">
          <div className="card__profile">
            <div className="icon">{flagIcon(userDetails[0].language1)}</div>
            <h6 className="name">{userDetails[0].language1}</h6>
          </div>
          <div className="card__profile">
            <div className="icon">{flagIcon(userDetails[0].language2)}</div>
            <h6 className="name">{userDetails[0].language2}</h6>
          </div>
          <div className="card__profile">
            <div className="icon">{flagIcon(userDetails[0].language3)}</div>
            <h6 className="name">{userDetails[0].language3}</h6>
          </div>
        </div>
      </div>
      <div className="profile__category">
        <h5 className="profile__title">Current location</h5>
        <div className="card__profile">
          <div className="icon">{locationFlag(userDetails[0].location)}</div>
          <h6 className="name">{userDetails[0].location}</h6>
        </div>
      </div>
      {/* <NavigationBar /> */}
    </div>
  );
}
