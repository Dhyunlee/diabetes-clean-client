import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkemailApi, postUserApi } from "utils/apis";
import { checkValidation } from "utils/validation";

import {
  FormBtn,
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
  const [isSucessSignUp, setIsSucessSignUp] = useState(false);

  const [isCompleteState, setIsCompleteState] = useState(false);
  const [isComplete, setIsComplete] = useState({
    isCompleteEmail: false,
    isCompletePw: false,
    isCompleteNickname: false,
  });

  const { email, password, passwordCheck, nickname } = inputs;

  // useEffect(() => console.log({ isComplete }), [isComplete]);
  useEffect(() => {
    const result = Object.values(isComplete).every(item => !!item);
    setIsCompleteState(result);
  }, [isComplete]);

  const onFormChange = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value.trim(),
    });
    isFormValue.current = true;
  };

  const onClickCheckEmail = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isEmail) {
      try {
        const resResult = await checkemailApi(email);
        alert(resResult.data.msg);
        setIsCheckEmail(true);
        setIsComplete({
          ...isComplete,
          isCompleteEmail: true,
        });
      } catch (error: any) {
        alert(error.response.data.msg);
        setIsCheckEmail(false);
        setIsComplete({
          ...isComplete,
          isCompleteEmail: false,
        });
      }
    } else {
      alert("이메일을 입력해주세요!");
      setIsComplete({
        ...isComplete,
        isCompleteEmail: false,
      });
    }
  };

  const checkPw = (p1: string, p2: string) => p1 === p2;
  const onClickCheckPw = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let isCheck = password && checkPw(password, passwordCheck);
    console.log(isCheck);
    // console.log('유효성 o');
    if (isCheck) {
      alert("비밀번호가 일치합니다.");
      setIsCheckPw(true);
      setIsComplete({
        ...isComplete,
        isCompletePw: true,
      });
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      setIsCheckPw(false);
      setIsComplete({
        ...isComplete,
        isCompletePw: false,
      });
      setInputs({
        ...inputs,
        password: "",
        passwordCheck: "",
      });
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const userInfo = {
      email,
      nickname,
      password,
    };
    if (isCheckEmail && isCheckPw && nickname) {
      console.log({ userInfo });
      try {
        const resResult = await postUserApi(userInfo);
        console.log(resResult);
        setIsSucessSignUp(true);
      } catch (err: any) {
        if (err.status === 504) {
          console.error("Network Error");
          setIsSucessSignUp(false);
        }
        window.alert(err.data);
      }
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
            <InputName htmlFor="email">이메일</InputName>
            <InputWrap>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isCheckEmail ? true : false}
                placeholder="이메일을 입력해주세요"
                autoComplete="off"
                onChange={onFormChange}
                onFocus={(e) =>
                  setIsFocus({
                    ...isFocus,
                    isEmail: true,
                  })
                }
                onBlur={(e) => setIsEmail(checkValidation(e))}
                value={email}
              />
              <div className="buttonWrap">
                <FormBtn
                  className={`${isCheckEmail && "not-allowed"}`}
                  top="0px"
                  type="button"
                  disabled={isCheckEmail ? true : false}
                  onClick={onClickCheckEmail}
                >
                  중복확인
                </FormBtn>
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
            <InputName htmlFor="pw">비밀번호</InputName>
            <InputWrap>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="input-width"
                placeholder="비밀번호를 입력해주세요"
                disabled={isCheckPw ? true : false}
                onChange={onFormChange}
                onBlur={(e) => setIsPw(checkValidation(e))}
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
            <InputName htmlFor="passwordCheck">비밀번호 확인</InputName>
            <InputWrap>
              <input
                type="password"
                id="passwordCheck"
                name="passwordCheck"
                required
                placeholder="비밀번호 확인해주세요"
                disabled={isCheckPw ? true : false}
                onChange={onFormChange}
                value={passwordCheck}
              />
              <FormBtn
               className={`${isCheckPw && "not-allowed"}`}
                top="0"
                type="button"
                onClick={onClickCheckPw}
                disabled={isCheckPw ? true : false}
              >
                비밀번호 확인
              </FormBtn>
            </InputWrap>
          </InputGroup>
          <InputGroup>
            <InputName htmlFor="nickname">닉네임</InputName>
            <InputWrap>
              <input
                type="text"
                required
                id="nickname"
                className="input-width"
                name="nickname"
                placeholder="닉네임을 입력해주세요"
                autoComplete="off"
                onBlur={(e) =>
                  String(e.target.value).length !== 0
                    ? setIsComplete({
                        ...isComplete,
                        isCompleteNickname: true,
                      })
                    : setIsComplete({
                        ...isComplete,
                        isCompleteNickname: false,
                      })
                }
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
                navigate("/");
              }}
            >
              취소하기
            </button>
            <button
             className={`${isCompleteState ? '' : 'not-allowed'}`}
              type="submit"
              disabled={isCompleteState ? false : true}
              style={{ width: "152px" }}
            >
              회원가입
            </button>
            <div className="auth-msg">
              <span>
                회원이 이신가요? &nbsp;
                <Link to="/login">로그인</Link>하기
              </span>
              {isSucessSignUp && (
                <span style={{ display: "block", color: "#d63d17" }}>
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
