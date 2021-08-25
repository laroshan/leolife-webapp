import React from "react";

function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <h4>Contact us</h4>
          <form
            action="https://formspree.io/f/mbjqpwzv"
            className="mt-5"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="SUbject"
              ></input>
            </div>
            {/* Text area */}
            <div className="form-group">
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
    </section>
  );
}

export default Contact;
