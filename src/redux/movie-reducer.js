import { moviesAPI} from '../api/api';

const SET_MOVIE = 'SET-MOVIE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
  movie: null, 
  isFetching: false
}

const movieReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MOVIE:
      return { ...state, movie: action.movie }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state;
  }
}


export const setMovie = (movie) => ({ type: SET_MOVIE, movie })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const requestMovie = (id) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let movie = await moviesAPI.getDetails(id)
    dispatch(toggleIsFetching(false))
    dispatch(setMovie(movie.data))
  }
}


export default movieReducer;