// == Import
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './SidebarStyles';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

// == Composant
const Sidebar = () =>{
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <div>
            <Nav>
                <NavIcon to="#">
                    <FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                </SidebarWrap>
            </SidebarNav>
        </div>
    );};

// == Export
export default Sidebar;