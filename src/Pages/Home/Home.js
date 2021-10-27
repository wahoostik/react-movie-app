// == Import
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import { trendingMovies, moviesSelector } from '../../Redux/reducers/moviesSlice';
import { Container, HomeTitle } from './HomeStyles';

// == Composant
const Home = () => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const { movies, loading, hasErrors } = useSelector(moviesSelector);
    console.log('useSelector toolkit :', movies);
    
    useEffect(() => {
        dispatch(trendingMovies(page));
    }, [dispatch, page]);

    const renderMovies = () => {
        if (loading) return <p>Loading Trending...</p>;
        if (hasErrors) return <p>Cannot display Trending...</p>;

        return movies.map(movie =>
            <div key={movie.id} className='title'>
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
            <CustomPagination setPage={setPage}/>
        </div>
    );
};

// == Export
export default Home;
