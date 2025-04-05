import { Link } from "react-router-dom";
import { Grid, GridItem } from "@components/Layout";
import { ResponsiveSwiper } from "@components/common";
import tour from "@data/tour.json";
const Detail = () => {
  return (
    <div className="flex flex-1">
      <Grid>
        <GridItem mobile={12} tablet={8} desktop={8}>
          <ResponsiveSwiper data={tour.images} />
        </GridItem>
        <GridItem mobile={12} tablet={4} desktop={4}>
          <div className="flex justify-start items-start px-4 py-12 md:h-screen md:overflow-y-auto md:p-0 md:justify-center md:items-center">
            <div className="flex flex-col gap-y-6 lg:gap-y-12">
              <section className="flex flex-col lg:px-4 gap-y-12">
                <div className="flex flex-col gap-y-2">
                  <h1 className="mb-2 text-3xl md:text-5xl font-bold">{tour.data[0].title}</h1>
                  <h2 className="flex items-center gap-x-2 text-base md:text-lg">
                    <span className="basis-[30px]">
                        <img src="/presentation/icons/map.png" alt="위치 아이콘"  />
                    </span>
                    <span>{tour.data[0].location}</span>
                  </h2>
                  <h3 className="flex items-center gap-x-2 text-base md:text-lg">
                     <span className="basis-[30px]">
                        <img src="/presentation/icons/money.png" alt="비용 아이콘"  />
                     </span>
                    <span>{tour.data[0].price}</span>
                  </h3>
                </div>
              </section>
              <section className="flex flex-col lg:px-4 gap-y-12">
                <div className="flex flex-col gap-y-2">
                  <h1 className="mb-2 text-3xl md:text-5xl font-bold">{tour.data[1].title}</h1>
                  <h2 className="flex items-center gap-x-2 text-base md:text-lg">
                    <span className="basis-[30px]">
                        <img src="/presentation/icons/map.png" alt="위치 아이콘"  />
                    </span>
                    <span>{tour.data[1].location}</span>
                  </h2>
                  <h3 className="flex items-center gap-x-2 text-base md:text-lg">
                     <span className="basis-[30px]">
                        <img src="/presentation/icons/money.png" alt="비용 아이콘"  />
                     </span>
                    <span>{tour.data[1].price}</span>
                  </h3>
                </div>
              </section>
                <section className="flex flex-col lg:px-4 gap-y-12">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="mb-2 text-3xl md:text-5xl font-bold">{tour.data[2].title}</h1>
                        <h2 className="flex items-center gap-x-2 text-base md:text-lg">
                    <span className="basis-[30px]">
                        <img src="/presentation/icons/map.png" alt="위치 아이콘"  />
                    </span>
                            <span>{tour.data[2].location}</span>
                        </h2>
                        <h3 className="flex items-center gap-x-2 text-base md:text-lg">
                     <span className="basis-[30px]">
                        <img src="/presentation/icons/money.png" alt="비용 아이콘"  />
                     </span>
                            <span>{tour.data[2].price}</span>
                        </h3>
                    </div>
                </section>

                <div className="text-center">
                    <Link to="/pension" className="enter">숙소 구경하기</Link>
                </div>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Detail;
