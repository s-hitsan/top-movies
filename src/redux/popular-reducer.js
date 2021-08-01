import { moviesAPI} from '../api/api';

const SET_MOVIES = 'SET-MOVIES';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
  movies: [],
  pageSize: 20,
  currentPage: 1,
  isFetching: false
}

const popularReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.movies }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state;
  }
}


export const setMovies = (movies) => ({ type: SET_MOVIES, movies })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const requestMovies = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await moviesAPI.getPopular(currentPage)
    dispatch(toggleIsFetching(false))
    let moviesWithoutImg = data.data.results.filter((e, i) => i < pageSize)
    dispatch(setMovies(moviesWithoutImg))
  }
}


export default popularReducer;