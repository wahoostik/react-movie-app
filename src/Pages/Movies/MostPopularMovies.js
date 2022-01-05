// == Import
import { HomeTitle, Container } from '../../Styles/globalStyles';
import { useEffect, useState } from 'react';
import { mostPopularMovies, moviesSelector } from '../../Redux/reducers/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/Content/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

// == Composant
const MostPopularMovies = () => {

    const dispatch = useDispatch();
    const { movies, loading, hasErrors } = useSelector(moviesSelector);
    //console.log('useSelector toolkit :', movies);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(mostPopularMovies(page));
    }, [dispatch, page]);

    const renderMostPopularMovies = () => {
        if (loading) return <p>Loading Most Popular Movies...</p>;
        if (hasErrors) return <p>Cannot Display Most Popular Movies...</p>;

        return movies.map(movie =>
            <div key={movie.id}>
                <SingleContent
                    key={movie.id}
                    id={movie.id}
                    title={movie.title || movie.name}
                    poster={movie.poster_path}
                    date={movie.first_air_date || movie.release_date}
                    media_type="movie"
                    vote_average={movie.vote_average}
                />
            </div>
        );
    };
    
    return (
        <div>
            <HomeTitle>Most Popular Movies</HomeTitle>
            <Container>
                {renderMostPopularMovies()}
            </Container>
            <CustomPagination setPage={setPage} />
        </div>
    );};

// == Export
export default MostPopularMovies;
