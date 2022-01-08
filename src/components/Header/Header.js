// == Import
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
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
                🎬 AMDb 🎥</Button>
        </NavLink>
    </div>
);

// == Export
export default Header;
