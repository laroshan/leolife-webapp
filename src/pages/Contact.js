import React from "react";
import HeroSectionImg from "../Components/HerSectionImg";
import TitleComponent from "../Components/TitleComponent";
import img from "../images/Contact.jpg";
function Contact() {
  return (
    <section>
      <HeroSectionImg img={img} max={false} />
      <div className="container py-2">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <TitleComponent title={"Contact us"} center={true} />
            <form
              action="https://formspree.io/f/mbjqpwzv"
              className="mt-5"
              method="POST"
            >
              <div className="form-group ">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="form-group py-2">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                ></input>
              </div>
              <div className="form-group py-2">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                ></input>
              </div>
              {/* Text area */}
              <div className="form-group py-2">
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="send"
                  className="form-control bg-primary text-white"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
