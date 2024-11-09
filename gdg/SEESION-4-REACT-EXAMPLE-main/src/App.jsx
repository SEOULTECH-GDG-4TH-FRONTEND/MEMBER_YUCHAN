import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import ProfileCard from "./components/ProfileCard";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = styled.div`
    display: flex;
    padding: 50px 85px;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 32px;
    color: #454545;
    font-weight: 700;
`;

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 30px;
`;

function App() {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
        console.log("isLoggedIn: ", isLoggedIn);
    }, [isLoggedIn, navigate]);

    const profiles = [
        {
            id: 1,
            name: `정윤석`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 999,
        },
        {
            id: 2,
            name: `이유진`,
            bio: "안녕하세요. 질문하지 마세요.",
            questionCount: 0,
        },
        //김하늘, 노경인, 박지윤, 신민규, 오희진, 이민혁, 이서인, 이지원, 조유찬, 허정민 추가
        // bio와 questionCount는 랜덤하게 copilot이 생성
        {
            id: 3,
            name: `김하늘`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 39,
        },
        {
            id: 4,
            name: `노경인`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 23,
        },
        {
            id: 5,
            name: `박지윤`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 17,
        },
        {
            id: 6,
            name: `신민규`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 1,
        },
        {
            id: 7,
            name: `오희진`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 9,
        },
        {
            id: 8,
            name: `이민혁`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 99,
        },
        {
            id: 9,
            name: `이서인`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 43,
        },
        {
            id: 10,
            name: `이지원`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 93,
        },
        {
            id: 11,
            name: `조유찬`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 4,
        },
        {
            id: 12,
            name: `허정민`,
            bio: "안녕하세요. 질문해 주세요.",
            questionCount: 123,
        },
    ];

    return (
        <>
            <Navbar />

            <Wrapper>
                <Title>🙋🏻 누구에게 질문할까요?</Title>

                <CardWrapper>
                    {profiles.map((profile) => (
                        <ProfileCard
                            key={profile.id}
                            id={profile.id}
                            name={profile.name}
                            bio={profile.bio}
                            questionCount={profile.questionCount}
                        />
                    ))}
                </CardWrapper>
            </Wrapper>
        </>
    );
}

export default App;
