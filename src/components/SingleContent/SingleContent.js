// == Import
import PropTypes from 'prop-types';

// == Composant
const SingleContent = ({id, title}) => (
    <div className='movie-card' id={id}>
        <h1 className="title">{title}</h1>
    </div>
);

SingleContent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

// == Export
export default SingleContent;
