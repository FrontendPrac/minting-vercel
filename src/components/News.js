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
                  <p>July 09, 2023 / MetaVerse</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="http://www.koreatimes.com/article/1472541">
                      <a>2023 Koreatimes Music Festival K POP 경연대회</a>
                    </Link>
                  </h3>
                </div>
                <div className="image">
                  <Link href="/blog-single">
                    <a>
                      <img src="/img/NFT_POPUP_ticket.png" alt="" />
                    </a>
                  </Link>
                </div>
                {/* <div className="read_more">
                  <Link href="/blog-single">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div> */}
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
                  <p>July 09, 2023 / MetaVerse</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://m.sedaily.com/NewsView/29S39CBPC7#cb">
                      <a>
                        K팝 함성, 시공간 뛰어넘는다 ··· KTMF K팝 커버 콘테스트
                      </a>
                    </Link>
                  </h3>
                </div>
                {/* <div className="read_more">
                  <Link href="/blog-single">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div> */}
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>July 22, 2023 / NFT </p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://v.daum.net/v/20230722204611292">
                      <a>
                        KTMF K팝 커버 콘테스트, 전 세계 지원자 몰려들어 흥행
                        예감
                      </a>
                    </Link>
                  </h3>
                </div>
                {/* <div className="read_more">
                  <Link href="/blog-single">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div> */}
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>July 09, 2023 / MetaVerse</p>
                </div>
                {/* <div className="read_more">
                  <Link href="/">
                    <a>
                      <span>Read More</span>
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="bottom_part">
            <div className="left_bot">
              <Link href="http://www.koreatimes.com/article/1472541">
                <a className="metaportal_fn_button full">
                  <span>Read All Articles</span>
                </a>
              </Link>
            </div>
            <div className="right_bot">
              <p>
                We’re a team of creatives who are excited about unique ideas and
                create consectetur adipiscing elit. Etiam vitae purus a lectus
                semper.
              </p>
            </div>
          </div>
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default News;
