import { moviesAPI} from '../api/api';

const SET_SEARCH_RESPONSE = 'SET-SEARCH-RESPONSE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
  searchResponse: [], 
  isFetching: false
}

const searchReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_SEARCH_RESPONSE:
      return { ...state, searchResponse: action.searchResponse }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state;
  }
}


export const setSearchResponse = (searchResponse) => ({ type: SET_SEARCH_RESPONSE, searchResponse })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const requestSearch = (query) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let searchResponse = await moviesAPI.getSearch(query)
    dispatch(toggleIsFetching(false))
    dispatch(setSearchResponse(searchResponse.data.results))
  }
}


export default searchReducer;