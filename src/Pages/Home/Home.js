/* eslint-disable no-undef */

// == Import
import { useEffect } from 'react';
import baseUrl from '../../Redux/baseUrl';

// == Composant
const Home = () => {

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await baseUrl.get(`trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
                console.log('The response of API:', response);                
            } catch (error) {
                console.trace(error);
            }
        };
        fetchMovies();
    });
    
    return (
        <div className='home'>
            <h1>Composant : Home</h1>
        </div>
    );
};

// == Export
export default Home;
