import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// pages
import GroupDetailsPage from "./pages/GroupDetailsPage/GroupDetailsPage";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import Form from "./pages/Form/Form";

function App() {
  // const [isActive, setIsActive] = useState([]);

  // const handleClick = (id) => {
  //   setIsActive(id);
  // };

  const [location, setLocation] = useState([]);
  const [name, setName] = useState("");
  const [hobbies, setHobbies] = useState([{}]);
  const [langues, setLangues] = useState([{}]);
  const [userDetails, setUserDetails] = useState([{}]);
  const results = [
    {
      name: name,
      location: location,
      hobbies: hobbies,
      langue: langues,
    },
  ];

  const Submit = () => {
    return results;
  };

  // const handleCardClick = (cardId) => {
  //   if (activeCards && activeCards.includes(cardId)) {
  //     setActiveCards(activeCards.filter((id) => id !== cardId));
  //   } else {
  //     setActiveCards([...activeCards, cardId]);
  //   }
  // };

  console.log(userDetails);
  console.log(results);
  console.log(name);
  console.log(location);
  console.log(hobbies);
  console.log(langues);

  // console.log(typeof handleClick);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage results={results} />} />
        <Route
          path="/groups"
          element={
            <GroupsPage
              location={location}
              hobbies={hobbies}
              langues={langues}
              results={results}
            />
          }
        />
        <Route
          path="/groups/:groupId"
          element={
            <GroupDetailsPage
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              location={location}
              hobbies={hobbies}
              langues={langues}
              name={name}
            />
          }
        />
        <Route
          path="/users/:userId"
          element={<UserProfilePage userDetails={userDetails} />}
        />

        <Route
          path="/form"
          element={
            <Form
              name={name}
              setName={setName}
              hobbies={hobbies}
              setHobbies={setHobbies}
              location={location}
              setLocation={setLocation}
              langues={langues}
              setLangues={setLangues}
              Submit={Submit}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
