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
      <WaterWave id="ripple" imageUrl="">
        {(methods) => (
          <div className="fn_cs_hero_slider">
            <div className="bg_overlay" />
            <div className="left_part">
              <h3 className="fn__maintitle big" data-text="ARZ PASS">
                ARZ PASS
              </h3>
              <h4>
                Start your NFT journey with ARZPASS, and get access to a:rzmeta
              </h4>
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                        <a
                          className="popup-youtube metaportal_fn_videobutton"
                          href="http://ktmf.koreatimes.com/"
                          target="_blank"
                          rel="noreferrer"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
                          data-bg-img="/img/NFT_POPUP_TICKET.png"
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
