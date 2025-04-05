import { Link } from "react-router-dom";
import { Grid, GridItem } from "@components/Layout";

const LIST_DATA = [
  {
    title: "볼거리·먹거리",
    subtitle: "방아머리해변·솔밭칼국수·허니비치카페",
    path: "/tour",
    bg: "images/tour/bg.jpg"
  },
  {
    title: "숙소",
    subtitle: "하이클래스 펜션",
    path: "/pension",
    bg: "images/pension/bg.jpg"
  }
]

const List = () => {
  return (
    <div className="flex flex-1">
      <Grid className="without-padding">
        <GridItem mobile={12} tablet={6} desktop={6}>
          <section
              className="relative overflow-hidden w-full h-full
                [&>img]:grayscale [&>img]:transition [&>img]:duration-500
                [&>img]:hover:grayscale-0 [&>img]:active:grayscale-0
                [&>img]:hover:scale-125 [&>img]:active:scale-125
            "
          >
            <Link to={LIST_DATA[0].path} className="flex justify-center items-center flex-col gap-y-6 w-full h-full absolute inset-0 z-10">
                <h1 className="text-5xl lg:text-8xl text-grayscaleF font-bold drop-shadow-2xl">{LIST_DATA[0].title}</h1>
                <h2 className="text-xl lg:text-4xl text-grayscaleF font-normal drop-shadow-2xl">{LIST_DATA[0].subtitle}</h2>
            </Link>
            <img src={LIST_DATA[0].bg} alt="" className="w-full h-full z-1 object-cover" />
          </section>
        </GridItem>
        <GridItem mobile={12} tablet={6} desktop={6}>
          <section
              className="relative overflow-hidden w-full h-full
                [&>img]:grayscale [&>img]:transition [&>img]:duration-500
                [&>img]:hover:grayscale-0 [&>img]:active:grayscale-0
                [&>img]:hover:scale-125 [&>img]:active:scale-125
            "
          >
            <Link to={LIST_DATA[1].path} className="flex justify-center items-center flex-col gap-y-6 w-full h-full absolute inset-0 z-10">
              <h1 className="text-5xl lg:text-8xl text-grayscaleF font-bold drop-shadow-2xl">{LIST_DATA[1].title}</h1>
              <h2 className="text-xl lg:text-4xl text-grayscaleF font-normal drop-shadow-2xl">{LIST_DATA[1].subtitle}</h2>
            </Link>
            <img src={LIST_DATA[1].bg} alt="" className="w-full h-full z-1 object-cover" />
          </section>
        </GridItem>
      </Grid>
    </div>
  );
};

export default List;
