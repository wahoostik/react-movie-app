// == Import
import { HomeTitle, Container } from '../../Styles/globalStyles';
import { useEffect, useState } from 'react';
import { topRatedTVShows, tvshowsSelector } from '../../Redux/reducers/tvshowsSlice';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

// == Composant
const TopRatedTVShows = () => {

    const dispatch = useDispatch();
    const { tvshows, loading, hasErrors } = useSelector(tvshowsSelector);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(topRatedTVShows(page));
    }, [dispatch, page]);

    const renderTopRatedTVShows= () => {
        if (loading) return <p>Loading Top Rated TV Shows...</p>;
        if (hasErrors) return <p>Cannot Display Top Rated TV Shows...</p>;

        return tvshows.map(tvshow =>
            <div key={tvshow.id}>
                <SingleContent
                    key={tvshow.id}
                    id={tvshow.id}
                    title={tvshow.title || tvshow.name}
                    poster={tvshow.poster_path}
                    date={tvshow.first_air_date || tvshow.release_date}
                    media_type={tvshow.media_type}
                    vote_average={tvshow.vote_average}
                />
            </div>
        );
    };

    return (
        <div>
            <HomeTitle>Top Rated TV Shows</HomeTitle>
            <Container>
                {renderTopRatedTVShows()}
            </Container>
            <CustomPagination setPage={setPage}/>
        </div>
    );};

// == Export
export default TopRatedTVShows;
