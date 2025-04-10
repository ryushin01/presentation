import { Grid, GridItem } from "@components/Layout";
const Detail = () => {
  return (
    <div className="flex flex-1">
      <Grid>
        <GridItem mobile={12} tablet={4} desktop={4}>
          <div className="flex flex-col items-center h-full">
            <section className="w-full py-6">
              <div className="flex flex-col items-center gap-y-6">
                <span className="text-3xl md:text-5xl">서울팀</span>
                <ul className="grid grid-cols-2 gap-y-6 w-full">
                  <li className="flex flex-col items-center gap-y-2">
                    <img src="/presentation/images/member/cs.png" alt="창선" className="w-20 h-20"/>
                    <span className="text-base md:text-lg">창선</span>
                  </li>
                  <li className="flex flex-col items-center gap-y-2">
                    <img src="/presentation/images/member/js.png" alt="진선" className="w-20 h-20"/>
                    <span className="text-base md:text-lg">진선</span>
                  </li>
                  <li className="flex flex-col items-center gap-y-2">
                    <img src="/presentation/images/member/hj.png" alt="혜정" className="w-20 h-20"/>
                    <span className="text-base md:text-lg">혜정</span>
                  </li>
                  <li className="flex flex-col items-center gap-y-2">
                    <img src="/presentation/images/member/hm.png" alt="혜민" className="w-20 h-20"/>
                    <span className="text-base md:text-lg">혜민</span>
                  </li>
                </ul>
              </div>
            </section>
            <div className="py-6 lg:py-12">&middot; &middot; &middot;</div>
            <section className="w-full py-6">
              <div className="flex flex-col items-center gap-y-6">
              <span className="text-3xl md:text-5xl">대전팀</span>
                <ul className="grid grid-cols-2 gap-y-6 w-full">
                  <li className="flex flex-col items-center gap-y-2">
                    <img src="/presentation/images/member/hs.png" alt="한솔" className="w-20 h-20" />
                    <span className="text-base md:text-lg">한솔</span>
                  </li>
                  <li className="flex flex-col items-center gap-y-2">
                    <img src="/presentation/images/member/hw.png" alt="현우" className="w-20 h-20" />
                    <span className="text-base md:text-lg">현우</span>
                  </li>
                  <li className="flex flex-col items-center gap-y-2">
                    <img src="/presentation/images/member/yw.png" alt="연우" className="w-20 h-20" />
                    <span className="text-base md:text-lg">연우</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </GridItem>
        <GridItem mobile={12} tablet={8} desktop={8}>
          <div className="py-12 lg:py-6">
            <table className="w-full table-fixed border-collapse">
              <caption className="mb-6 text-3xl md:text-5xl">1일차 일정</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-3/4" />
              </colgroup>
              <tbody>
                <tr>
                  <th>11:00</th>
                  <td>서울팀 집결</td>
                </tr>
                <tr>
                  <th>12:00</th>
                  <td>서울팀 마트 쇼핑</td>
                </tr>
                <tr>
                  <th>1:00</th>
                  <td>서울팀 &middot; 대전팀 집결 (솔밭칼국수)</td>
                </tr>
                <tr>
                  <th>1:00 - 3:00</th>
                  <td>식사 및 티타임</td>
                </tr>
                <tr>
                  <th>3:00</th>
                  <td>숙소 입실</td>
                </tr>
                <tr>
                  <th>3:00 - 4:00</th>
                  <td>신변 정리 및 방 배정</td>
                </tr>
                <tr>
                  <th>4:00 - 5:00</th>
                  <td>휴식</td>
                </tr>
                <tr>
                  <th>5:00 - 6:00</th>
                  <td>저녁 준비</td>
                </tr>
                <tr>
                  <th>6:00</th>
                  <td>파티 시작</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full table-fixed border-collapse mt-12">
              <caption className="mb-6 text-3xl md:text-5xl">2일차 일정</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-3/4" />
              </colgroup>
              <tbody>
              <tr>
                <th>9:00</th>
                <td>기상</td>
              </tr>
              <tr>
                <th>9:00 - 10:00</th>
                <td>정리</td>
              </tr>
              <tr>
                <th>11:00</th>
                <td>숙소 퇴실</td>
              </tr>
              <tr>
                <th>11:00 - 12:00</th>
                <td>점심 식사</td>
              </tr>
              </tbody>
            </table>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Detail;
