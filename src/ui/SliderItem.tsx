import Slider from "react-slick";
import MovieItem, { MovieProp } from "./MovieItem";
import CastItem, { CastProp } from "./CastItem";
import TVShowItem, { TVShowProp } from "./TVShowItem";

interface ChildrenProp {
  data: [];
  type: "cast" | "movie" | "tvshow";
}

export default function SliderItem({ data, type }: ChildrenProp) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  if (type === "movie")
    return (
      <div className="slider-container ">
        <Slider {...settings}>
          {data.map((movie: MovieProp["movie"]) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    );

  if (type === "cast")
    return (
      <div className="slider-container ">
        <Slider {...settings}>
          {data.map((cast: CastProp["cast"]) => (
            <CastItem cast={cast} key={cast.id} />
          ))}
        </Slider>
      </div>
    );

  if (type === "tvshow")
    return (
      <div className="slider-container ">
        <Slider {...settings}>
          {data.map((tvshow: TVShowProp["tvshow"]) => (
            <TVShowItem tvshow={tvshow} key={tvshow.id} />
          ))}
        </Slider>
      </div>
    );
}
