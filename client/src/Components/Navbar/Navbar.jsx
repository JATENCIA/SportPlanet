import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { NavLink, Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
import { postUser } from '../../redux/Actions/actions';

export const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  useEffect(() => {
    if (user && isAuthenticated) {
      axios.get("/users").then((element) => {
        const userDb = element.data.find(
          (element) => element.eMail === user.email
        );
        console.log(userDb);
        if (userDb) {
          return false;
        } else {
          const newUser = {
            name: user.name,
            lastname: user.family_name,
            eMail: user.email,
          };
          dispatch(postUser(newUser));
        }
      });
    }
  }, [user]);

  return (
    <>
      <div className="container">
        <ContainerStyled>
          <Link to="/home">Sport Planet</Link>
          <NavStyled>
            <ListStyled to="/home">HOME</ListStyled>
          </NavStyled>

          {isAuthenticated ? (
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
                      <span>Hi! {user.name}</span>
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
                        <span className="text-xs text-gray-500">
                          {user.email}
                        </span>
                      </div>
                    </Link>
                  </MenuItem>
                  <hr className="my-4 border-gray-500" />
                  <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                      to="/profile/my-dates"
                      className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                    >
                      <RiProfileLine /> My Profile
                    </Link>
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
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
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
        </ContainerStyled>
        <Outlet />
      </div>
    </>
  );
};

export const ContainerStyled = styled.div`
  width: 100%;
  height: 64px;
  background: #023047;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  // left: 0px;
`;

export const NavStyled = styled.nav`
  height: 100%;
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ListStyled = styled(NavLink)`
  padding-left: 15px;
  padding-right: 20px;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #ffb703;
  }
`;
