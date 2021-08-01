import { connect } from "react-redux"
import PopularMovies from "./PopularMovies"
import { requestMovies } from '../../redux/popular-reducer';
import { useEffect } from "react"


const PopularMoviesContainer = ({pageSize,currentPage, requestMovies, movies, isFetching}) => {

  useEffect(() => {
    requestMovies(currentPage, pageSize)
  }, [currentPage])

  return <PopularMovies isFetching={isFetching} movies={movies}/>
}

const mapStateToProps = (state) => ({
  pageSize: state.topMoviesPage.pageSize,
  currentPage: state.topMoviesPage.currentPage,
  movies: state.topMoviesPage.movies,
  isFetching: state.topMoviesPage.isFetching
})

export default connect(mapStateToProps, {requestMovies })(PopularMoviesContainer)