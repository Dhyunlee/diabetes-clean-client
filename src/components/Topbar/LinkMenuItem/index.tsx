import React from "react";
import { Link } from "react-router-dom";
import { NavContents } from "../styles";

interface ILinkMenuItem {
  title?: string,
  path?: string,
  cName?: string
}

interface IProps {
  menuItemData: ILinkMenuItem[]
}

const LinkMenuItem = ({menuItemData}: IProps) => {
  return (
    <>
      {menuItemData.map((item, index) => (
        <NavContents key={index} className={item.cName}>
          <Link to={item.path as string}>
            <span>{item.title}</span>
          </Link>
        </NavContents>
      ))}
    </>
  );
};

export default React.memo(LinkMenuItem);
