import { Grid, GridItem } from "@components/Layout";
import { ResponsiveSwiper } from "@components/common";
import pension from "@data/pension.json";
const Detail = () => {
  return (
    <div className="flex flex-1">
      <Grid>
        <GridItem mobile={12} tablet={8} desktop={8}>
          <ResponsiveSwiper data={pension.images} />
        </GridItem>
        <GridItem mobile={12} tablet={4} desktop={4}>
          <div className="flex justify-start items-start px-4 py-12 md:h-screen md:p-0 md:justify-center md:items-center">
            <div className="flex flex-col">
              <section className="flex flex-col lg:px-4 gap-y-12">
                <div className="flex flex-col gap-y-2">
                  <h1 className="mb-2 text-3xl md:text-5xl font-bold">{pension.data.title}</h1>
                  <h2 className="flex items-center gap-x-2 text-base md:text-lg">
                    <span className="basis-[30px]">
                        <img src="/presentation/icons/map.png" alt="위치 아이콘"  />
                    </span>
                    <span>{pension.data.location}</span>
                  </h2>
                  <h3 className="flex items-center gap-x-2 text-base md:text-lg">
                     <span className="basis-[30px]">
                        <img src="/presentation/icons/money.png" alt="비용 아이콘"  />
                     </span>
                    <span>{pension.data.price}</span>
                  </h3>
                </div>
                <div className="text-center">
                  <a href={pension.data.path} className="enter" target="_blank">숙소 톺아보기</a>
                </div>
              </section>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Detail;
