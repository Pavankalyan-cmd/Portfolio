import Button from "../Button/Button";
import ResumeButton from "../resumedownload/Resumebutton";

export default function Bodysection() {
  return (
    <div className="container-fluid mt-5" id="home">
      <div className="body-section">
        <div className="body-section1">
          <img src="https://i.postimg.cc/bvPrQc3d/unnamed.jpg" alt="profile" />
        </div>
        <div className="body-section2">
          <h3 style={{ color: "#333333 " }}>
            Hey <span class="waving-hand">👋</span>
          </h3>
          <h1 style={{ fontWeight: "bolder", color: "#333333 " }}>
            I'm Pavankalyan Vandanapu
          </h1>
          <span
            style={{
              color: "#333333 ",
              fontSize: "1.8em",
              fontWeight: "bolder",
            }}
          >
            Full Stack{" "}
          </span>
          <span
            className="typewriter thick"
            style={{ fontSize: "1.8em", fontWeight: "bolder" }}
          ></span>
          <p
            style={{
              color: "#333333",
              fontSize: "1.2em",
              marginTop: "1rem",
              textAlign: "justify",
            }}
          >
            A passionate and detail-oriented software developer with a solid
            academic background in Electrical Engineering and hands-on
            experience in creating user-friendly web and software applications.
            My goal is to contribute to impactful projects while continuously
            learning and growing as a developer.
          </p>
          <div className="d-flex mt-4">
            <Button />
            <ResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
