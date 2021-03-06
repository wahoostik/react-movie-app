import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';
import TopRatedMovies from '../../Pages/Movies/TopRatedMovies';
import MostPopularTVShows from '../../Pages/TVShows/MostPopularTVShows';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import MovieDetail from '../../Pages/MovieDetail/MovieDetail';
import TVShowDetail from '../../Pages/TVShowDetail/TVShowDetail';
import MostPopularCelebs from '../../Pages/Celebs/MostPopularCelebs';
import Container from '@mui/material/Container';
import MostPopularMovies from '../../Pages/Movies/MostPopularMovies';
import ComingSoonMovies from '../../Pages/Movies/ComingSoonMovies';
import TopRatedTVShows from '../../Pages/TVShows/TopRatedTVShows';
import Search from '../../Pages/Search/Search';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/top-rated-movies" component={TopRatedMovies} />
                        <Route path="/most-popular-movies" component={MostPopularMovies} />
                        <Route path="/coming-soon-movies" component={ComingSoonMovies} />
                        <Route path="/most-popular-tvshows" component={MostPopularTVShows} />
                        <Route path="/top-rated-tvshows" component={TopRatedTVShows} />
                        <Route path="/search" component={Search} />
                        <Route path="/movie/:id" component={MovieDetail} />
                        <Route path="/tvshow/:id" component={TVShowDetail} />
                        <Route path="/most-popular-celebs" component={MostPopularCelebs} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;
