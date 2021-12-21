// == Import
import { HomeTitle, TVShows } from './TVShowsStyles';
import { useEffect } from 'react';
import { mostPopularTVShows, moviesSelector } from '../../Redux/reducers/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/SingleContent/SingleContent';

// == Composant
const MostPopularTVShows = () => {

    const dispatch = useDispatch();
    const { tvshows, loading, hasErrors } = useSelector(moviesSelector);
    //console.log('useSelector toolkit :', tvshows);

    useEffect(() => {
        dispatch(mostPopularTVShows());
    }, [dispatch]);

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
                    media_type={tvshow.media_type}
                    vote_average={tvshow.vote_average}
                />
            </div>
        );
    };

    return (
        <div>
            <HomeTitle>Most Popular TV Shows</HomeTitle>
            <TVShows>
                {renderMostPopularTVShows()}
            </TVShows>
        </div>
    );};

// == Export
export default MostPopularTVShows;
