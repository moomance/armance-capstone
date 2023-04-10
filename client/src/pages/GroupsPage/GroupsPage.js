import "./GroupsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import GroupCard from "../../components/GroupCard/GroupCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Search from "../../components/Search/Search";

export default function GroupsPage({ results, location, hobbies, langues }) {
  const [groupList, setGroupList] = useState([{}]);
  console.log(location);
  console.log(hobbies);
  console.log(langues);
  const [filteredListGroups, setFilteredListGroups] = useState([]);
  console.log(results);
  // function filterGroups(groups, user) {
  //   return groups.filter((group) => {
  //     // Check if the group is in the user's location
  //     if (group.group_location !== user.location) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }
  const city = location.city;
  const hobbiesOnly = hobbies.slice(1).map(({ hobby }) => hobby);
  const languageOnly = langues.slice(1).map(({ language }) => language);

  console.log(hobbiesOnly);
  function filterGroups(groups, location, hobbies, langues) {
    // console.log(groups, location, hobbies, langues);
    const filteredGroups = groups
      .filter((group) => group.group_location === location)
      .filter((group) => hobbies.includes(group.group_hobby))
      .filter((group) => langues.includes(group.group_language));
    setFilteredListGroups(filteredGroups);
  }

  // console.log(groupList);
  // console.log(filterGroups(groupList, city, hobbiesOnly, languageOnly));

  // console.log(filteredGroups);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/groups")
      .then((res) => {
        setGroupList(res.data);
        filterGroups(res.data, city, hobbiesOnly, languageOnly);
      })
      .catch((err) => console.log(err));
  }, []);

  const [typedSearch, setTypedSearch] = useState("");
  const handleSearch = (e) => {
    setTypedSearch(e.target.value);
  };

  // console.log(groupList);
  return (
    <div className="group">
      <Search />
      {/* <input
        className="search"
        type="text"
        placeholder="Explore groups..."
        onChange={(e) => handleSearch(e)}
      /> */}

      <h1 className="group-page__title">Suggested groups</h1>

      <div className="group__suggestions">
        {/* <ul>
          {groupList
            .filter((group) => group.group_hobby.includes(typedSearch))
            .map((group) => {
              return (
                <li>
                  <img src={group.group_image} />
                  <p>{group.group_name}</p>
                </li>
              );
            })}
        </ul> */}

        {filteredListGroups.map((group) => {
          console.log(group);
          return <GroupCard group={group} />;
        })}
      </div>

      <NavigationBar />
    </div>
  );
}
