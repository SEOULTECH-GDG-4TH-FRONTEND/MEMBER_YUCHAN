import styled from "styled-components";
import InputFields from "../components/InputFields";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { signup } from "../apis/user";

function SignUp() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleSignup = async () => {
        try {
            await signup(username, password1, password2, email);
            alert("회원가입 성공");
            navigate("/login");
        } catch (error) {
            alert("회원가입 실패");
        }
    };

    return (
        <Wrapper>
            <LeftWrap>
                <Logo src="/logo.svg" alt="Logo" />
                Join <br />
                Us!
            </LeftWrap>
            <RightWrap>
                <SignUpContainer>
                    <Text>Sign Up</Text>
                    <InputFields
                        label="이메일"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <InputFields
                        label="비밀번호"
                        type="password"
                        onChange={(e) => {
                            setPassword1(e.target.value);
                        }}
                    />
                    <InputFields
                        label="비밀번호 확인"
                        type="password"
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                    />
                    <InputFields
                        label="닉네임"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <Button
                        onClick={() => {
                            handleSignup();
                        }}
                    >
                        회원가입
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        돌아가기
                    </Button>
                </SignUpContainer>
            </RightWrap>
        </Wrapper>
    );
}

export default SignUp;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: #f9f9f9;
    font-family: 'Poppins', sans-serif;
`;

const LeftWrap = styled.div`
    flex: 1;
    background: linear-gradient(145deg, #8ec5fc, #e0c3fc);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    color: white;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.4;
    text-align: center;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    box-shadow: 5px 0 30px rgba(0, 0, 0, 0.1);
`;

const RightWrap = styled.div`
    flex: 1;
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
    width: 100px;
    height: auto;
    margin-bottom: 20px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
`;

const SignUpContainer = styled.div`
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
