import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "11",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "3",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "20",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "7",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Your dream job is just a click away—start exploring today!</h1>
            <p>
            Find the right job for your skills and aspirations. Start your career journey with ease and confidence on our platform, where opportunities await you
            </p>
          </div>
          <div className="image">
            <img src="https://media.gettyimages.com/id/1181150952/vector/polygon-of-two-high-tech-hands-handshaking.jpg?s=612x612&w=0&k=20&c=-o5qEV33NUzFX0iDrsqqxb9bGR071Mhe15rK0cvZOVg=" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
