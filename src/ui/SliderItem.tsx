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
    infinite: data.length < 2 ? false : true,
    speed: 600,
    slidesToShow: data.length < 6 ? data.length : 6,
    slidesToScroll: data.length > 6 ? 1 : 0,
    arrows: data.length < 6 ? false : true,
    className: "index.css",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: data.length < 4 ? data.length : 4,
          slidesToScroll: data.length > 4 ? 1 : 0,
          arrows: data.length < 4 ? false : true,

          infinite: data.length < 2 ? false : true,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: data.length < 2 ? data.length : 2,
          slidesToScroll: data.length > 2 ? 1 : 0,
          arrows: data.length < 2 ? false : true,
          infinite: data.length < 2 ? false : true,
          dots: false,
          swipeToSlide: true,
        },
      },

      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: data.length > 1 ? 1 : 0,
          arrows: data.length < 1 ? false : true,
          infinite: data.length < 2 ? false : true,
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

  if (type === "cast") {
    return (
      <div className="slider-container ">
        <Slider {...settings}>
          {data.map((cast: CastProp["cast"]) => (
            <CastItem cast={cast} key={cast.id} />
          ))}
        </Slider>
      </div>
    );
  }

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
