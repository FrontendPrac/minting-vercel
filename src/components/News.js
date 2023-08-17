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
              href="http://www.koreatimes.com/article/1472541"
              target="_blank"
              rel="noreferrer"
            >
              go to latest articles
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
                  href="http://www.koreatimes.com/article/1472541"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="cont_text">
                    <span>MONTHLY HIGHLIGHTS - July 09</span>
                    <p>
                      2023 Koreatimes Music Festival K POP 경연대회 | 한국일보
                    </p>
                  </div>
                  <div class="article">
                    <img src="img/main/blog_1.jpg" alt="" />
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
                    <span>MONTHLY HIGHLIGHTS - July 11</span>
                    <p>
                      K팝 함성, 시공간 뛰어넘는다 ··· KTMF K팝 커버 콘테스트 |
                      서울경제
                    </p>
                  </div>
                  <div class="article">
                    <img src="img/new--1.jpg" alt="" />
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
                    <span>MONTHLY HIGHLIGHTS - July 22</span>
                    <p>
                      KTMF K팝 커버 콘테스트, 전 세계 지원자 몰려들어 흥행 예감
                      | 서울경제
                    </p>
                  </div>
                  <div class="article">
                    <img src="img/new--2.jpg" alt="" />
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
