import s from './AboutMovieVideos.module.css';
import { Card, Image, Button } from "antd"


export const AboutMovieVideos = ({ videos }) => {

  return <div className={s.videosTab}>
    {videos.map(el =>
      <div className={s.videoCard} >
        <Card size="small" title={el.name} >
          <iframe width="400" height="260" src={`https://www.youtube.com/embed/${el.key}`}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen " >
          </iframe>
        </Card>
      </div>)
    }
  </div>
}

