import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"
import popularReducer from "./popular-reducer";
import movieReducer from "./movie-reducer";
import searchReducer from "./search-reducer";


let reducers = combineReducers({
  topMoviesPage: popularReducer,
  aboutMoviePage: movieReducer,
  searchPage: searchReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers((applyMiddleware(thunkMiddleware))))
window.store = store;

export default store