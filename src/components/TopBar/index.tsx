import React, { useLayoutEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "components/Base/Sidebar";
import { Navbar, OverWrap } from "./styles";
import UserMenu from "./UserMenu";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetPath, setTargetPath] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    setTargetPath(location.pathname === "/story");
  }, [location.pathname]);

  const showSidebar = () => setIsOpen(true);
  const showCloseSidebar = () => setIsOpen(false);

  return (
    <>
      <Navbar className="navbar">
        <div className="menu-left">
          <div>
            <button className="menu-bars">
              <span onClick={showSidebar}>
                <FaIcons.FaBars />
              </span>
            </button>
          </div>
          <div className="page-title">
            <Link to="/">
              <img width={100} src="/images/logo.png" alt="logo-img" />
            </Link>
          </div>
        </div>
        <div>{targetPath && <div>검색어 기능 구현중</div>}</div>
        <div className="menu-right">
          <UserMenu />
        </div>
      </Navbar>
      {isOpen && <OverWrap onClick={showCloseSidebar}></OverWrap>}
      <Sidebar isOpen={isOpen} showCloseSidebar={showCloseSidebar} />
    </>
  );
};

export default Topbar;
