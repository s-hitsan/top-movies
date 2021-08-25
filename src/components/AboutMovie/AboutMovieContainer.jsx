import { connect } from "react-redux"
import { requestMovie, requestVideos } from '../../redux/movie-reducer'
import AboutMovie from "./AboutMovie"
import { Spin } from "antd"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { useEffect } from "react"


const AboutMovieContainer = ({ movie, requestMovie, match, requestVideos, videos }) => {


  useEffect(() => {
    requestMovie(match.params.id)
    requestVideos(match.params.id)
  }, [])

  return <div>
    {movie?.id == match.params.id 
    ? <AboutMovie movie={movie} videos={videos}/> 
    : <Spin size={"large"} />}
  </div>
}

const mapStateToProps = (state) => ({
  movie: state.aboutMoviePage.movie,
  videos: state.aboutMoviePage.videos
})

export default compose(connect(mapStateToProps, { requestMovie, requestVideos}), withRouter)(AboutMovieContainer)