import ReactPlayer from "react-player";
import Slider from "react-slick";

export default function TrailerVideos({ urls }: { urls: string[] }) {
  const settings = {
    dots: false,
    infinite: urls.length < 2 ? false : true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: urls.length <= 1 ? false : true,
  };
  return (
    <Slider {...settings}>
      {urls.map((url: string) => (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${url}`}
          controls={true}
          width="100%"
          height="30rem"
          key={url}
          style={{ display: "flex", justifyContent: "center" }}
        />
      ))}
    </Slider>
  );
}
