import { Link } from "react-router-dom";
import { menuItemData } from "./MenuItemData";
import { NavContents } from "./styles";

const MenuItem = () => {
  return (
    <>
      {menuItemData.map((item, index) => (
        <NavContents key={index} className={item.cName}>
          <Link to={item.path}>
            <span>{item.title}</span>
          </Link>
        </NavContents>
      ))}
    </>
  );
};

export default MenuItem;
