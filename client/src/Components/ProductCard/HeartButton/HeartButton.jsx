import React, { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/Actions/actions";
function HeartButton({ _id }) {
  const dispatch = useDispatch();
  const [toggleHeart, setToggleHeart] = React.useState(false);

  const heartIcon = toggleHeart === true ? <AiFillHeart /> : <AiOutlineHeart />;

  const { user } = useAuth0();

  React.useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);

  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  const favoriteHandler = async (e) => {
    try {
      e.preventDefault();
      const favorite = {
        user: userDb._id,
        product: _id,
      };
      await axios.post("/users/favorite", favorite);
      if (toggleHeart === false) {
        setToggleHeart(true);
      } else {
        setToggleHeart(false);
      }
    } catch (error) {
      console.log(error, "error loko");
    }
  };

  useEffect(() => {
    const userF = userDb?.favorites;
    const favorite = userF?.map((f) => f._id);

    for (let i = 0; i < favorite?.length; i++) {
      if (favorite[i] === _id) setToggleHeart(true);
    }
  }, []);

  return (
    <button className="heart-button" onClick={favoriteHandler}>
      {heartIcon ? heartIcon : heartIcon2}
    </button>
  );
}

export default HeartButton;
