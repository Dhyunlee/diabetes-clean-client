import React from "react";
import { Link } from "react-router-dom";
import { NavContents } from "components/TopBar/styles";
import { MenuItemType } from "typings/menuItem";

interface IProps {
  menuItemData: MenuItemType[];
  showCloseSidebar: () => void;
}

const LinkMenuItem = ({ menuItemData, showCloseSidebar }: IProps) => {
  return (
    <>
      {menuItemData?.map((item, index) => (
        <NavContents key={index} className={item.label}>
          <Link to={item.path as string} onClick={showCloseSidebar}>
            <span>{item.label}</span>
          </Link>
        </NavContents>
      ))}
    </>
  );
};

export default React.memo(LinkMenuItem);
