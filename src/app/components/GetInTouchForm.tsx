"use client";
import React, { useState, useRef } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import { sendEmail } from "../services/services";

export default function GetInTouchForm() {
  const formRef = useRef(null); // Create a ref for the form

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateFormInputs = () => {
    const { name, email, message } = formValues;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length <= 3 || !nameRegex.test(name)) {
      toast.error(
        "Name must be more than 3 characters and contain only letters!"
      );
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (message.trim() === "") {
      toast.error("Message field cannot be empty!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateFormInputs()) return;

    try {
      // Pass the form element (or its ref) as the third parameter
      await sendEmail(formRef.current);
      setFormValues({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={handleSubmit}
      sx={{ backgroundColor: "#f8f8f8", padding: 3, borderRadius: 2 }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 3, color: "#ff6347" }}
      >
        Get In Touch
      </Typography>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
        required
        sx={{ mb: 3 }}
        value={formValues.name}
        onChange={handleInputChange}
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        required
        sx={{ mb: 3 }}
        value={formValues.email}
        onChange={handleInputChange}
      />
      <TextField
        name="message"
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={5}
        sx={{ mb: 3 }}
        value={formValues.message}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#ff6347", color: "white" }}
      >
        Send Message
      </Button>
    </Box>
  );
}
