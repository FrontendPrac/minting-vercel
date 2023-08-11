import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <ul>
              <li>Copyright 2023 — Hancom Frontis</li>
              <li>Email - arzmeta.official@hancomfro.com</li>
            </ul>
            {/* <p>
              Copyright 2023 — Hancom Frontis
            </p>
            <p>
              Copyright 2023 — Hancom Frontis
            </p> */}
          </div>
          {/* <div className="right_part">
            <ul>
              <li>
                <Link href="/policy">
                  <a className="creative_link">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="creative_link">Cookies</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions">
                  <a className="creative_link">Terms &amp; Conditions</a>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
