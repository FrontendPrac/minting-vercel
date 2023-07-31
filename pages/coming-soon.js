import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
const ComingSoon = () => {
  // Get Kor remaining time
  const [korDiffTime, setKorDiffTime] = useState();
  const [korDays, setKorDays] = useState();
  const [korHours, setKorHours] = useState();
  const [korMinutes, setKorMinutes] = useState();
  const [korSeconds, setKorSeconds] = useState();

  // Get UTC remaining time
  const [utcDiffTime, setUTCDiffTime] = useState();
  const [utcDays, setUTCDays] = useState();
  const [utcHours, setUTCHours] = useState();
  const [utcMinutes, setUTCMinutes] = useState();
  const [utcSeconds, setUTCSeconds] = useState();

  const showKorCountdown = () => {
    const intervalId = setInterval(() => {
      const korCurrentTime = new Date();

      const korTargetTime = new Date("2023/09/07 19:00:00"); // KST 입력

      const korDiffTime = korTargetTime - korCurrentTime;

      if (korDiffTime <= 0) {
        setKorDiffTime(0);
        clearInterval(intervalId);
        console.log("한국 타이머 종료");
      } else {
        const days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (korDiffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (korDiffTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((korDiffTime % (1000 * 60)) / 1000);

        setKorDays(days);
        setKorHours(hours);
        setKorMinutes(minutes);
        setKorSeconds(seconds);
        setKorDiffTime(korDiffTime);
      }
    }, 1000);
  };

  const showUTCCountDown = () => {
    const intervalId = setInterval(() => {
      const korCurrentTime = new Date();
      const utcCurrentTime = new Date(
        korCurrentTime.getTime() +
          korCurrentTime.getTimezoneOffset() * 60 * 1000
      );

      const korTargetTime = new Date("2023/09/07 10:00:00"); // UTC 입력
      const utcTargetTime = new Date(
        korTargetTime.getTime() + korTargetTime.getTimezoneOffset() * 60 * 1000
      );

      const utcDiffTime = utcTargetTime - utcCurrentTime;

      if (utcDiffTime <= 0) {
        setUTCDiffTime(0);
        clearInterval(intervalId);
        console.log("미국 타이머 종료");
      } else {
        const days = Math.floor(utcDiffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (utcDiffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (utcDiffTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((utcDiffTime % (1000 * 60)) / 1000);

        setUTCDays(days);
        setUTCHours(hours);
        setUTCMinutes(minutes);
        setUTCSeconds(seconds);
        setUTCDiffTime(utcDiffTime);
      }
    }, 1000);
  };

  useEffect(() => {
    showKorCountdown();
    showUTCCountDown();
  }, []);

  return (
    <Layout pageTitle={"Coming Soon"}>
      <div className="metaportal_fn_coming_soon">
        <div className="container">
          <div className="soon_countdown">
            {/* 
						There is two types of countdown: due_date (Due Date), ever (Evergreen timer)
							1. 	data-type="due_date"
								In this case you have to change value of data-date. For example:
								data-date="October 13, 2022 12:30:00"
								It will mean that mint will finished at this time

							2. 	data-type="ever"
								In this case you have to change values of data-days, data-hours, data-minutes and data-seconds. For example:
								data-days="34"
								data-hours="10"
								data-minutes="20"
								data-seconds="0"
								It will mean that the time expires after this time, but when the page is refreshed, the value will return again. It means, it won't end.
						Add boxed class to get #1 type of countdown
					*/}
            <h3
              className="metaportal_fn_countdown boxed"
              data-type="ever"
              data-date="October 13, 2022 12:30:00"
              data-days={34}
              data-hours={9}
              data-minutes={20}
              data-seconds={10}
            >
              {korDiffTime <= 0
                ? "한국 타이머 종료"
                : `KST : ${korDays}d: ${korHours}h: ${korMinutes}m: ${korSeconds}s`}
              <br />
              {utcDiffTime <= 0
                ? "미국 타이머 종료"
                : `UTC : ${utcDays}d: ${utcHours}h: ${utcMinutes}m: ${utcSeconds}s`}
            </h3>
          </div>
          <div className="soon_title">
            <h3
              className="fn__maintitle"
              data-text="Public Minting is Coming Soon"
              data-align="center"
            >
              Public Minting is Coming Soon
            </h3>
            <p>
              Our website is coming soon. We are currently working on our
              website. Please check again within couple days.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ComingSoon;
