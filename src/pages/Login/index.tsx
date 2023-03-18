import React from "react";

import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { logInApi, getUserApi } from "utils/apis/userApis";
// import { useCookies } from "react-cookie";

import {
  Container,
  FormWrap,
  InputGroup,
  InputName,
  InputWrap,
  FrmBtnContainer,
  Valid,
} from "../SignUp/styles";
import { IUserResponse, IAuthResponse } from "models/db";
import { AxiosError } from "axios";
import { setCookie } from "utils/functions/cookie";
import dayjs from "dayjs";

const expires = dayjs().add(1, "day");

const Login = () => {
  // const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: userData } = useQuery<IUserResponse>("user", getUserApi, {
    refetchOnWindowFocus: false,
  });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isSucessLogIn, setIsSucessLogIn] = useState(false);

  const { email, password } = inputs;

  useEffect(() => {
    if (userData) {
      navigate("/", { replace: false });
    }
  }, [navigate, userData]);

  const onFormChange = useCallback(
    (e: any) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value.trim(),
      });
    },
    [inputs]
  );
  const mutation = useMutation<IAuthResponse, AxiosError, { email: string; password: string }>(
    "user",
    () => logInApi(inputs),
    {
      onMutate() {
        setIsSucessLogIn(true);
      },
      onSuccess(data) {
        if (data) {
          setCookie("token", data.token, {
            path: '/',
            expires: new Date(dayjs().add(3, "day").format()), //3일
          });
        }
        queryClient.refetchQueries("user");
      },
      onError(error: any) {
        console.log({login: error})
        if (error.status === 401) {
          setErrorMsg(error.data.msg);
          setIsSucessLogIn(false);
        } else if (error.status === 500) {
          setErrorMsg("서버 오류, 잠시후 시도해주세요");
          setIsSucessLogIn(false);
        }
      },
    }
  );

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
            {!isSucessLogIn && (
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
