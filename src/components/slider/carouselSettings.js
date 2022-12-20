import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

export const carouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: (
    <ArrowBackIosNewOutlined
      sx={{
        color: "black",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  nextArrow: (
    <ArrowForwardIosOutlined
      sx={{
        color: "black",
        width: "25px",
        height: "25px",

        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
};
