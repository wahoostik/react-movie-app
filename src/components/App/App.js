import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';
import TopRatedMovies from '../../Pages/Movies/TopRatedMovies';
import TVShows from '../../Pages/TVShows/TVShows';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import MovieDetail from '../../Pages/MovieDetail/MovieDetail';
import TVShowDetail from '../../Pages/TVShowDetail/TVShowDetail';
import Celebs from '../../Pages/Celebs/Celebs';
import Container from '@mui/material/Container';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/top-rated-movies" component={TopRatedMovies} />
                        <Route path="/movie/:imdbID" component={MovieDetail} />
                        <Route path="/tvshow/:imdbID" component={TVShowDetail} />
                        <Route path="/tvshows" component={TVShows} />
                        <Route path="/celebs" component={Celebs} />
                        <Route component={PageNotFound} path />
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;
