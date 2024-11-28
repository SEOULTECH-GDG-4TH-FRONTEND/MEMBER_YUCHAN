import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const getBackgroundColor = (id) => {
    const colors = ["#FF6F61", "#5FAD41", "#F8B195", "#355C7D"];
    return colors[id % colors.length];
};

export const getProfileIcon = (id) => {
    const icons = ["🎨", "🚀", "🎵", "📚"];
    return icons[id % icons.length];
};

const ProfileCard = ({ id, name, bio, questionCount, onClick }) => {
    const [profileIcon, setProfileIcon] = useState("");

    useEffect(() => {
        setProfileIcon(getProfileIcon(id));
    }, [id]);

    return (
        <CardContainer onClick={onClick}>
            <ProfileImage id={id}>{profileIcon}</ProfileImage>
            <UserName>{name}</UserName>
            <UserBio>{bio}</UserBio>
            <QuestionCount>💬 질문 {questionCount}개</QuestionCount>
        </CardContainer>
    );
};

export default ProfileCard;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
    }
`;

const ProfileImage = styled.div`
    background-color: ${(props) => getBackgroundColor(props.id)};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
`;

const UserName = styled.h2`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
    margin-top: 15px;
`;

const UserBio = styled.p`
    font-size: 14px;
    color: #ddd;
    margin: 5px 0;
`;

const QuestionCount = styled.p`
    font-size: 14px;
    color: #ccc;
    margin-top: 10px;
`;
