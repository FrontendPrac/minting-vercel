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
              <img src="/img/twitter_logo.svg" alt="" className="fn__svg"/>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/arzmeta_/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/instagram_logo.svg" alt="" className="fn__svg"/>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/arzmeta_official"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/telegram_logo.svg" alt="" className="fn__svg"/>

            </a>
          </li>
          <li>
            <a
              href="https://open.kakao.com/o/gda1vbof"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/kakaotalk_logo.svg" alt="" className="fn__svg"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Social;
