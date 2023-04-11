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

  const city = location.city;
  const hobbiesOnly = hobbies.slice(1).map(({ hobby }) => hobby);
  const languageOnly = langues.slice(1).map(({ language }) => language);

  console.log(hobbiesOnly);
  function filterGroups(groups, location, hobbies, langues) {
    const filteredGroups = groups
      .filter((group) => group.group_location === location)
      .filter((group) => hobbies.includes(group.group_hobby))
      .filter((group) => langues.includes(group.group_language));
    setFilteredListGroups(filteredGroups);
  }

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

  return (
    <div className="group">
      <Search />

      <h1 className="group-page__title">Suggested groups</h1>

      <div className="group__suggestions">
        {filteredListGroups.map((group) => {
          console.log(group);
          return <GroupCard key={group.groupId} group={group} />;
        })}
      </div>
      <NavigationBar />
    </div>
  );
}
