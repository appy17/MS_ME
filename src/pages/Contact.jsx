import React from "react";
import GoogleMap from "google-maps-react-markers";
import "../contact.css";
import { FaSearchLocation } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const MapStyle = {
    width: "100%",
    height: "500px",
  };

  return (
    <>
      <div className="director-wrap">
        <div className="director-heading">CONTACT US</div>

        <div class="container">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6823979759424!2d79.0498672751091!3d21.165034080518605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c053faefffff%3A0x7c923483a037662f!2sMinistry%20of%20Micro%20Small%20%26%20Medium%20Enterprise!5e0!3m2!1sen!2sin!4v1712560422981!5m2!1sen!2sin"
              width={MapStyle.width}
              height={MapStyle.height}
              style={{ border: "0", height:'500px' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="row">
            <div class="col-md-6 bg">
              <div class="contact-detail">
                <ul class="contact-ul">
                  <li className="add">
                    <FaSearchLocation className="ic" />{" "}
                    <h4>
                    5382+2X8, CGO Complex, Block "C", Seminary Hills, Nagpur, Maharashtra 440006
                    </h4>
                  </li>

                  <li className="add">
                    <FaPhone className="ic" />
                    <a href="tel:0-7122-5103-52">
                      <b> 0-7122-5103-52</b>
                    </a>
                    ,
                  </li>

                  <li className="add">
                    <MdOutlineAttachEmail className="ic" />
                    <a href="mailto:pardeepkumar4bjp@gmail.com">
                      <b> dcdi_nagpur@dcmsme.gov.in</b>
                    </a>
                  </li>
                  <li className="add">
                  <div className="wrap-2">
                    <a className="heads-1 icons"
                        href="https://www.facebook.com/msmedinagpur.gov.in/"><FaFacebook />
                    </a>
                    <a className="heads-1 icons"
                        href="https://twitter.com/msmedi_nagpur"><FaTwitter />
                    </a>
                    <a className="heads-1 icons"
                        href="https://www.youtube.com/channel/UCI7eKvD3NJt38Bu7hdhIruQ"><FaYoutube />
                    </a>
                </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Contact;
