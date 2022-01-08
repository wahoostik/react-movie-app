// == Import
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.scss';

// == Composant
const SearchBar = () => {



    return (
        <div className='search-bar'>
            <form
                className='search'>
                <input
                    type="text"
                    placeholder="Search"
                />
                <button type='submit' className='search-icon'><SearchIcon/></button>
            </form>
        </div>
    );
};

// == Export
export default SearchBar;
