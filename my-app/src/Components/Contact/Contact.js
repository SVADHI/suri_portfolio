import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    alert("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5c01c20-fdeb-4c84-b942-db7e3ab48944");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="cotact" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>
            Iam currently available to take new projects so feel free to send me
            a message about anything that you want me to work on.You can contact
            anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>surendra.vaddi@outlook.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="callicon" />
              <p>+919791831780</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="loc" />
              <p>India,Bangalore</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your Message here</label>
          <textarea
            name="name"
            rows="8"
            placeholder="Enter your message Here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
