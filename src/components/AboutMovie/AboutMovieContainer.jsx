import { connect } from "react-redux"
import { requestMovie } from '../../redux/movie-reducer'
import AboutMovie from "./AboutMovie"
import { Spin } from "antd"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { useEffect } from "react"


const AboutMovieContainer = ({ movie, isFetching, requestMovie, match }) => {


  useEffect(() => {
    requestMovie(match.params.id)
  }, [])

  return <div>
    {movie ? <AboutMovie movie={movie} /> : <Spin size={"large"} />}
  </div>
}

const mapStateToProps = (state) => ({
  movie: state.aboutMoviePage.movie
})

export default compose(connect(mapStateToProps, { requestMovie }), withRouter)(AboutMovieContainer)