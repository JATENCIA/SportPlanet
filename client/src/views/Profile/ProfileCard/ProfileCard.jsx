import React, { useEffect } from "react";
import style from "./ProfileCard.module.css";
import { FaEdit } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUser } from "../../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileCard() {
  const dispatch = useDispatch();

  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={userDb.image} alt="usuario" className={style.img} />
        <div>{userDb.baneado && <h2>User Banned!</h2>}</div>
      </div>
      <h2 className={style.userRoll}>User Type: {userDb.roll} </h2>
      <h2>
        Name: <span className={style.profileCardSpan}>{userDb.name}</span>
      </h2>
      <h2>
        Lastname:{" "}
        <span className={style.profileCardSpan}>{userDb.lastName}</span>
      </h2>
      <h2>
        Email: <span className={style.profileCardSpan}>{userDb.eMail}</span>
      </h2>
      <h2>
        Personal ID: <span className={style.profileCardSpan}>{userDb.dni}</span>
      </h2>
    </div>
  );
}
