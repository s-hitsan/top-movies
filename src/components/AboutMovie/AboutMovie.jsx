import s from './AboutMovie.module.css';
import { Card, Image, Button } from "antd"
import { AboutMovieVideos } from './AboutMovieVideos';


const AboutMovie = ({ movie, videos }) => {

  return <div>
    <Card title={movie.title}>
      <Card size="small" style={{ width: 300 }} className={s.movieCard} >
        <div >
          <Image preview src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={'#'} />
        </div>
      </Card>
      <h3 className={s.movieOverwiew}>{movie.overview}</h3>
      <h2>{movie.tagline}</h2>
      <p>Genres: {`
      ${movie.genres[0]?.name || 'No information'}
      ${movie.genres[1]?.name || ''}
      ${movie.genres[2]?.name || ''}`}</p>
      <p>Vote average : {movie.vote_average}</p>
      {movie.budget === 0 ? null : <p>Budget : {movie.budget}$</p>}
      <p>Original language : {movie.original_language}</p>
      <p>Production company : {movie.production_companies[0]?.name || 'No information'}</p>
      <p>Production country : {`
      ${movie.production_countries[0]?.name || 'No information'}
      ${movie.production_countries[1]?.name || ''}
      `}</p>
      <p>IMDBd : <Button href={`https://www.imdb.com/title/${movie.imdb_id}`}>ID {movie.imdb_id}</Button> </p>
      <p>Release date : {movie.release_date}</p>
      <p>Runtime : {movie.runtime} min.</p>
      {movie.homepage ? <p>Home Page : <Button href={movie.homepage}>{movie.homepage}</Button> </p> : null}
      <div >
        {videos[0] ? <AboutMovieVideos videos={videos} /> : null}
      </div>
    </Card>
  </div>
}

export default AboutMovie