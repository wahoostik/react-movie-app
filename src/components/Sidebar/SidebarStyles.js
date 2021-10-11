import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    background: #0e1a33;
    height: 72px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SidebarNav = styled.nav`
    background: #0e1a33;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;