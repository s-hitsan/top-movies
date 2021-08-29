import s from './AboutMovieVideos.module.css';
import { Card, Image, Button } from "antd"


export const AboutMovieVideos = ({ videos }) => {

  return <div className={s.videosTab}>
    {videos.map(el =>
      <div>
        <h3>{el.name}</h3>
        <div className={s.videoCard} >
          <iframe src={`https://www.youtube.com/embed/${el.key}`}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen " >
          </iframe>
        </div>
      </div>)
    }
  </div>
}

