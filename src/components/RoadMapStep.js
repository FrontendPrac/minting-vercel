import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="RoadMap"
          data-align="center"
        >
          RoadMap
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 1</span>
                    <div className="item_in">
                      {/* <p className="date">2023년 09월 06일 19시(KST)</p> */}
                      <h3 className="title">
                        KTMF PASS 홀더 전용 독점 커뮤니티
                      </h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 2</span>
                    <div className="item_in">
                      {/* <p className="date">2023년 09월 06일 20시(KST)</p> */}
                      <h3 className="title">
                        KTMF 코스튬 <br />
                        아이템
                      </h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 3</span>
                    <div className="item_in">
                      {/* <p className="date">2023년 09월 07일 19시(KST)</p> */}
                      <h3 className="title">KTMF CD NFT</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 4</span>
                    <div className="item_in">
                      {/* <p className="date">2023년 09월 08일 19시(KST)</p> */}
                      <h3 className="title">스테이킹 & NFTFi</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 5</span>
                    <div className="item_in">
                      {/* <p className="date">2023년 09월 15일(KST)</p> */}
                      <h3 className="title">아즈메타 메타버스</h3>
                      {/* <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">로드맵 06</span>
                    <div className="item_in">
                      <p className="date">2023년 09월 15일 ~ 10월 19일(KST)</p>
                      <h3 className="title">리워드 지급</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">로드맵 07</span>
                    <div className="item_in">
                      <p className="date">2023년 10월 23일 ~ 10월 25일(KST)</p>
                      <h3 className="title">KTMF CD 민팅</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">로드맵 08</span>
                    <div className="item_in">
                      <p className="date">미정</p>
                      <h3 className="title">KTMF CD 리빌</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">로드맵 09</span>
                    <div className="item_in">
                      <p className="date">미정</p>
                      <h3 className="title">메타버스</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide> */}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;
