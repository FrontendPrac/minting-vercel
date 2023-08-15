import React from "react";

export const Video = () => {
  return (
    <section id="video">
      <div className="fn_cs_video">
        <div className="fn_cd_video_area">
          <video
            className="fn_cd_video"
            playsInline
            autoPlay
            loop
            muted
            src="/img/video/arzmeta.mp4"
          />
        </div>
        <div className="fn_cd_video_top_box">
          <div className="fn_cd_video_text_box">
            <h2>
              ARZPASS
              {/* <br />
              우리들의 메타버스 */}
            </h2>
            <p>
              Start your NFT journey with ARZPASS, <br />
              and get access to a:rzmeta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
