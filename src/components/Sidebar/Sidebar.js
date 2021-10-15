import { Nav, NavIcon, SidebarNav, SidebarWrap, ButtonLink } from './SidebarStyles';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useMediaQuery } from 'react-responsive';



// == Composant
const Sidebar = () =>{
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    // React Responsive
    const isBigScreen = useMediaQuery({ query: '(min-width: 600px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 400px)' });
    
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to="#">
                        <ButtonLink
                            variant="contained"
                            onClick={showSidebar} >
                            <FaIcons.FaBars onClick={showSidebar} />
                            {isBigScreen && <h2>Menu</h2>}
                            {isTabletOrMobile && <h2></h2>}
                        </ButtonLink>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineCloseCircle onClick={showSidebar}/>
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </div>
    );};

// == Export
export default Sidebar;