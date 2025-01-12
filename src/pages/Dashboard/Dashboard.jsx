import About from "../../components/About/About";
import Bodysection from "../../components/body/Bodysection";
import Certificates from "../../components/certificates/Certificates";
import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";

import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/Skills/skills";

export default function Dashboard() {
  return (
    <div className="container-fluid  ">
      <div className="container-fluid dash">
        <div class="blob"></div>
        <div className="container-fluid bg">
          <Navbar />
          <Bodysection />
          <About />
          <Projects />
          <Skills />
          <Certificates />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
}
