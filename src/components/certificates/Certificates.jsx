import "./Carousel.css";
import React, { useState } from "react";
const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certificates = [
    {
      src: "https://i.postimg.cc/kMzWYrJF/Coursera-7-RUU9-AC39-MP8-page-0001.jpg",
      alt: "Certificate1",
      //   title: "Certificate 1",
      //   description: "Description of Certificate 1",
    },
    {
      src: "https://i.postimg.cc/NMvxzW7z/YPWCi-GNTkr6-Qxcp-Eu-Deloitte-Australia-9-Dg-Gm5dhh-PRto-Li-Ac-1667891698319-completion-certificate-page-000.jpg",
      alt: "Certificate2",
      //   title: "Certificate 2",
      //   description: "Description of Certificate 2",
    },
    {
      src: "https://i.postimg.cc/DwyLp1JL/img19.jpg",
      alt: "Certificate3",
      //   title: "Certificate 3",
      //   description: "Description of Certificate 3",
    },
    {
      src: "https://i.postimg.cc/fR2XGkmF/ZZsw-Qd6x-Gydd758vz-Cognizant-USA-9-Dg-Gm5dhh-PRto-Li-Ac-1665146590198-completion-certificate-page-0001.jpg",
      alt: "Certificate4",
      //   title: "Certificate 4",
      //   description: "Description of Certificate 4",
    },
    {
      src: "https://i.postimg.cc/L5pZtPFq/NPde-Q43o8-P9-HJm-Jzg-Goldman-Sachs-9-Dg-Gm5dhh-PRto-Li-Ac-1665151178984-completion-certificate-page-0001.jpg",
      alt: "Certificate5",
      //   title: "Certificate 5",
      //   description: "Description of Certificate 5",
    },
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <div className="container-fluid mt-5">
      <h1 className="project-title mx-4">Certificates</h1>
      <div class="lines"></div>
      <div class="container-fluid carousel-container  image__container ">
        <div class="carousel">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={`carousel__item ${
                index === currentIndex
                  ? "carousel__item--main"
                  : index ===
                    (currentIndex - 1 + certificates.length) %
                      certificates.length
                  ? "carousel__item--left"
                  : "carousel__item--right"
              }`}
            >
              <img src={certificate.src} alt={certificate.alt} />
              {/* <div className="carousel__text">
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
              </div> */}
            </div>
          ))}
          <div class="carousel__btns">
            <button class="carousel__btn" onClick={handlePrev} id="leftBtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
                />
              </svg>
            </button>
            <button class="carousel__btn" onClick={handleNext} id="rightBtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificates;
