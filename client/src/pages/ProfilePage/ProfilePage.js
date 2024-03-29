import "./ProfilePage.scss";
import avatar from "../../assets/images/group.png";

// components
import { Link } from "react-router-dom";

import PreferedLanguageCard from "../../components/PreferedLanguageCard/PreferedLanguageCard";
import PreferedHobbyCard from "../../components/PreferedHobbyCard/PreferedHobbyCard";
import CurrentLocationCard from "../../components/CurrentLocationCard/CurrentLocationCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
//icons
import settings from "../../assets/icons/settings.png";

export default function ProfilePage({ results }) {
  return (
    <>
      <div className="profile__page" alt="profile">
        <img src={settings} className="settings" alt="setting icon" />
        <div className="profile">
          <img className="profile__avatar" src={avatar} alt="avatar" />
          <h5 className="profile__name">{results[0].name}</h5>
          <Link to="/groups" className="profile__button">
            +Connect with people
          </Link>
        </div>
        <div className="profile__category">
          <h5 className="profile__bio">My bio</h5>
          <p className="profile__label">Write a fun and punchy intro</p>
          <div className="bio">
            <p className="bio__content">
              Hi, I'm {results[0].name}! I love to travel and I'm in{" "}
              {results[0].location.city} for the next 6 months. Excited to meet
              new people and explore!
            </p>
          </div>
        </div>
        <div className="profile__category">
          <h5 className="profile__title">{`My hobbies (${
            results[0].hobbies.slice(1).length
          })`}</h5>
          <div className="profile__container">
            {results[0].hobbies.slice(1).map((hobby) => {
              return <PreferedHobbyCard key={hobby.id} hobby={hobby} />;
            })}
          </div>
        </div>
        <div className="profile__category">
          <h5 className="profile__title">{`Prefered languages (${
            results[0].langue.slice(1).length
          })`}</h5>
          <div className="profile__container">
            {results[0].langue.slice(1).map((language) => {
              return (
                <PreferedLanguageCard key={language.id} language={language} />
              );
            })}
          </div>
        </div>
        <div className="profile__category">
          <h5 className="profile__title">My location</h5>
          <CurrentLocationCard location={results[0].location} />
        </div>
      </div>
      <NavigationBar />
    </>
  );
}
