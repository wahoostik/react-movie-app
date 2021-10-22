/* eslint-disable no-undef */

// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/SingleContent/SingleContent';
import { trendingMovies, moviesSelector } from '../../Redux/reducers/moviesSlice';
import { Container, HomeTitle } from './HomeStyles';

// == Composant
const Home = () => {

    const dispatch = useDispatch();

    const { movies, loading, hasErrors } = useSelector(moviesSelector);
    console.log('useSelector toolkit :', movies);
    
    useEffect(() => {
        dispatch(trendingMovies());
    }, [dispatch]);

    const renderMovies = () => {
        if (loading) return <p>Loading Trending...</p>;
        if (hasErrors) return <p>Cannot display Trending...</p>;

        return movies.map(movie =>
            <div key={movie.id} className='tile'>
                <SingleContent
                    key={movie.id}
                    id={movie.id}
                    title={movie.title || movie.name}
                    poster={movie.poster_path}
                    date={movie.first_air_date || movie.release_date}
                    media_type={movie.media_type}
                    vote_average={movie.vote_average}
                />
            </div>
        );
    };

    
    return (
        <div className='home'>
            <HomeTitle>Trending Movies & TV Shows</HomeTitle>
            <Container>
                {renderMovies()}
            </Container>
        </div>
    );
};

// == Export
export default Home;
