import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled as styledMaterial } from '@mui/material/styles';

// == Sidebar

export const Nav = styled.div`
    position: fixed;
    left: 5%;
    top: 0;
    background: #0e1a33;
    height: 72px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    {
        @media screen and (max-width: 1510px) {
        position: sticky;
        }
    }
`;

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ButtonLink = styledMaterial(Button)`
    background-color:#0e1a33;
    text-transform:inherit;
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 35px;
    border-radius: 8px;
    align-items: center;
    border: 2px solid #1565C0;
    text-indent: 10px;
    &:hover {
        background: #112042;
        cursor: pointer;
    }
`;

export const SidebarNav = styled.nav`
    background: #0e1a33;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    {
        @media screen and (max-width: 1620px) {
        width: 250px;
        top: 70px;
        }
    }
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;

// == SubMenu

export const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 1.25rem;
    font-family: poppins;
    font-weight: 500;
    &:hover {
        background: #112042;
        border-left: 4px solid #1565C0;
        cursor: pointer;
    }
`;

export const SidebarLabel = styled.span`
    margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
    background: #112042;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    &:hover {
        background: #1565C0;
        cursor: pointer;
    }
`;