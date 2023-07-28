import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
const ComingSoon = () => {
  const [diffTime, setDiffTime] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const showCountdown = () => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const targetTime = new Date("2023/09/07 19:00:00").getTime();

      const diffTime = targetTime - currentTime;

      if (diffTime <= 0) {
        setDiffTime(0);
        clearInterval(intervalId);
        console.log("타이머 종료");
      } else {
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setDiffTime(diffTime);
      }
    }, 1000);
  };

  useEffect(() => {
    showCountdown();
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
              {diffTime <= 0
                ? "카운트다운 종료"
                : `${days}d: ${hours}h: ${minutes}m: ${seconds}s`}
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
