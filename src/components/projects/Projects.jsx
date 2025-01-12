import React, { useState } from "react";
import ToolButton from "../Icons/Icons";
import SkillButton from "../Button2/Button2";
import Drivebutton from "../button3/Drivebutton";

const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "https://i.postimg.cc/mkztL4Vg/landingpage.png",
      title: "ExpenseWise",
      tools: [
        "React.js",
        "MongoDB Atlas",
        "Material-UI",
        "Recharts",
        "Clerk",
        "Django",
        "RestApi",
      ],
      url1: "https://github.com/Pavankalyan-cmd/Expensewise",
      url2: "https://drive.google.com/drive/folders/197IYkwUhWqEz82qzVSqGI2Qhb0Lrv7UH?usp=sharing",

      description:
        "I am excited to introduce ExpenseWise, a web application designed to help users manage their personal finances effectively. Built with React and Material-UI, it features secure authentication via Clerk, intuitive expense and income management, and interactive data visualizations using Recharts. The application offers a modern, responsive interface with secure cloud storage through MongoDB Atlas, allowing users to easily export transactions as CSV or Excel files. Future enhancements will include AI-powered budgeting, automated tracking of recurring transactions, multi-currency support, and payment notifications. This project has strengthened my skills in both frontend and backend development, particularly with React, Django, and MongoDB, making ExpenseWise a comprehensive tool for efficient budgeting.",
    },
    {
      src: "https://i.postimg.cc/Y05jjPyf/Landing-page.png",
      title: "Todooo",
      tools: [
        "React.js",
        "MongoDB",
        "Formik",
        "Axios",
        "Toastify",
        "Express.js",
        "Node.js",
      ],
      url1: "https://github.com/Pavankalyan-cmd/Todooo",
      url2: "https://drive.google.com/drive/folders/1c-6zybjwzQ6jKFN2zSw7N-K5fhwMJauT?usp=sharing",
      description:
        "I am excited to present my project, a responsive task management application built with React.js, MongoDB, Formik, Axios, and Toastify. This user-friendly platform streamlines task organization and enhances user engagement through real-time notifications, cookie-based session management, and a fully responsive design. Key features include task editing capabilities and seamless collaboration with back-end teams, resulting in improved efficiency and an intuitive user experience. Looking ahead, I plan to implement task prioritization, advanced search options, collaborative team management, and AI-driven task suggestions to further elevate productivity and user satisfaction.",
    },
    {
      src: "https://i.postimg.cc/8CNJhqkZ/gamepage-Copy.png",
      title: "TIC-TAC-TOE",
      tools: ["React.js", "JavaScript", "CSS", "HTML"],
      url1: "https://github.com/Pavankalyan-cmd/TIC-TAC-TOE-React",
      url2: "https://drive.google.com/drive/folders/1FNdqTnmxew1XSyMxZ86pcJMrKkOACM-2?usp=sharing",
      description:
        "I am excited to introduce my latest project, a React Tic-Tac-Toe Game, which I built during weekends as I began my journey into React. This classic game allowed me to apply my newfound skills and learn valuable lessons along the way. Key features include real-time gameplay, an interactive user interface, player name customization, and a move log with game outcome display. Through this project, I gained a solid understanding of React fundamentals, state management, component structure, event handling, and CSS styling. This experience reflects my commitment to continuous learning and my passion for technology, as I explored new concepts and overcame challenges while creating something from scratch.",
    },
    {
      src: "https://i.postimg.cc/hjGXYTdx/pixella.jpg",
      title: "Pixella",
      tools: [
        "Streamlit",
        "Python",
        "Google's Generative AI (Gemini)",
        "HTML",
        "CSS",
      ],
      url1: "https://github.com/Pavankalyan-cmd/Pixella",
      url2: "https://drive.google.com/drive/folders/1pJb_tpR7vLBXPUeDb8KykGw-9II4ola2?usp=sharing",
      description:
        "I am excited to introduce my latest project, Pixella, a cutting-edge AI-powered tool designed to generate brief descriptions of images based on user-input prompts. Built using Streamlit, a Python library, and Google's Generative AI (Gemini) model, Pixella allows users to upload an image and input a prompt, which the application then uses to generate a concise description. Key features include the ability to upload images in formats such as JPG, JPEG, or PNG, input prompts to guide the description, and receive a brief summary of the image based on the input. I look forward to further developing Pixella and exploring its potential applications in various industries, such as image search and accessibility, while enhancing my skills in AI and web development.",
    },
    {
      src: "https://i.postimg.cc/xTNzYvF3/CineZone.jpg",
      title: "CineZone",
      tools: ["HTML", "CSS", "JavaScript"],
      url1: "https://github.com/Pavankalyan-cmd/CineZone",
      url2: "https://drive.google.com/drive/folders/1MlEjn33uLZzR_7Pxq99CE0PL5dt21JFa?usp=sharing",
      description:
        "I am excited to introduce my latest project, Cinezone, a movie search engine built using HTML, CSS, and JavaScript. This interactive platform allows users to effortlessly search for their favorite movies, showcasing a user-friendly interface and dynamic search functionality. The project likely incorporates API integration to fetch real-time movie data, providing an engaging experience for users. I look forward to your feedback on this project as I continue to enhance my web development skills and explore new features for Cinezone.",
    },
  ];

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container-fluid project" id="project">
      <div>
        <h1 className="project-title mx-4">Projects</h1>
        <div class="lines"></div>
      </div>
      <div className="project-container mt-5">
        {/* Left: Vertical Carousel */}
        <div className="project-image">
          <div
            id="verticalCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    className="d-block  img2"
                    alt={image.title}
                  />
                </div>
              ))}
            </div>
            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#verticalCarousel"
              data-bs-slide="prev"
              onClick={() =>
                handleSlide(
                  activeIndex === 0 ? images.length - 1 : activeIndex - 1
                )
              }
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#verticalCarousel"
              data-bs-slide="next"
              onClick={() =>
                handleSlide(
                  activeIndex === images.length - 1 ? 0 : activeIndex + 1
                )
              }
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="project-text d-flex flex-column justify-content-center ">
          <h3>{images[activeIndex].title}</h3>
          <div className="d-flex flex-wrap text-center my-2">
            {images[activeIndex].tools &&
              images[activeIndex].tools.map((tool, index) => (
                <SkillButton key={index} tool={tool} />
              ))}
          </div>

          <p style={{ color: "#333333" }}>{images[activeIndex].description}</p>
          <div className="d-flex ">
            <ToolButton url={images[activeIndex].url1} />
            <Drivebutton url={images[activeIndex].url2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
