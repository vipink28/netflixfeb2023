import React, { useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  selectPopularMovies,
} from "../features/movie/movieSlice";

function Row(props) {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
    >
      {popularMovies.data?.results?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Card video={item}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Row;
