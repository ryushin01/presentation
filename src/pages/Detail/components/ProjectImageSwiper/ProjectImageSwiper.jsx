import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const ProjectImageSwiper = ({ projectImage }) => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: true }}
      className="project-image-swiper w-full h-[50vh] overflow-hidden rounded-lg border border-solid border-grayscaleB"
    >
      {projectImage?.map(({ src, alt }, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={alt}
              className="absolute top-0 w-full h-full object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectImageSwiper;
