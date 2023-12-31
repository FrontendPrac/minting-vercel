import React from "react";
import { motion } from "framer-motion";
import { variantsUp } from "../variants";

const News = () => {
  return (
    <div class="main_sec2">
      <div class="sec2_flex">
        <div class="sec2_text">
          <p>Latest Ariticles</p>
          <div class="baro">
            <a
              href="https://m.sedaily.com/NewsView/29TFYMUQMK#cb"
              target="_blank"
              rel="noreferrer"
            >
              go to new articles
            </a>
          </div>
        </div>
        <motion.div
          whileInView="onscreen"
          initial="offscreen"
          variants={variantsUp}
          custom={0.5}
        >
          <div class="content_wrap">
            <ul class="cont">
              <li>
                <a
                  href="https://m.sedaily.com/NewsView/29TFYMUQMK#cb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="cont_text">
                    <p>MONTHLY HIGHLIGHTS - August 17</p>
                    <div className="cont_title">
                      <p className="n-tit">
                        아즈메타, KTMF K팝 커버 콘테스트 기념 ‘KTMF PASS NFT’
                        선보인다
                      </p>
                      <span className="tedc">|</span>
                      <span className="t-0">서울경제</span>
                    </div>
                  </div>
                  <div class="article">
                    <img src="img/new--3.png" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://v.daum.net/v/20230722204611292"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="cont_text">
                    <p>MONTHLY HIGHLIGHTS - July 22</p>
                    <div className="cont_title">
                      <p className="n-tit">
                        KTMF K팝 커버 콘테스트, 전 세계 지원자 몰려들어 흥행
                        예감
                      </p>
                      <span className="texdc">|</span>
                      <span className="t-0">서울경제</span>
                    </div>
                  </div>
                  <div class="article">
                    <img src="img/new--2.jpg" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://m.sedaily.com/NewsView/29S39CBPC7#cb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="cont_text">
                    <p>MONTHLY HIGHLIGHTS - July 11</p>
                    <div className="cont_title">
                      <p className="n-tit" maxlength="20">
                        K팝 함성, 시공간 뛰어넘는다 ··· KTMF K팝 커버 콘테스트
                      </p>
                      <span className="texdc">|</span>
                      <span className="t-0">서울경제</span>
                    </div>
                  </div>
                  <div class="article">
                    <img src="img/new--1.jpg" alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
