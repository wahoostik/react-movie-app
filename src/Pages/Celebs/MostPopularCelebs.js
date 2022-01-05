// == Import
import { HomeTitle, Container } from '../../Styles/globalStyles';
import { useEffect, useState } from 'react';
import { mostPopularCelebs, celebsSelector } from '../../Redux/reducers/celebsSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import CelebsContent from '../../components/Content/CelebsContent';

// == Composant
const MostPopularCelebs = () => {

    const dispatch = useDispatch();
    const { celebs, loading, hasErrors } = useSelector(celebsSelector);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(mostPopularCelebs(page));
    }, [dispatch, page]);

    const renderCelebs= () => {
        if (loading) return <p>Loading Celebs...</p>;
        if (hasErrors) return <p>Cannot Display Celebs...</p>;

        return celebs.map(celeb =>
            <div key={celeb.id}>
                <CelebsContent
                    key={celeb.id}
                    id={celeb.id}
                    name={celeb.name}
                    poster={celeb.profile_path}
                    popularity={celeb.popularity}
                />
            </div>
        );
    };

    return (
        <div>
            <HomeTitle>Most Popular Celebs</HomeTitle>
            <Container>
                {renderCelebs()}
            </Container>
            <CustomPagination setPage={setPage}/>
        </div>
    );};

// == Export
export default MostPopularCelebs;
