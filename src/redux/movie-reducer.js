import { moviesAPI} from '../api/api';

const SET_MOVIE = 'SET-MOVIE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_VIDEOS = 'SET-VIDEOS'

let initialState = {
  movie: null, 
  isFetching: false,
  videos: []
}

const movieReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MOVIE:
      return { ...state, movie: action.movie }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
      case SET_VIDEOS:
        return {...state, videos: action.videos}
    default:
      return state;
  }
}


export const setMovie = (movie) => ({ type: SET_MOVIE, movie })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setVideos = (videos) => ({type: SET_VIDEOS, videos})

export const requestMovie = id => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let movie = await moviesAPI.getDetails(id)
    dispatch(toggleIsFetching(false))
    dispatch(setMovie(movie.data))
  }
}

export const requestVideos = (id) => {
  return async (dispatch) => {
    let videos = await moviesAPI.getVideos(id)
    let videosTrailersAndTeasers = videos.data.results
    .filter(e => e.type === 'Trailer' || e.type === 'Teaser')
    .reverse()
    dispatch(setVideos(videosTrailersAndTeasers))
  }
}

export default movieReducer;