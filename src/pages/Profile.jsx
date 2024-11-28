import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProfile } from "../apis/user";
import styled from "styled-components";
import { getBackgroundColor, getProfileIcon } from "../components/ProfileCard";
import QuestionSection from "../components/QNA/QuestionSection";
import AnswerSection from "../components/QNA/AnswerSection";

function Profile() {
    const [profile, setProfile] = useState(null);
    const [profileIcon, setProfileIcon] = useState("");
    const [activeMenu, setActiveMenu] = useState("질문");

    useEffect(() => {
        if (!profile) return;
        setProfileIcon(getProfileIcon(profile.id));
    }, [profile]);

    useEffect(() => {
        async function fetchData() {
            try {
                const profileData = await getProfile();
                setProfile(profileData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <Wrapper>
                <UserProfile>
                    <ProfileImage id={profile?.id}>{profileIcon}</ProfileImage>
                    <UserName>{profile?.username || "Anonymous"}</UserName>
                    <UserBio>{profile?.bio || "No bio provided"}</UserBio>
                </UserProfile>
                <QNAContainer>
                    <Menu>
                        <MenuButton
                            active={activeMenu === "질문"}
                            onClick={() => setActiveMenu("질문")}
                        >
                            질문
                        </MenuButton>
                        <MenuButton
                            active={activeMenu === "답변"}
                            onClick={() => setActiveMenu("답변")}
                        >
                            답변
                        </MenuButton>
                    </Menu>
                    {activeMenu === "질문" ? <QuestionSection /> : <AnswerSection />}
                </QNAContainer>
            </Wrapper>
        </>
    );
}

export default Profile;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    padding: 50px 20px;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
`;

const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: rgba(255, 255, 255, 0.25);
    padding: 40px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
    }
`;

const ProfileImage = styled.div`
    background-color: ${(props) => getBackgroundColor(props.id)};
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    color: #fff;
    margin-bottom: 20px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
`;

const UserName = styled.h2`
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const UserBio = styled.p`
    font-size: 16px;
    color: #ddd;
    text-align: center;
    max-width: 500px;
    line-height: 1.6;
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-bottom: 30px;
`;

const MenuButton = styled.button`
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => (props.active ? "#fff" : "#ccc")};
    background: ${(props) =>
        props.active ? "rgba(255, 255, 255, 0.25)" : "transparent"};
    border: none;
    border-bottom: ${(props) =>
        props.active ? "3px solid #fff" : "3px solid transparent"};
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: #fff;
    }
`;

const QNAContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
`;
