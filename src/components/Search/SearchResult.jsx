import { Card, Image, Spin } from "antd"
import { Link } from "react-router-dom"
import s from './SearchResult.module.css';

const SearchResult = ({movies=[], isFetching}) => {


  return( <div className={s.cardsTab} >
    {isFetching && <Spin size={"large"} />}
    {movies.map(m => <div> <Link to={'/movie/' + m.id} >
      <Card hoverable size="small" className={s.movieCard} title={m.title} >
      {<Image preview={false} src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt={'Image not found'}/>}
      <p className={s.overwiew}>{m.overview}</p>
    </Card>
    </Link>
    </div>)}
  </div>
  )}

export default SearchResult