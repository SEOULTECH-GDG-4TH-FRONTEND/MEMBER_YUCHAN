import styled from "styled-components";
import InputFields from "../components/InputFields";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

const LeftWrap = styled.div`
    flex: 1;
    background: linear-gradient(to bottom, #0644e1, #6285dd);
    display: flex;
    align-items: center;
    padding-left: 65px;
    color: white;
    font-size: 64px;
    font-weight: 900;
    line-height: 1.2;
    position: relative;
`;

const RightWrap = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 65px;
    width: 100%;
`;

const Logo = styled.img`
    position: absolute;
    top: 47px;
`;

const LoginContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
`;

const Text = styled.h1`
    font-size: 48px;
    margin-bottom: 44px;
`;

function Login() {
    const navigate = useNavigate();
    const { login, isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
        console.log("isLoggedIn: ", isLoggedIn);
    }, [isLoggedIn, navigate]);

    return (
        <Wrapper>
            <LeftWrap>
                <Logo src="/logo.svg" alt="" />
                Welcome <br />
                Back!
            </LeftWrap>
            <RightWrap>
                <LoginContainer>
                    <Text>Login</Text>

                    <InputFields label="로그인" />
                    <InputFields label="비밀번호" />

                    <Button
                        onClick={() => {
                            login();
                            navigate("/");
                        }}
                    >
                        로그인
                    </Button>
                    <Button>회원가입</Button>
                </LoginContainer>
            </RightWrap>
        </Wrapper>
    );
}

export default Login;
