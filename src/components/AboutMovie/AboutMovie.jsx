import s from './AboutMovie.module.css';
import { Card, Image, Button } from "antd"


const AboutMovie = ({ movie }) => {

  return <div>
    <Card title={movie.title}>
      <Card size="small" style={{ width: 300 }} className={s.movieCard} >
        <div >
          <Image preview src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={'#'} />
        </div>
      </Card>
      <h3>{movie.overview}</h3>
      <h2>{movie.tagline}</h2>
      <p>Genres: {`
      ${movie.genres[0] ? movie.genres[0].name : 'No information'}
      ${movie.genres[1] ? movie.genres[1].name : ''}
      ${movie.genres[2] ? movie.genres[2].name : ''}`}</p>
      <p>Vote average : {movie.vote_average}</p>
      <p>Budget : {movie.budget}$</p>
      <p>Original language : {movie.original_language}</p>
      <p>Production company : {movie.production_companies[0] ? movie.production_companies[0].name : 'No information'}</p>
      <p>Production country : {movie.production_countries[0].name ? movie.production_countries[0].name: 'No information'}</p>
      <p>IMDBd : <Button href={`https://www.imdb.com/title/${movie.imdb_id}`}>ID {movie.imdb_id}</Button> </p>
      <p>Release date : {movie.release_date}</p>
      <p>Runtime : {movie.runtime} min.</p>
      <p>Home Page : <Button href={movie.homepage}>{movie.homepage}</Button> </p>
    </Card>
  </div>
}

export default AboutMovie