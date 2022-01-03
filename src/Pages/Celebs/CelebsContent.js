// == Import
import PropTypes from 'prop-types';
import { img_300, unavailable } from '../../config/config';
import { Media, Poster, Name, Popularity } from './CelebsContentStyles';

// == Composant
const CelebsContent = ({id, name, poster, popularity}) => (
    <Media id={id}>
        <Poster
            src={poster ? `${img_300}${poster}` : unavailable}
            alt={name}>
        </Poster>
        <Name>{name}</Name>
        <Popularity>Popularity : {popularity}</Popularity>
    </Media>
);

CelebsContent.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired
};

// == Export
export default CelebsContent;
