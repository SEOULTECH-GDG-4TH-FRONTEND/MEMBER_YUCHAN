import styled from "styled-components";
import InputFields from "../components/InputFields";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { login } from "../apis/user";

function Login() {
    const navigate = useNavigate();
    const { setLogin, isLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleLogin = async () => {
        try {
            await login(email, password);
            alert("로그인 성공");
            setLogin();
        } catch (error) {
            alert("로그인 실패");
        }
    };

    return (
        <Wrapper>
            <LeftWrap>
                <Logo src="/logo.svg" alt="" />
                Hello <br />
                World!
            </LeftWrap>
            <RightWrap>
                <LoginContainer>
                    <Text>Login</Text>

                    <InputFields
                        label="이메일"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputFields
                        label="비밀번호"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                        로그인
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/signup");
                        }}
                    >
                        회원가입
                    </Button>
                </LoginContainer>
            </RightWrap>
        </Wrapper>
    );
}

export default Login;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: #f9f9f9;
    font-family: 'Poppins', sans-serif;
`;

const LeftWrap = styled.div`
    flex: 1.2;
    background: linear-gradient(145deg, #8ec5fc, #e0c3fc);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px;
    color: #ffffff;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.4;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    box-shadow: 5px 0 30px rgba(0, 0, 0, 0.1);

    > br {
        display: block;
    }
`;

const RightWrap = styled.div`
    flex: 1.8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px;
    background: #ffffff;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.05);
    position: relative;
`;

const Logo = styled.img`
    position: absolute;
    top: 40px;
    left: 40px;
    width: 100px;
    height: auto;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 420px;
    padding: 40px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

    > *:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const Text = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #4a4a4a;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 1px;
`;





