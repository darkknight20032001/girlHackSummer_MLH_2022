import onestop from "../images/onestop.jpg";
import bbbp from "../images/bbbp.jpg";
import swadhargreh from "../images/swadhargreh.jpg";
import ujjwala from "../images/ujjwala.jpg";

function Footer() {
  return (
    <>
      <div
        style={{ display: "flex", marginTop: "55px", justifyContent: "center" }}
      >
        <div>
          <a
            target="_blank"
            href="https://wcd.nic.in/schemes/one-stop-centre-scheme-1"
          >
            <img
              src={onestop}
              alt=""
              style={{ margin: "0 60px", width: "100px" }}
            />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.ibef.org/government-schemes/beti-bachao-beti-padhao"
          >
            <img
              src={bbbp}
              alt=""
              style={{ margin: "0 60px", width: "100px" }}
            />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.india.gov.in/spotlight/swadhar-greh-scheme"
          >
            <img
              src={swadhargreh}
              alt=""
              style={{ margin: "0 60px", width: "200px" }}
            />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://pmuy.gov.in/">
            <img
              src={ujjwala}
              alt=""
              style={{ margin: "0 60px", width: "110px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
