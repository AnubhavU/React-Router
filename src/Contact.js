import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          " radial-gradient( circle farthest-corner at 5.6% 54.5%,  rgba(47,71,79,1) 0%, rgba(159,188,198,1) 83.6% )",
      }}
    >
      <section className="container ">
        <div className="row " style={{ height: "100vh", paddingTop: "5em" }}>
          <div className="col-sm-12 mb-4 col-md-5">
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="bg-primary text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope"></i> Contact Me:
                  </h3>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      name="data[email]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      name="data[subject]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="text" className="form-control" name="mesg" />
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-7">
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117223.77996815204!2d85.3213263!3d23.3432048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b5a9b0042eef56!2sourcita.com!5e0!3m2!1sen!2sin!4v1589706571407!5m2!1sen!2sin"
                width="100%"
                height="450"
                title="Location"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i class="fa-solid fa-location-dot"></i>
                </a>
                <p> Your Address …...</p>
              </div>
              <div className="col-md-4">
                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i class="fa-solid fa-phone"></i>
                </a>
                <p>+91- 90000000</p>
              </div>
              <div className="col-md-4">
                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i className="fa fa-envelope"></i>
                </a>
                <p> abc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
