import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "components/Sidebar";
import UserMenu from './UserMenu';
import { Navbar, OverWrap } from "./styles";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(true);
  const showCloseSidebar = () => setIsOpen(false);

  return (
    <>
      <Navbar className="navbar">
        <div className="menu-left">
          <div>
            <button className="menu-bars">
              <span onClick={showSidebar}><FaIcons.FaBars /></span>
            </button>
          </div>
          <div className="page-title">
            <Link to="/">당클린</Link>
          </div>
        </div>
        <div className="menu-right">
          <UserMenu/>
        </div>
      </Navbar>
      {isOpen && <OverWrap onClick={showCloseSidebar}></OverWrap>}
      <Sidebar isOpen={isOpen} showCloseSidebar={showCloseSidebar} />
    </>
  );
}

export default Topbar;
