import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Shivam Sogarwal</div>
      <div>
        <Link to={"https://github.com/shivamsogarwal2026"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/shivam-sogarwal-54ab75268/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/shivam_sogarwal_/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
