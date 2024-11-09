import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #fcfcfc;
    color: #373737;
    box-shadow: 0 4px 6.6px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
    font-size: 1.5rem;
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 40px;
`;

const MenuItem = styled.li`
    a {
        color: #373737;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.3s;
    }
`;

function Navbar() {
    const { logout } = useAuth();
    return (
        <NavbarContainer>
            <Brand>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    <img src="/logo_blue.svg" alt="" />
                </Link>
            </Brand>
            <Menu>
                <MenuItem>
                    <Link to="/">Profile</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login" onClick={logout}>
                        Logout
                    </Link>
                </MenuItem>
            </Menu>
        </NavbarContainer>
    );
}

export default Navbar;
