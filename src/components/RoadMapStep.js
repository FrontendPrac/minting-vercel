import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="contain">
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
                      <h3 className="title">
                        KTMF PASS 홀더 전용<br />
                        독점 커뮤니티
                      </h3>
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
                        KTMF 코스튬 아이템
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 3</span>
                    <div className="item_in">
                      <h3 className="title">KTMF CD NFT</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 4</span>
                    <div className="item_in">
                      <h3 className="title">스테이킹 & NFTFi</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Chapter 5</span>
                    <div className="item_in">
                      <h3 className="title">아즈메타 메타버스</h3>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;
