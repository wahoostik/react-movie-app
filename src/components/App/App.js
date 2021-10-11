import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';
import Movies from '../../Pages/Movies/Movies';
import TVShows from '../../Pages/TVShows/TVShows';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import MovieDetail from '../../Pages/MovieDetail/MovieDetail';
import TVShowDetail from '../../Pages/TVShowDetail/TVShowDetail';
import Celebs from '../../Pages/Celebs/Celebs';

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/movie/:imdbID" component={MovieDetail} />
                        <Route path="/tvshow/:imdbID" component={TVShowDetail} />
                        <Route path="/tvshows" component={TVShows} />
                        <Route path="/celebs" component={Celebs} />
                        <Route component={PageNotFound} path />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
