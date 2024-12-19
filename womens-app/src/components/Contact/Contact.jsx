import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div className="flex-parent">
        <div className="info-blurb">
          <h3 className="contact-header">Get In Touch</h3>
          <p>
            Morbi in congue libero. Sed semper laoreet massa, eu molestie metus
            ullamcorper sed. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Maecenas vel est nisl. Fusce bibendum pulvinar dui nec
            pharetra. Donec porttitor molestie tellus sed imperdiet. Cras ac
            enim egestas justo pulvinar porttitor.
          </p>
          <p>Email: womensluncheonofcoloh@gmail.com</p>
          <p>Phone: (614) 555-5555</p>
        </div>
        <div className="message-input">
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" placeholder="First Name"></input>
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" placeholder="Last Name"></input>
          <label htmlFor="user-email">Your Email</label>
          <input id="user-email" placeholder="Your email address"></input>
          <label htmlFor="email-body">Message</label>
          <textarea className="email-body" placeholder="Write Us!"></textarea>
          <button className="email-submitbtn">Send Email</button>
        </div>
      </div>
    </>
  );
}
