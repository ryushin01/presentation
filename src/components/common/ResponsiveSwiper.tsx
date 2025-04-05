import { Frame } from "@components/common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ResponsiveSwiper({
                                           data,
                                         }) {
  return (
    <>
      <div className="_responsive-swiper-wrapper">
        <Swiper
            modules={[Controller, Navigation, Pagination]}
          className="_responsive-swiper"
          wrapperTag="ul"
          slidesPerView={"auto"}
          pagination={{
            type: "fraction",
          }}
          navigation={{
            prevEl: "._btn-prev",
            nextEl: "._btn-next",
          }}
        >
          {data?.map((image) => {
            const { src, alt } = image;
            return (
              <SwiperSlide
                tag="li"
                key={src}
              >
                <Frame>
                    <img src={src} alt={alt} />
                </Frame>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          type="button"
          className="_btn-prev"
          aria-label="이전 슬라이드 보기"
        >
            <img src="/presentation/icons/left-icon24.svg" alt="" />
        </button>
        <button
          type="button"
          className="_btn-next"
          aria-label="다음 슬라이드 보기"
        >
            <img src="/presentation/icons/right-icon24.svg" alt="" />
        </button>
      </div>
    </>
  );
}
