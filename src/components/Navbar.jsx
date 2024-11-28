import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { logout } from "../apis/user";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px auto;
    max-width: 1200px;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    }
`;

const Brand = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: #007aff;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

    img {
        height: 40px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
`;

const MenuItem = styled.li`
    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        background: linear-gradient(135deg, #007aff, #00c6ff);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        &:hover {
            background: linear-gradient(135deg, #0056b3, #007aff);
            transform: scale(1.05);
            box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
        }
    }
`;

function Navbar() {
    const { setLogout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            alert("로그아웃 성공");
        } catch (error) {
            alert("로그아웃 실패");
        }
        setLogout();
    };

    return (
        <NavbarContainer>
            <Brand>
                <Link to="/">
                    <img src="/logo_blue.svg" alt="Brand Logo" />
                </Link>
            </Brand>
            <Menu>
                <MenuItem>
                    <Link to="/profile">
                        <FaUserCircle size={20} />
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login" onClick={handleLogout}>
                        <FaSignOutAlt size={20} />
                        Logout
                    </Link>
                </MenuItem>
            </Menu>
        </NavbarContainer>
    );
}

export default Navbar;
