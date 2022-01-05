// == Import
import { HomeTitle, Container } from '../../Styles/globalStyles';
import { useEffect, useState } from 'react';
import { mostPopularTVShows, tvshowsSelector } from '../../Redux/reducers/tvshowsSlice';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/Content/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

// == Composant
const MostPopularTVShows = () => {

    const dispatch = useDispatch();
    const { tvshows, loading, hasErrors } = useSelector(tvshowsSelector);
    //console.log('useSelector toolkit :', tvshows);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(mostPopularTVShows(page));
    }, [dispatch, page]);

    const renderMostPopularTVShows= () => {
        if (loading) return <p>Loading Most Popular TV Shows...</p>;
        if (hasErrors) return <p>Cannot Display Most Popular TV Shows...</p>;

        return tvshows.map(tvshow =>
            <div key={tvshow.id}>
                <SingleContent
                    key={tvshow.id}
                    id={tvshow.id}
                    title={tvshow.title || tvshow.name}
                    poster={tvshow.poster_path}
                    date={tvshow.first_air_date || tvshow.release_date}
                    media_type="tv"
                    vote_average={tvshow.vote_average}
                />
            </div>
        );
    };

    return (
        <div>
            <HomeTitle>Most Popular TV Shows</HomeTitle>
            <Container>
                {renderMostPopularTVShows()}
            </Container>
            <CustomPagination setPage={setPage}/>
        </div>
    );};

// == Export
export default MostPopularTVShows;
