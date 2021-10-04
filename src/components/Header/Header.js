// == Import
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';

// == Composant
const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Button
                className='Button'
                variant="contained"
                color='primary'
                size='small'>
                AMDb</Button>
        </Link>
        <nav className='menu'>
            <Link
                to='/'
                className='menu-link'>
                Home
            </Link>
            <Link
                to='/movies'
                className='menu-link'>
                Movies
            </Link>
            <Link
                to='/tvshows'
                className='menu-link'>
                TV Shows
            </Link>
        </nav>
        <form className='search'>
            <input type="text" placeholder="Search" />
            <button type='submit' className='search-icon'><SearchIcon /></button>
        </form>
    </div>
);

// <div className='logo'>TMDb</div>

// == Export
export default Header;
