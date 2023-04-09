import "./GroupDetailsPage.scss";
import UserCard from "../../components/UserCard/UserCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";
import cross from "../../assets/icons/cross.png";

import BackArrow from "../../components/BackArrow/BackArrow";
import { useEffect } from "react";
import axios from "axios";

export default function GroupDetailsPage({ setUserDetails }) {
  const [group, setGroup] = useState([{}]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { groupId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/user_groups/${groupId}`)
      .then((res) => {
        setGroup(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    // axios
    //   .get(`http://localhost:8080/api/users`)
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => console.log(err));
  }, []);

  console.log(group);

  return (
    <div className="details">
      <div className="details__navigation">
        <BackArrow />
        <h1 className="details__title">{group[0].group_name}</h1>
      </div>
      <img className="details__image" alt="group" src={group[0].group_image} />
      <div className="details__member">
        <h2>Members ({group.length})</h2>
        <div className="details__users">
          {group.map((gr) => {
            return (
              <UserCard
                key={gr.user_id}
                gr={gr}
                setUserDetails={setUserDetails}
              />
            );
          })}
        </div>
        <div className="details__bio">
          <h2>About the group</h2>
          <p className="details__description">{group[0].group_bio}</p>
        </div>
      </div>
      <div onClick={openModal} className="details__button">
        Join the group
      </div>
      <ReactModal
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <img
          onClick={closeModal}
          className="modal__close"
          alt="cross"
          src={cross}
        />
        <div className="modal__container">
          <div className="modal__icon">🎉</div>

          <div className="modal__content">
            <h1 className="modal__title">Congrats!</h1>
            <div className="modal__description">
              You have joined
              <br />
              {group[0].group_name}!
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
