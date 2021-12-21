// == Import
import { HomeTitle, Movies } from './MoviesStyles';
import { useEffect, useState } from 'react';
import { topRatedMovies, moviesSelector } from '../../Redux/reducers/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

// == Composant
const TopRatedMovies = () => {

    const dispatch = useDispatch();
    const { movies, loading, hasErrors } = useSelector(moviesSelector);
    //console.log('useSelector toolkit :', movies);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(topRatedMovies(page));
    }, [dispatch, page]);

    const renderTopRatedMovies = () => {
        if (loading) return <p>Loading Top Rated Movies...</p>;
        if (hasErrors) return <p>Cannot Display Top Rated Movies...</p>;

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
            <HomeTitle>Top Rated Movies</HomeTitle>
            <Movies>
                {renderTopRatedMovies()}
            </Movies>
            <CustomPagination setPage={setPage}/>
        </div>
    );};

// == Export
export default TopRatedMovies;
