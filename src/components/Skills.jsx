/* eslint-disable react/prop-types */
import { useState } from "react";
import { ServiceModal } from "./ContactForm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const machineLearning = [
  "Statistical Analysis",
  "Logistical Regression",
  "Classification",
  "Data Clustering",
];

const webDevelopment = [
  "Building Custome Sites",
  "Fast And Responsive",
  "Cross Platform",
  "Scalability",
];

const paymentProcessor = [
  "Fast And Secure Payments",
  "No Latency",
  "No Fees",
  "Charge-back Support",
];

const employeeManagement = [
  "Manage Employees",
  "Employee Accounts",
  "Manager Accounts",
  "Employee Statistics",
];

const Skill = ({ title, skillsArr }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="skill-card">
        <span style={{ cursor: "pointer" }} onClick={toggleModal}>
          <div className="title">
            <h5>{title}</h5>
          </div>
          <div className="content">
            {skillsArr &&
              skillsArr?.map((skill, index) => (
                <div className="item" key={index}>
                  <CheckCircleIcon
                    sx={{ height: "18px", width: "18px", color: "green" }}
                  />
                  <p>{skill}</p>
                </div>
              ))}
          </div>
        </span>
      </div>
      {isModalOpen && <ServiceModal onClose={toggleModal} />}
    </>
  );
};

const Skills = () => {
  return (
    <>
      <header
        className="header-text"
        style={{
          marginBottom: "5em",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2>Features And Benefits</h2>{" "}
        <span style={{ width: "100%", height: "20px", backgroundColor: "green"}}></span>
      </header>
      <div className="skills-grid">
        <Skill title={"Machine Learning"} skillsArr={machineLearning} />
        <Skill title={"Web Development"} skillsArr={webDevelopment} />
        <Skill title={"Payment Processing"} skillsArr={paymentProcessor} />
        <Skill title={"Employee Management"} skillsArr={employeeManagement} />
      </div>
    </>
  );
};

export default Skills;
