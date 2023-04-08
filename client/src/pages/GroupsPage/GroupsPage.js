import "./GroupsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import GroupCard from "../../components/GroupCard/GroupCard";
import Search from "../../components/Search/Search";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default function GroupsPage() {
  const [groups, setGroups] = useState([{}]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/groups")
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(groups);
  return (
    <div className="group">
      <Search />

      <h1 className="group-page__title">Suggested groups</h1>

      <div className="group__suggestions">
        {groups.map((group) => {
          return <GroupCard group={group} />;
        })}
      </div>

      <NavigationBar />
    </div>
  );
}
