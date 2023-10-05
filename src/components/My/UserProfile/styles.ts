import { palette } from "libs/palette";
import styled from "@emotion/styled";

export const ProfileBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 45px 0;
  margin: 30px 0px;
  box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 20%);
  .user-info {
    margin-bottom: 20px;
    font-size: 18px;
    text-align: center;
  }
`;

export const ProfileContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
`;

export const EditBtnWrap = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 150px;
  border: 1px solid gray;
  background-color: ${palette.gray[1]};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  user-select: none;
  .icon-wrap {
    width: 15px;
    position: relative;
    .icon {
      position: absolute;
      top: -9px;
      font-size: 18px;
    }
  }
  .btn-name {
    font-size: 16px;
  }

  &:active {
    transform: translateY(3px);
  }
`;
