import axios from "axios";
import { useCallback } from "react";

import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  CheckBtn,
  Container,
  FormWrap,
  InputGroup,
  InputName,
  InputWrap,
  Valid,
  FrmBtnContainer,
} from "./styles";

const SignUp = () => {
  const navigate = useNavigate();

  const isFormValue = useRef(false);
  const [inputs, setInputs] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const [isEmail, setIsEmail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isFocus, setIsFocus] = useState({
    isEmail: false,
    isPw: false,
  });

  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [isCheckPw, setIsCheckPw] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);
  const [isValidation, setIsValidation] = useState(false);

  const { email, password, passwordCheck, nickname } = inputs;

  const isValidValue = (e: any) => {
    const { name, value } = e.target;
    const isValidProps = {
      isValidEmail:
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{3,6}(?:\.[a-z]{2})?)$/,
      isPw: /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/,
    };

    switch (name) {
      case "email":
        setIsEmail(isValidProps["isValidEmail"].test(value));
        break;
      case "password":
        setIsPw(isValidProps["isPw"].test(value.trim()));
        break;
      default:
        return false;
    }
  };

  const onFormChange = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value.trim(),
    });
    isFormValue.current = true;
  };

  const onCheckEmail = useCallback(() => {
    if (isEmail) {
      setIsCheckEmail(false);
      axios
        .post("/api/auth/checkemail", { email })
        .then((res) => {
          alert(res.data.msg);
          setIsCheckEmail(true);
        })
        .catch((err) => {
          console.error(err);
          alert(err.response?.data.msg);
          setIsCheckEmail(false);
        });
    } else {
      alert("이메일을 입력해주세요!");
    }
  }, [isEmail, email]);

  const checkPw = (p1: string, p2: string) => p1 === p2;
  const onClickCheckPw = (e: any) => {
    let isCheck = password && checkPw(password, passwordCheck);
    console.log(isCheck);
    // console.log('유효성 o');
    if (isCheck) {
      alert("비밀번호가 일치합니다.");
      setIsCheckPw(true);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      setIsCheckPw(false);
      setInputs({
        ...inputs,
        password: "",
        passwordCheck: "",
      });
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userInfo = {
      email,
      nickname,
      password,
    };

    if (isCheckEmail && isCheckPw && nickname) {
      console.log({ userInfo });

      axios.post("/api/users", userInfo).then((res) => {
        console.log(res.data);
        setIsSignUp(res.data.data);
        navigate("/", { replace: true });
      });
    }
  };

  return (
    <Container>
      <h1 className="title">
        <span style={{ fontSize: "25px" }}>회원가입</span>
      </h1>
      <FormWrap>
        <form onSubmit={onSubmit}>
          <InputGroup>
            <InputName htmlFor="email">
              이메일<span className="icon">*</span>
            </InputName>
            <InputWrap>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isCheckEmail ? true : false}
                placeholder="이메일"
                autoComplete="off"
                onChange={onFormChange}
                onFocus={(e) =>
                  setIsFocus({
                    ...isFocus,
                    isEmail: true,
                  })
                }
                onBlur={isValidValue}
                value={email}
              />
              <div className="buttonWrap">
                <CheckBtn
                  className={`${isCheckEmail && "not-allowed"}`}
                  top="0px"
                  type="button"
                  disabled={isCheckEmail ? true : false}
                  onClick={onCheckEmail}
                >
                  중복확인
                </CheckBtn>
              </div>
              {isFocus.isEmail && (
                <Valid className={`valid ${isEmail ? "success" : "error"}`}>
                  {isEmail
                    ? "이메일 형식이 올바릅니다."
                    : "이메일 형식이 올바르지 않습니다."}
                </Valid>
              )}
            </InputWrap>
          </InputGroup>
          <InputGroup>
            <InputName htmlFor="pw">
              비밀번호<span className="icon">*</span>
            </InputName>
            <InputWrap>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="input-width"
                placeholder="비밀번호"
                disabled={isCheckPw ? true : false}
                onChange={onFormChange}
                onBlur={isValidValue}
                onFocus={(e) =>
                  setIsFocus({
                    ...isFocus,
                    isPw: true,
                  })
                }
                value={password}
              />
              {isFocus.isPw && (
                <Valid className={`valid ${isPw ? "success" : "error"}`}>
                  {isPw
                    ? "비밀 번호 형식이 올바릅니다."
                    : "문자와 특수문자 조합의 6 ~ 24자리를 입력"}
                </Valid>
              )}
            </InputWrap>
          </InputGroup>
          <InputGroup>
            <InputName htmlFor="passwordCheck">
              비밀번호 확인
              <span className="icon">*</span>
            </InputName>
            <InputWrap>
              <input
                type="password"
                id="passwordCheck"
                name="passwordCheck"
                required
                placeholder="비밀번호 확인"
                disabled={isCheckPw ? true : false}
                onChange={onFormChange}
                value={passwordCheck}
              />
              <CheckBtn
                top="0"
                type="button"
                onClick={onClickCheckPw}
                disabled={isCheckPw ? true : false}
              >
                비밀번호 확인
              </CheckBtn>
            </InputWrap>
          </InputGroup>
          <InputGroup>
            <InputName htmlFor="nickname">
              닉네임<span className="icon">*</span>
            </InputName>
            <InputWrap>
              <input
                type="text"
                required
                id="nickname"
                className="input-width"
                name="nickname"
                placeholder="닉네임"
                autoComplete="off"
                onChange={onFormChange}
                value={nickname}
              />
            </InputWrap>
          </InputGroup>
          <FrmBtnContainer top={"-20px"}>
            <button
              type="reset"
              style={{ width: "152px" }}
              onClick={(e) => {
                e.preventDefault();
                console.log("취소");
                setInputs({
                  ...inputs,
                  email: "",
                  password: "",
                  passwordCheck: "",
                  nickname: "",
                });
                console.log(password);
                navigate(-1);
              }}
            >
              취소하기
            </button>
            <button type="submit" style={{ width: "152px" }}>
              회원가입
            </button>
          <div className="auth-msg">
            <span>
              회원이 이신가요? &nbsp;
              <Link to="/login">로그인</Link>하기
            </span>
            {isSignUp && (
              <span style={{ color: "#880e4f" }}>
                가입되었어요^^ 로그인해주세요!
              </span>
            )}
          </div>
          </FrmBtnContainer>
        </form>
      </FormWrap>
    </Container>
  );
};

export default SignUp;
