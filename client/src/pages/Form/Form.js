import { Link } from "react-router-dom";
import Location from "../Location/Location";
import Name from "../Name/Name";
import Hobbies from "../Hobbies/Hobbies";
import Languages from "../Languages/Languages";
import BackButton from "../../components/BackButton/BackButton";

// stylesheet
import "./Form.scss";

import { useState } from "react";

export default function Form({
  name,
  location,
  hobbies,
  langues,
  setName,
  setLocation,
  setHobbies,
  setLangues,
  Submit,
}) {
  const [currentSection, setCurrentSection] = useState("Name");
  //   const [location, setLocation] = useState([{}]);
  //   const [name, setName] = useState("");
  //   const [loisirs, setLoisirs] = useState([{}]);
  //   const [langues, setLangues] = useState([{}]);

  function toPage(event) {
    setCurrentSection(event);
  }

  return (
    <>
      <form className="form">
        {currentSection === "Name" ? (
          <Name setName={setName} name={name} toPage={toPage} />
        ) : (
          ""
        )}
        {currentSection === "Location" ? (
          <Location
            location={location}
            setLocation={setLocation}
            name={name}
            toPage={toPage}
          />
        ) : (
          ""
        )}
        {currentSection === "Hobbies" ? (
          <Hobbies
            hobbies={hobbies}
            setHobbies={setHobbies}
            name={name}
            location={location}
            toPage={toPage}
          />
        ) : (
          ""
        )}
        {currentSection === "Languages" ? (
          <>
            <Languages
              name={name}
              location={location}
              hobbies={hobbies}
              toPage={toPage}
              langues={langues}
              setLangues={setLangues}
              Submit={Submit}
            />
          </>
        ) : (
          ""
        )}
      </form>
      {currentSection === "Languages" ? (
        <>
          <label type="submit" value="submit">
            <div className="form__buttons--submit">
              <BackButton />
              <Link to="/profile" className="button" onClick={Submit}>
                finish
              </Link>
            </div>
          </label>
        </>
      ) : (
        ""
      )}
    </>
  );
}
