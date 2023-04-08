import { useEffect, useState } from "react";
import axios from "axios";

// component
import BackButton from "../../components/BackButton/BackButton";
import HobbyCard from "../../components/HobbyCard/HobbyCard";

export default function Hobbies({ toPage, hobbies, setHobbies }) {
  const [activities, setActivities] = useState([]);
  const handleCardClick = (activity) => {
    if (hobbies.includes(activity)) {
      setHobbies(hobbies.filter((hobby) => hobby !== activity.id));
    } else {
      setHobbies([...hobbies, activity]);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hobbies")
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>What activities do you like to do?</h1>
      <div className="card__container">
        {activities.map((hobby) => {
          return (
            <HobbyCard
              h={hobby}
              key={hobby.id}
              hobbies={hobbies}
              handleClick={handleCardClick}
            />
          );
        })}
      </div>

      <div className="form__buttons--hobbies">
        <BackButton />
        <div onClick={() => toPage("Languages")} className="button">
          Continue
        </div>
      </div>
    </>
  );
}
