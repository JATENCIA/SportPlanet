import React, { useEffect } from "react";
import style from "./ProfileCard.module.css";
import { FaEdit } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUser } from "../../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileCard() {
  const dispatch = useDispatch()

  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  return (
    <div className={style.cardContainer}>
      <button className={style.editButton}>
        <FaEdit />
      </button>
      <div className={style.imgContainer}>
        <img src={userDb.image} alt="usuario" className={style.img}/>
      </div>
      <h2>{userDb.name} {userDb.lastName}</h2>
      <span>VALORATION</span>
    </div>
  );
}
