import "./Location.scss";

// component
import BackButton from "../../components/BackButton/BackButton";
import LocationCard from "../../components/LocationCard/LocationCard.js";

let locations = [
  {
    id: 1,
    location: "New York, USA",
    icon: "🇺🇸",
    city: "New York",
  },
  {
    id: 2,
    location: "Paris, France",
    icon: "🇫🇷",
    city: "Paris",
  },
  {
    id: 3,
    location: "Barcelona, Spain",
    icon: "🇪🇸",
    city: "Barcelona",
  },
  {
    id: 4,
    location: "Berlin, Germany",
    icon: "🇩🇪",
    city: "Berlin",
  },
  {
    id: 5,
    location: "Rome, Italy",
    icon: "🇮🇹",
    city: "Rome",
  },
  {
    id: 6,
    location: "Tokyo, Japan",
    icon: "🇯🇵",
    city: "Tokyo",
  },
];

export default function Location({
  setLocation,

  setIsActive,
  isActive,
  name,
  toPage,
}) {
  // const renderFlag = (codePoint, icon) => {
  //   const flag = String.fromCodePoint(parseInt(codePoint.substring(2), 16));
  //   return <span>{flag}</span>;
  // };
  // console.log(renderFlag);

  return (
    <>
      <h1>Where are you located?</h1>
      <div className="card__container">
        {locations.map((location) => {
          // console.log(flag_icon);
          return (
            <LocationCard
              // codePoints={codePoints}
              // code={code}
              // flag_icon={flag_icon}
              setLocation={setLocation}
              // renderFlag={renderFlag}
              l={location}
              city={location.city}
              icon={location.icon}
              id={location.id}
              key={location.id}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          );
        })}
      </div>

      <div className="form__buttons">
        <BackButton />

        <div onClick={() => toPage("Hobbies")} className="button">
          Continue
        </div>
      </div>
    </>
  );
}
