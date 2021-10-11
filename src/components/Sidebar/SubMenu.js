import { SidebarLink, SidebarLabel, DropdownLink } from './SidebarStyles';
import PropTypes from 'prop-types';
import { useState } from 'react';

// == Composant
const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <div className='submenu'>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&
        item.subNav.map((item, index) => {
            return (
                <DropdownLink to={item.subPath} key={index}>
                    <SidebarLabel>{item.subTitle}</SidebarLabel>
                </DropdownLink>
            );
        })}
        </div>
    );};

SubMenu.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        iconOpened: PropTypes.element,
        iconClosed: PropTypes.element,
        subNav: PropTypes.array,
        subPath: PropTypes.string,
        subTitle: PropTypes.string,
    })
};

// == Export
export default SubMenu;
