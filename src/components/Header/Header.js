// == Import
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
import Sidebar from '../Sidebar/Sidebar';

// == Composant
const Header = () => (
    <div className='header'>
        <Sidebar />
        <NavLink to='/'>
            <Button
                className='Button'
                variant="contained"
                color='primary'
                size='small'>
                AMDb</Button>
        </NavLink>
        <nav className='menu'>
            <NavLink
                to='/'
                className='menu-link'>
                Home
            </NavLink>
            <NavLink
                to='/movies'
                className='menu-link'>
                Movies
            </NavLink>
            <NavLink
                to='/tvshows'
                className='menu-link'>
                TV Shows
            </NavLink>
        </nav>
        <form className='search'>
            <input type="text" placeholder="Search" />
            <button type='submit' className='search-icon'><SearchIcon/></button>
        </form>
    </div>
);

// <div className='logo'>TMDb</div>

// == Export
export default Header;
