import SubMenu from "components/Base/SubMenu";

interface MenuItemType {
  id: number;
  path: string | null;
  label: string;
  handler?: any;
}

interface IProps {
  showUserSubMenu: boolean;
  onCloseMenu: () => void;
  menuItem: MenuItemType[];
}

const SideMenu = ({ menuItem, showUserSubMenu, onCloseMenu }: IProps) => {
  return (
    <>
      {showUserSubMenu && (
        <SubMenu
          menuItem={menuItem}
          showSubMenu={showUserSubMenu}
          onCloseMenu={onCloseMenu}
          customCss={{posX: '55px', posY: '-50px', width: '90px' }}
        />
      )}
    </>
  );
};

export default SideMenu;
