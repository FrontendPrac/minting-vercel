import Link from "next/link";
const News = () => {
  return (
    <section id="news">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Latest Articles"
          data-align="center"
        >
          Latest Articles
        </h3>
        {/* News Shotcode */}
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>01</span>
                  </span>
                </div>
                <div className="meta">
                  <p>July 09, 2023 / 한국일보</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="http://www.koreatimes.com/article/1472541">
                      <a target="_blank" rel="noreferrer">
                        2023 Koreatimes Music Festival K POP 경연대회
                      </a>
                    </Link>
                  </h3>
                </div>
                <div className="image">
                  <Link href="/blog-single">
                    <a target="_blank" rel="noreferrer">
                      <img src="/img/NFT_ARTICLE.jpg" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>02</span>
                  </span>
                </div>
                <div className="meta">
                  <p>July 11, 2023 / 서울경제</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://m.sedaily.com/NewsView/29S39CBPC7#cb">
                      <a target="_blank" rel="noreferrer">
                        K팝 함성, 시공간 뛰어넘는다 ··· KTMF K팝 커버 콘테스트
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>July 22, 2023 / 서울경제</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://v.daum.net/v/20230722204611292">
                      <a target="_blank" rel="noreferrer">
                        KTMF K팝 커버 콘테스트, 전 세계 지원자 몰려들어 흥행
                        예감
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="blog__item"></div>
              {/* <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>April 24, 2023 / MetaVerse</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://www.etnews.com/20230423000047">
                      <a target="_blank" rel="noreferrer">
                        한컴그룹, 메타버스 플랫폼 [아즈메타] 닻 올렸다
                      </a>
                    </Link>
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
          <div className="bottom_part">
            <div className="left_bot">
              <Link href="http://www.koreatimes.com/article/1472541">
                <a
                  className="metaportal_fn_button full"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GO TO LATEST ARTICLES</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default News;
