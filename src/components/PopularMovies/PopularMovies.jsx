import { Card, Image, Spin } from "antd"
import s from './PopularMovies.module.css';
import { Link } from "react-router-dom";

const PopularMovies = ({ movies = [], isFetching }) => {

  return (<div className={s.cardsTab}>
    {isFetching && <Spin size={"large"} />}
    {movies.map(m =>
      <Link to={'/movie/' + m.id} >
        <Card hoverable size="small" title={m.title}>
          <div className={s.movieCard}>
            {<img className={s.movieCardImg} src={`https://image.tmdb.org/t/p/w300/${m.poster_path}`} alt={'Image not found'} />}
            <p className={s.overwiew}>{m.overview}</p>
          </div>
        </Card>
      </Link>)}
  </div>)
}


export default PopularMovies