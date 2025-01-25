import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    service: "",
    description: "",
  });

  // Asychronously fetch the csrf token from the backend to validate user submission
  const handleFormSubmission = async () => {
    try {
      const csrfToken = Cookies.get("csrftoken");
      console.log(csrfToken)
      const response = await axios.post("/contact", formData, { // Using relative path
        headers: {
          "X-CSRFToken": csrfToken,
          "Content-Type": "application/json",
        },
      });
      
      // Validate response before proceeding with form submission
      if (response.status === 201) {
        setFormData({
          name: "",
          email: "",
          industry: "",
          service: "",
          description: "",
        });
        // closeModal();
      } else {
        console.log("Something went wrong with the request.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  // Check if the user missed any input fields
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.description) {
      alert("Please fill out all required fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Set form data when user types in the input field
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handles form submission and validates input fields
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleFormSubmission();
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
};
