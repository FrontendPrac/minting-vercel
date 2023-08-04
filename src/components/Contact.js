import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const titleRef = useRef("");
  const messageRef = useRef("");
  const checkboxRef = useRef(false);

  // const onClickSendEmail = (event) => {
  //   setTitle(titleRef.current.value);
  //   setMessage(messageRef.current.value);

  //   const isChecked = checkboxRef.current.checked;

  //   if (!isChecked) {
  //     const anchorDiv = document.getElementById("send_message");
  //     anchorDiv.href = "";
  //     event.preventDefault();
  //     alert("Please agree to send the email");
  //   }
  // };

  const onClickSendEmail = (event) => {
    event.preventDefault();

    const isChecked = checkboxRef.current.checked;

    if (isChecked) {
      const templateParams = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        title: titleRef.current.value,
        message: messageRef.current.value,
      };

      emailjs
        .send(
          "service_7xqn1cp",
          "template_s0hzvht",
          templateParams,
          "AjIHDvbqIaFWEYxuL"
        )
        .then(
          function (response) {
            console.log("Success Send Email", response.status, response.text);
            alert("메일 전송에 성공했습니다.");
          },
          function (error) {
            console.log("Failed Send Email", error);
            alert("메일 전송에 실패했습니다.");
          }
        );
    } else {
      alert("개인정보 수집에 동의해주세요.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact Us"
          data-align="center"
        >
          Contact Us
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                  (주)한컴프론티스는 2001년에 설립, 메타버스(Metaverse) 및 AIoT
                  플랫폼 개발기술로 2020년 과기부 ICT 유니콘으로 선정된 글로벌
                  유망중소기업입니다. 2001년 설립 이래, 국내외 2,000개 이상 B2B,
                  B2G 고객처를 확보하였으며, 국방, 자동차, 건설, 해양, 우주항공,
                  교육산업 등 다양한 산업분야에서 차별화된 ICT 기술력과 사업화
                  능력으로 괄목할만한 성장을 이루고 있습니다.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:+820316277950">+82 031 627 7950</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a href="mailto:help.arzmeta@hancomfro.com">
                    help.arzmeta@hancomfro.com
                  </a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>
                  경기도 성남시 분당구 대왕판교로 644번길 49, 한컴타워 2층
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="fn_cs_contact_form">
          {/* <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          > */}
          <div className="input_list">
            <ul>
              <li>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  ref={nameRef}
                />
              </li>
              <li>
                <input
                  id="email"
                  type="text"
                  placeholder="Your Email *"
                  ref={emailRef}
                />
              </li>
              <li>
                <input
                  id="tel"
                  type="text"
                  placeholder="Your Phone (optional)"
                  ref={phoneRef}
                />
              </li>
              <li>
                <input
                  id="subject"
                  type="text"
                  placeholder="Your Title *"
                  ref={titleRef}
                />
              </li>
              <li className="full">
                <textarea
                  id="message"
                  placeholder="Your Message *"
                  defaultValue={""}
                  ref={messageRef}
                />
              </li>
              <li className="full">
                <label className="fn__checkbox">
                  <input type="checkbox" ref={checkboxRef} />
                  <span className="fn__checkmark">
                    <img src="/svg/checked.svg" alt="" className="fn__svg" />
                  </span>
                  <p>
                    I’m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </p>
                </label>
                <div className="mw300" onClick={onClickSendEmail}>
                  <a
                    id="send_message"
                    // href={`mailto:dlrlehd7@daum.net?subject=${title}&body=${message}`}
                    className="metaportal_fn_button full"
                  >
                    <span>Send Message</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="returnmessage"
            data-success="Your message has been received, We will contact you soon."
          />
          <div className="empty_notice">
            <span>! Please Fill Required Fields !</span>
          </div>
          {/* </form> */}
        </div>
      </div>
    </section>
  );
};
export default Contact;
