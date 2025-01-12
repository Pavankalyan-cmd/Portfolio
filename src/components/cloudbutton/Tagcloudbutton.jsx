import React from "react";
import SkillButton from "../button4/Skillbutton";

const data = [
  {
    value: "JavaScript",
    count: 20,
    clr: "#fff59d",
    clr2: "#FFF176",
    icon: <i className="fa-brands fa-js mx-1"></i>,
  },
  {
    value: "React.js",
    count: 22,
    clr: "#61DAFB",
    clr2: "#21C3F2",
    icon: <i className="fa-brands fa-react mx-1"></i>,
  },
  {
    value: "HTML5",
    count: 15,
    clr: "#E34F26",
    clr2: "#F06529",
    icon: <i className="fa-brands mx-1 fa-html5"></i>,
  },
  {
    value: "MySQL",
    count: 18,
    clr: "#4479A1",
    clr2: "#005C7A",
    icon: <i class="fa-solid fa-database mx-1"></i>,
  },
  {
    value: "CSS3",
    count: 18,
    clr: "#1572B6",
    clr2: "#33A9DC",
    icon: <i className="fa-brands fa-css3 mx-1"></i>,
  },
  {
    value: "Python",
    count: 20,
    clr: "#3776AB",
    clr2: "#4B8BBE",
    icon: <i className="fa-brands fa-python mx-1"></i>,
  },
  {
    value: "GitHub",
    count: 15,
    clr: "#181717",
    clr2: "#24292E",
    icon: <i className="fa-brands fa-github mx-1"></i>,
  },
  {
    value: "REST API",
    count: 15,
    clr: "#F7DF1E",
    clr2: "#E8C300",
    icon: <i class="fa-solid fa-server mx-1"></i>,
  },
];

const SimpleCloud = () => {
  const getFontSize = (count) => {
    const minSize = 12;
    const maxSize = 35;
    const minCount = Math.min(...data.map((tag) => tag.count));
    const maxCount = Math.max(...data.map((tag) => tag.count));
    return (
      ((count - minCount) / (maxCount - minCount)) * (maxSize - minSize) +
      minSize
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "9% auto",
        "@media (max-width: 1024px)": {
          margin: "7% auto",
        },
        "@media (max-width: 767px)": {
          margin: "5% auto",
        },
        "@media (max-width: 480px)": {
          margin: "3% auto",
        },
      }}
      className="container-fluid  w-100"
    >
      {data.map((tag) => (
        <span
          key={tag.value}
          style={{
            fontSize: getFontSize(tag.count),
            margin: "5px",
            cursor: "pointer",
            transition: "0.3s",
            "@media (max-width: 1024px)": {
              fontSize: getFontSize(tag.count) - 2,
              margin: "3px",
            },
            "@media (max-width: 767px)": {
              fontSize: getFontSize(tag.count) - 4,
              margin: "2px",
            },
            "@media (max-width: 480px)": {
              fontSize: getFontSize(tag.count) - 6,
              margin: "1px",
            },
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <SkillButton
            skill={tag.value}
            fontSize={`${getFontSize(tag.count)}px`}
            background={tag.clr}
            bgclr={tag.clr2}
            children={tag.icon}
          />
        </span>
      ))}
    </div>
  );
};

export default SimpleCloud;
