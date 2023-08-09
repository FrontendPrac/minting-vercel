import { useEffect } from "react";
import WaterWave from "react-water-wave";
import { Swiper, SwiperSlide } from "swiper/react";
import { Hero4Slider } from "../sliderProps";
import { dataBgImg } from "../utilits";

const WaterHero = () => {
  useEffect(() => {
    dataBgImg();
  }, []);

  return (
    <section id="hero">
      <WaterWave id="ripple" imageUrl="/img/bg_home_3.png">
        {(methods) => (
          <div className="fn_cs_hero_slider">
            <div className="bg_overlay" />
            <div className="left_part">
              <h3 className="fn__maintitle big" data-text="ARZ PASS">
                ARZ PASS
              </h3>
              <p>
                ARZ PASS Project는 메타버스라는 꿈과 현실을 이어주는 역할을 하는
                NFT 프로젝트입니다. 우리 프로젝트는 다수의 NFT 컬렉션으로
                구성되어 있으며, 각 NFT 컬렉션마다 메타버스로 가는 로드맵을
                보여줍니다. 하나의 컬렉션에서 수백 개에서 수천 개의 NFT 아이템이
                생성되며, 희귀성 수준에 따라 가치가 달라지기도 합니다.
              </p>
              <a
                href="https://opensea.io/"
                className="metaportal_fn_button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Buy On Opensea</span>
              </a>
            </div>
            <div className="slider_part">
              <Swiper {...Hero4Slider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                        <a
                          className="popup-youtube metaportal_fn_videobutton"
                          href="https://youtu.be/YKh8eTJUql4"
                        >
                          <img src="/svg/play.svg" alt="" className="fn__svg" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/event/nft_ticket.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        )}
      </WaterWave>
    </section>
  );
};
export default WaterHero;
