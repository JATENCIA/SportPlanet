import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import {
  RiArrowDownSLine,
  RiLogoutCircleRLine,
  RiProfileLine,
} from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { LoginButton } from "../Auth0/LoginButton";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getAllUser, postUser } from "../../redux/Actions/actions";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isAuthenticated, user, logout } = useAuth0();

  const [userE, setUserE] = useState({});
  console.log("🚀 ~ file: Login.jsx:25 ~ Login ~ userE:", userE);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, location]);

  const allUsers = useSelector((state) => state.allUsers);

  try {
    const { user } = useAuth0();
    // const allUsers = useSelector((state) => state.allUsers);
    let idUser = "";
    allUsers.map((uS) => (uS.eMail === user.email ? (idUser = uS._id) : null));
    localStorage.setItem(
      "user",
      user.email + "|" + user.picture + "|" + idUser
    );
  } catch (error) {}

  useEffect(() => {
    if (user && isAuthenticated) {
      const userDb = allUsers?.find((element) => element.eMail === user.email);
      if (!userDb) {
        const newUser = {
          name: user.given_name || user.name,
          lastName: user.family_name,
          eMail: user.email,
          image: user.picture,
          roll: "user",
        };
        dispatch(postUser(newUser));
      } else {
        setUserE(userDb);
      }
    }
  }, [user]);

  return (
    <>
      {userE.baneado === true ? (
        <Menu
          menuButton={
            <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#219EBC] p-2 rounded-lg transition-colors">
              <img
                src={user.picture}
                alt={user.name}
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>🚫</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/profile/my-dates"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-red-500">
                  The user {user.name} is temporarily or permanently disabled.
                </span>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="#"
              onClick={() => logout({ returnTo: window.location.origin })}
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine /> Log Out
            </Link>
          </MenuItem>
        </Menu>
      ) : isAuthenticated ? (
        <>
          {" "}
          <nav>
            <Menu
              menuButton={
                <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#219EBC] p-2 rounded-lg transition-colors">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                  <span>Hi! {user.given_name || user.name} </span>
                  <RiArrowDownSLine />
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/profile/my-dates"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <div className="flex flex-col text-sm">
                    <span className="text-sm">{user.name} </span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                </Link>
              </MenuItem>
              <hr className="my-4 border-gray-500" />
              <MenuItem className="p-0 hover:bg-transparent">
                {userE.roll === "admin" ? (
                  <Link
                    to="/dashboard"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <RiProfileLine /> Admin
                  </Link>
                ) : userE.roll === "superAdmin" ? (
                  <Link
                    to="/dashboardSuperAdmin"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <RiProfileLine /> Sup_Admin
                  </Link>
                ) : (
                  <Link
                    to="/profile"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <RiProfileLine /> My Profile
                  </Link>
                )}
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/profile/favorites"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <MdOutlineFavorite /> Favorites
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="#"
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                >
                  <RiLogoutCircleRLine /> Log Out
                </Link>
              </MenuItem>
            </Menu>
          </nav>
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default Login;
