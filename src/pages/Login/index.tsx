import React from "react";

import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { logInApi, userStateApi } from "utils/apis";

import {
  Container,
  FormWrap,
  InputGroup,
  InputName,
  InputWrap,
  FrmBtnContainer,
  Valid,
} from "../SignUp/styles";
import { IUser } from "typings/db";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery<IUser>("user", userStateApi, {
    cacheTime: 60 * 1000 * 3,
  });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isLogInError, setIsLogInError] = useState(false);

  const { email, password } = inputs;

  useEffect(() => {
    if (userData) {
      navigate("/", { replace: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const onFormChange = useCallback(
    (e: any) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value.trim(),
      });
    },
    [inputs]
  );

  const mutation = useMutation<
    IUser,
    AxiosError,
    { email: string; password: string }
  >("user", (data) => logInApi(data).then((response) => response.data), {
    onMutate() {
      setIsLogInError(false);
    },
    onSuccess() {
      queryClient.refetchQueries("user");
    },
    onError(error: any) {
      if (error.status === 401) {
        setErrorMsg(error.data);
        setIsLogInError(true);
      }
    },
  });

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const userInfo = {
        email,
        password,
      };

      if (password && email) {
        mutation.mutate(userInfo);
      }
      setInputs({
        email: "",
        password: "",
      });
    },
    [email, mutation, password]
  );

  return (
    <Container>
      <h1 className="title">
        <span style={{ fontSize: "25px" }}>로그인</span>
      </h1>
      <FormWrap>
        <form onSubmit={onSubmit}>
          <InputGroup>
            <InputName htmlFor="email">이메일</InputName>
            <InputWrap
              style={{
                width: "296px",
              }}
            >
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: "100%",
                }}
                placeholder="이메일을 입력해주세요"
                onChange={onFormChange}
                value={email}
              />
            </InputWrap>
          </InputGroup>
          <InputGroup>
            <InputName htmlFor="pw">비밀번호</InputName>
            <InputWrap
              style={{
                width: "296px",
              }}
            >
              <input
                type="password"
                id="password"
                name="password"
                required
                style={{
                  width: "100%",
                }}
                placeholder="비밀번호를 입력해주세요"
                onChange={onFormChange}
                value={password}
              />
            </InputWrap>
            {isLogInError && (
              <Valid
                className="error"
                style={{ width: "100%", marginTop: 10, textAlign: "center" }}
              >
                {errorMsg}
              </Valid>
            )}
          </InputGroup>
          <FrmBtnContainer>
            <button
              type="reset"
              style={{
                width: 143,
              }}
              onClick={(e) => {
                e.preventDefault();
                console.log("취소");
                setInputs({
                  ...inputs,
                  email: "",
                  password: "",
                });
                console.log(password);
                navigate("/");
              }}
            >
              취소하기
            </button>
            <button
              type="submit"
              style={{
                width: 143,
              }}
            >
              로그인
            </button>
            <div className="auth-msg">
              <span>
                아직 회원이 아니신가요? &nbsp;
                <Link to="/signup">회원가입</Link>하기
              </span>
            </div>
          </FrmBtnContainer>
        </form>
      </FormWrap>
    </Container>
  );
};

export default React.memo(Login);
