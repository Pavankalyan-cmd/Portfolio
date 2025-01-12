export default function Contact() {
  return (
    <div className="container-fluid mt-5" id="contact">
      <h1 className="project-title mx-4">Contact Me</h1>
      <div class="lines"></div>
      <div className="contact">
        <div className="contact1">
          <img
            src="https://i.postimg.cc/d3V3P1ND/04-04-4.jpg"
            alt="contact"
          ></img>
        </div>
        <div className="contact2">
          <h2 className="contact-title">Get in Touch</h2>
          <p
            className="contact-text "
            style={{ textAlign: "justify", color: "black" }}
          >
            If you have any questions or just want to say hi, feel free to drop
            a message. I'll try my best to get back to you!
          </p>
          <form>
            <input
              type="text"
              className="input my-3"
              placeholder="Name "
            ></input>

            <input
              type="email"
              className="input my-3"
              placeholder="Email"
            ></input>

            <textarea
              className="input col-3 my-3   "
              placeholder="Message"
            ></textarea>

            <button type="submit" className="btn3 my-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
