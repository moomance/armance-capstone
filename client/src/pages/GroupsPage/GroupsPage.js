import "./GroupsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import GroupCard from "../../components/GroupCard/GroupCard";
import Search from "../../components/Search/Search";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default function GroupsPage({ results, location, hobbies, langues }) {
  const [groupList, setGroupList] = useState([{}]);
  console.log(location);
  console.log(hobbies);
  console.log(langues);
  const [filteredGroups, setFilteredGroups] = useState([{}]);
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

  // function filterGroups(groups, location, hobbies, langues) {
  //   const filteredGroups = groups.filter((group) => {
  //     const hasSameLocation = group.group_location === location.city;
  //     const hasCommonHobbies = group.group_hobby.some((hobby) =>
  //       hobbies.includes(hobby)
  //     );
  //     const hasCommonLanguages = group.group_language.some((language) =>
  //       langues.langue.includes(language)
  //     );
  //     return hasSameLocation && hasCommonHobbies && hasCommonLanguages;
  //   });
  //   return filteredGroups;
  // }
  // console.log(filterGroups(groupList, location, hobbies, langues));

  // function test(groups) {
  //   const filtered = groups.filter((group) => {
  //     if (!group.group_location === location.city) {
  //       return false;
  //     }
  //   });
  // }

  // console.log(test(groupList));

  // useEffect(() => {
  //   const filteredGroups = filterGroups(groupList, results);
  //   setFilteredGroups(filteredGroups);
  // }, [groupList, results]);

  console.log(filteredGroups);
  console.log(groupList[0].group_language);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/groups")
      .then((res) => {
        setGroupList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(groupList);
  return (
    <div className="group">
      <Search />

      <h1 className="group-page__title">Suggested groups</h1>

      <div className="group__suggestions">
        {groupList.map((group) => {
          return (
            <GroupCard
              group={group}
              location={location}
              hobbies={hobbies}
              langues={langues}
            />
          );
        })}
      </div>

      <NavigationBar />
    </div>
  );
}
