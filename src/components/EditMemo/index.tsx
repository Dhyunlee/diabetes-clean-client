import {
  SubmenuContainer,
} from "components/Memo/styles";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "styles/common";
import { EditBody, EditHeader } from "./styles";

const EditMemo = () => {
  return (
    <Container>
      <EditHeader>
        <div className="memo-title">
          <span>당수치 기록하기</span>
        </div>
        <SubmenuContainer>
          <ul className="menu">
            <li className="menu-item">
              <NavLink
                className="navLink-active"
                to="/new-memo/diabetes"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#000" : "gray",
                  };
                }}
              >
                당수치 기록
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/new-memo/diet"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#000" : "gray",
                  };
                }}
              >
                식단 기록
              </NavLink>
            </li>
          </ul>
        </SubmenuContainer>
      </EditHeader>
      <EditBody>
        <Outlet />
      </EditBody>
    </Container>
  );
};

export default EditMemo;
