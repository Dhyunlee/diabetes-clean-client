import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
// import './style.css';
import Sidebar from "./Sidebar";
import { Navbar, OverWrap } from "./styles";
import UserMenu from './UserMenu';

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
              <FaIcons.FaBars onClick={showSidebar} />
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
