/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ContactFormModal, ServiceModal } from "./ContactForm";
import { services } from "../data/cards";

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="service-card" onClick={() => onClick(service)}>
      <img
        src={service.src}
        alt={service.title}
        className="service-card-image"
      />
      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

const ServiceCardGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="service-grid-wrapper">
      <div className="service-card-grid">
        {services?.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={handleCardClick}
          />
        ))}
      </div>
      {isModalOpen && <ServiceModal onClose={closeModal} />}
    </div>
  );
};
export default ServiceCardGrid;
