import "./Education.css";

export default function Education() {
  return (
    <div className="container-fluid mt-5" id="Education">
      <div>
        <h1 className="project-title mx-4 " style={{ textAlign: "justify" }}>
          Education
        </h1>
        <div class="lines2"></div>
      </div>
      <div className="container-fluid mt-5 d-flex justify-content-center">
        <section className="timeline_area section_padding_130">
          <div className="container-fluid ">
            <div className="row justify-content-center "></div>
            <div className="row">
              <div className="col-12">
                {/* <!-- Timeline Area--> */}
                <div className="apland-timeline-area">
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area ">
                    <div
                      className="timeline-date wow fadeInLeft"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <p>2024</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-9  ">
                        <div
                          className="single-timeline-content d-flex wow fadeInLeft"
                          data-wow-delay="0.3s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <div className="timeline-icon">
                            <i class="fa-solid fa-graduation-cap"></i>
                          </div>
                          <div className="timeline-text">
                            <h6> Bachelor's Degree (E.E.E)</h6>
                            <p>Anurag Engineering College,Kodad,Telangana</p>
                            <div className="go-corner" href="#">
                              <div className="go-arrow">→</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area">
                    <div
                      className="timeline-date wow fadeInLeft"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <p>2021</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-9">
                        <div
                          className="single-timeline-content d-flex wow fadeInLeft"
                          data-wow-delay="0.3s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <div className="timeline-icon">
                            <i class="fa-solid fa-building-columns"></i>
                          </div>
                          <div className="timeline-text">
                            <h6>Diploma Degree (E.E.E)</h6>
                            <p>KITS Engineering College,Khammam,Telangana</p>
                            <div className="go-corner" href="#">
                              <div className="go-arrow">→</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area">
                    <div
                      className="timeline-date wow fadeInLeft"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <p>2016</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-9">
                        <div
                          className="single-timeline-content d-flex wow fadeInLeft"
                          data-wow-delay="0.3s"
                          id="line"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <div className="timeline-icon">
                            <i className="fa fa-id-card" aria-hidden="true"></i>
                          </div>
                          <div className="timeline-text">
                            <h6>High School Degree</h6>
                            <p>
                              Little Flowers High School, Khammam, Telangana
                            </p>
                          </div>
                          <div className="go-corner" href="#">
                            <div className="go-arrow">→</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
