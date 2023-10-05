import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { USER_KEY } from "constants/query_key";
import { IAuthResponse, TAuthRequest } from "models/data";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "store/loginState";
import { logInApi } from "utils/apis/userApis";
import alertHandler from "utils/functions/alertHandler";
import useStorage from "utils/functions/useStorage";

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setStorage, getStorage } = useStorage;
  const [, setIsLoggedIn] = useRecoilState(loginState);

  return useMutation<IAuthResponse, AxiosError, TAuthRequest>(
    logInApi<TAuthRequest>,
    {
      onSuccess(data) {
        if (data) {
          setStorage("accessToken", data.accessToken);
          if (getStorage("accessToken")) {
            setIsLoggedIn(true);
          }
          navigate("/");
        }
        queryClient.refetchQueries({ queryKey: [USER_KEY] });
      },
      onError(error: any) {
        if (error.status === 401) {
          alertHandler.onToast({ msg: error.data.msg, icon: "error" });
        } else if (error.status === 500) {
          alertHandler.onToast({
            msg: error.data.msg || "서버 오류, 관리자에게 문의해주세요!",
            icon: "error"
          });
        }
      }
    }
  );
};
export default useLoginMutation;
