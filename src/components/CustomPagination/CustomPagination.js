// == Import
import { createTheme, Pagination, ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';
import { PaginationStyle } from './CustomPaginationStyles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// == Composant
const CustomPagination = ({ setPage, numOfPages }) => {

    const handlePageChange = (page) => {
        setPage(page);
        // Scroll qui remonte lors du changement de page
        window.scroll(0, 0);
    };
    
    return (
        <ThemeProvider theme={theme}>
            <PaginationStyle>
                <Pagination
                    count={numOfPages}
                    color="primary"
                    size="large"
                    onChange={(event) => handlePageChange(event.target.textContent)}
                    hideNextButton
                    hidePrevButton
                />
            </PaginationStyle>
        </ThemeProvider>
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
