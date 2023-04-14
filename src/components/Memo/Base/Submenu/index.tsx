import { SubmenuContainer } from "pages/Memo/styles";
import React from "react";
import { NavLink } from "react-router-dom";

const Submenu = () => {
  return (
    <SubmenuContainer>
      <ul className="menu">
        <li className="menu-item">
          <NavLink
            className="navLink-active"
            to="/memo/diabetes"
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "gray",
              };
            }}
          >
            당수치 내역
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/memo/diet"
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "gray",
              };
            }}
          >
            식단 내역
          </NavLink>
        </li>
      </ul>
    </SubmenuContainer>
  );
};

export default Submenu;
