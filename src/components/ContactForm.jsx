/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useContactForm } from "../hooks/useContactForm";

const Form = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='form-group'>
          {/* <label htmlFor="name">Name</label> */}
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='form-input'
            placeholder='Your Name'
          />
        </div>
        <div className='form-group'>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='form-input'
            placeholder='Your Email'
          />
        </div>
        <div className='form-group'>
          {/* <label htmlFor="service">Service</label> */}
          <input
            type='text'
            id='service'
            name='service'
            value={formData.service}
            onChange={handleChange}
            required
            className='form-input'
            placeholder="Service You're Interested In"
          />
        </div>
        <div className='form-group'>
          {/* <label htmlFor="description">Description</label> */}
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
            className='form-textarea'
            placeholder='Describe Your Request'
          />
        </div>
        <button type='submit' className='submit-button'>
          Send Message
        </button>
      </form>
    </>
  );
};

const FormBody = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <div className='contact-form-container'>
        <h2 className='contact-form-title'>Get in Touch</h2>
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

const ModalBody = ({ onClose, title, children }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className='modal-overlay' onClick={handleClickOutside}>
      <div className='modal-content'>
        <span className='close-modal-button' onClick={onClose}>
          &times;
        </span>
        <h2 className='modal-title'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const closeModal = () => {};
  const { formData, handleChange, handleSubmit } = useContactForm(closeModal);

  return (
    <FormBody
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export const ContactFormModal = ({ text, width = null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <div>
      <button className="submit-button" onClick={toggleModal}>
        {text}
      </button>

      {isModalOpen && (
        <ModalBody title={"Contact Me"} onClose={toggleModal}>
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </ModalBody>
      )}
    </div>
  );
};

export const ServiceModal = ({ onClose }) => {
  const { formData, handleChange, handleSubmit } = useContactForm();
  
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <ModalBody title={"Contact Me"} onClose={onClose}>
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </ModalBody>
  );
};

export default ContactForm;
