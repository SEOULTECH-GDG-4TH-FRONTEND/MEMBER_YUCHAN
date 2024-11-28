import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { createAnswer } from "../apis/qna";
import { getBackgroundColor, getProfileIcon } from "../components/ProfileCard";
import { getUser } from "../apis/user";

function Answer() {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, questionId } = location.state || {};
    const [profileIcon, setProfileIcon] = useState("");
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await getUser(user.id);
                setProfileIcon(getProfileIcon(response.id));
                setUserInfo(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserInfo();
    }, [user.id]);

    const [content, setContent] = useState("");

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    if (!user) {
        return <div>유저 정보가 없습니다.</div>;
    }

    const handleSubmit = async () => {
        try {
            await createAnswer({ questionId, content });
            alert("답변을 성공적으로 작성했습니다.");
            navigate("/");
        } catch {
            alert("답변을 작성하는 데 실패했습니다.");
        }
    };

    return (
        <>
            <Navbar />
            <Wrapper>
                <Title>🙋🏻 답변할게요!</Title>
                <CardContainer>
                    <ProfileImage id={userInfo.id}>{profileIcon}</ProfileImage>
                    <UserInfo>
                        <UserName>{userInfo.username}</UserName>
                        <UserBio>{userInfo.bio}</UserBio>
                    </UserInfo>
                </CardContainer>
                <AnswerArea
                    placeholder="답변을 입력하세요..."
                    onChange={(e) => setContent(e.target.value)}
                />
                <StyledButton onClick={handleSubmit}>답변하기</StyledButton>
            </Wrapper>
        </>
    );
}

export default Answer;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    background: linear-gradient(135deg, #43cea2, #185a9d);
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 40px;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
`;

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
    }
`;

const ProfileImage = styled.div`
    background-color: ${(props) => getBackgroundColor(props.id)};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const UserName = styled.h2`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
`;

const UserBio = styled.p`
    font-size: 14px;
    color: #ddd;
`;

const AnswerArea = styled.textarea`
    width: 100%;
    max-width: 800px;
    height: 200px;
    padding: 20px;
    font-size: 16px;
    border-radius: 16px;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    resize: none;
    outline: none;
    margin-bottom: 20px;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

const StyledButton = styled(Button)`
    background: linear-gradient(135deg, #ff512f, #dd2476);
    color: #fff;
    font-weight: bold;
    border: none;
    padding: 10px 30px;
    border-radius: 20px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(135deg, #dd2476, #ff512f);
        transform: scale(1.05);
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
    }
`;
