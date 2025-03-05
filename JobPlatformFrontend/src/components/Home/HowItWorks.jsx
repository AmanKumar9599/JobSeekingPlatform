import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How  Hello jobs  Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Welcome to Hello Jobs! Since you’ve already created your account, you’re ready to dive in and explore all that our site has to offer.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>     
                Welcome to Hello Jobs! If you’re a recruiter, you can post job listings here. If you’re an applicant, you can search for job opportunities. Just check out our navbar to find these features and start exploring!
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Welcome to Hello Buddy! As a recruiter, you'll find suitable candidates for your openings, and as a candidate, you can apply for the jobs that best match your skills and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
