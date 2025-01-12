import SimpleCloud from "../cloudbutton/Tagcloudbutton";

export default function Skills() {
  return (
    <div className="container-fluid mt-5" id="Skills">
      <div>
        <h1 className="project-title mx-4 " style={{ textAlign: "end" }}>
          Skills
        </h1>
        <div class="lines2"></div>
      </div>
      <div className="skills-container mt-5">
        <SimpleCloud />
      </div>
    </div>
  );
}
