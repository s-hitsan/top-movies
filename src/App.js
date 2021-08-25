import './App.css';
import { Layout} from 'antd';
import { connect, Provider } from 'react-redux';
import { HashRouter, withRouter, Route } from 'react-router-dom';
import store from './redux/redux-store';
import PopularMoviesContainer from './components/PopularMovies/PopularMoviesContainer';
import AppHeader from './components/AppHeader/AppHeader'
import { compose } from 'redux';
import AboutMovieContainer from './components/AboutMovie/AboutMovieContainer';
import SearchContainer from './components/Search/SearchContainer';
import Welcome from './components/Welcome/Welcome';

const {Content, Footer } = Layout;


const App = (props) => {
  return (
    <div>
      <Layout className="layout">
          <AppHeader />
        <Content style={{ padding: '0 5px' }}>
          <div className="site-layout-content">
          <Route path='/top20' render={() => <PopularMoviesContainer />} />
          <Route path='/movie/:id?' render={() => <AboutMovieContainer />} />
          <Route path='/search' render={() => <SearchContainer />} />
          <Route exact path='/' render={() => <Welcome />} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Top 20 movies</Footer>
      </Layout>
    </div>
  );
}


const AppContainer = compose(withRouter, connect(null, null))(App)

const TopMoviesApp = (props) => {
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default TopMoviesApp

