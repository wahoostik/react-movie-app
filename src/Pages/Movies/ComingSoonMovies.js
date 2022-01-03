// == Import
import { HomeTitle, Container } from '../../Styles/globalStyles';
import { useEffect, useState } from 'react';
import { comingSoonMovies, moviesSelector } from '../../Redux/reducers/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

// == Composant
const ComingSoonMovies = () => {

    const dispatch = useDispatch();
    const { movies, loading, hasErrors } = useSelector(moviesSelector);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(comingSoonMovies(page));
    }, [dispatch, page]);

    const renderComingSoonMovies = () => {
        if (loading) return <p>Loading Coming Soon Movies...</p>;
        if (hasErrors) return <p>Cannot Display Coming Soon Movies...</p>;

        return movies.map(movie =>
            <div key={movie.id}>
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
        <div>
            <HomeTitle>Coming Soon Movies</HomeTitle>
            <Container>
                {renderComingSoonMovies()}
            </Container>
            <CustomPagination setPage={setPage} />
        </div>
    );};

// == Export
export default ComingSoonMovies;
