const Social = () => {
  return (
    <div id="social" className="hold">
      <div className="social">
        <h4 className="title">Follow Us:</h4>
        <ul>
          <li>
            <a
              href="https://twitter.com/a_rzmeta"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/svg/social/twitter-1.svg" alt="" className="fn__svg" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/arzmeta_/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/svg/social/instagram-1.svg"
                alt=""
                className="fn__svg"
              />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/arzmeta_official"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/telegram.png"
                alt=""
                style={{ width: "30px", height: "40px", paddingBottom: "5px" }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://open.kakao.com/o/gda1vbof"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/kakao.png"
                alt=""
                style={{ width: "30px", height: "30px", paddingBottom: "5px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Social;
