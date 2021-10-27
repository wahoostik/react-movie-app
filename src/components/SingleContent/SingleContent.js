// == Import
import PropTypes from 'prop-types';
import { img_300, unavailable } from '../../config/config';
// import { Badge } from '@mui/material';
import { Media, Poster, Title, Subtitle, BadgeAverage } from './SingleContentStyles';

// == Composant
const SingleContent = ({id, title, date, poster, media_type, vote_average}) => (
    <Media id={id}>
        <BadgeAverage
            badgeContent={vote_average}
            color={vote_average > 8 ? 'success' : 'secondary' | vote_average < 6 ? 'warning' : 'secondary'}
        />
        <Poster
            src={poster ? `${img_300}${poster}` : unavailable}
            alt={title}>
        </Poster>
        <Title>{title}</Title>
        <Subtitle>
            {media_type === 'tv' ? 'TV Series' : 'Movie'}
            <Subtitle>{date}</Subtitle>
        </Subtitle>
    </Media>
);

SingleContent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
};

// == Export
export default SingleContent;
