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
import UserProfileHobbiesCard from "../../components/UserProfileHobbiesCard/UserProfileHobbiesCard";

export default function UserProfilePage({ userDetails }) {
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
        {userDetails.map((userDetail) => {
          return <UserProfileHobbiesCard userDetail={userDetail} />;
        })}
      </div>
      <div className="profile__category">
        <h5 className="profile__title">Prefered languages</h5>

        <div className="card__profile">
          <div className="icon">hi</div>
          <h6 className="name">{userDetails[0].language3}</h6>
        </div>
        <div className="card__profile">
          <div className="icon">hi</div>
          <h6 className="name">{userDetails[0].language1}</h6>
        </div>
        <div className="card__profile">
          <div className="icon">hi</div>
          <h6 className="name">{userDetails[0].language2}</h6>
        </div>
      </div>
      <div className="profile__category">
        <h5 className="profile__title">Current location</h5>
        <div className="card__profile">
          <div className="icon">hi</div>
          <h6 className="name">{userDetails[0].location}</h6>
        </div>
      </div>
      {/* <NavigationBar /> */}
    </div>
  );
}
