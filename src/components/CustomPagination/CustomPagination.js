// == Import
import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';
import { PaginationStyle } from './CustomPaginationStyles';

// == Composant
const CustomPagination = ({ setPage, numOfPages }) => {

    const handlePageChange = (page) => {
        setPage(page);
        // Scroll qui remonte lors du changement de page
        window.scroll(0, 0);
    };
    
    return (
        <PaginationStyle>
            <Pagination
                count={numOfPages}
                color="primary"
                onChange={(event) => handlePageChange(event.target.textContent)}/>
        </PaginationStyle>
    );
};
    
CustomPagination.propTypes = {
    setPage: PropTypes.number.isRequired,
    numOfPages: PropTypes.number.isRequired
};

CustomPagination.defaultProps = {
    numOfPages: 20
};

// == Export
export default CustomPagination;
