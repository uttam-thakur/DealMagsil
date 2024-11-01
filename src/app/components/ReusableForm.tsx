import React from "react";
import { TextField, Button } from "@mui/material";

interface FormProps {
  formValues: { [key: string]: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onValidate?: () => boolean;
  isModal?: boolean; // Flag to determine if it's for the modal
}

const ReusableForm: React.FC<FormProps> = ({
  formValues,
  handleInputChange,
  handleSubmit,
  onValidate,
  isModal,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        required
        fullWidth
        sx={{ mb: 2 }}
        value={formValues.name}
        onChange={handleInputChange}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        required
        fullWidth
        sx={{ mb: 2 }}
        value={formValues.email}
        onChange={handleInputChange}
      />
      {isModal && (
        <TextField
          id="query"
          name="query"
          label="Query"
          variant="outlined"
          required
          fullWidth
          sx={{ mb: 2 }}
          value={formValues.query}
          onChange={handleInputChange}
        />
      )}
      {isModal && (
        <TextField
          id="phone"
          name="phone"
          label="Phone Number"
          variant="outlined"
          required
          fullWidth
          sx={{ mb: 2 }}
          value={formValues.phone}
          onChange={handleInputChange}
        />
      )}
      <TextField
        id="message"
        name="message"
        label="Message"
        variant="outlined"
        required
        multiline
        rows={5}
        sx={{ mb: 2 }}
        value={formValues.message}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#ff6347",
          color: "white",
          "&:hover": { backgroundColor: "#e5533d" },
        }}
        onClick={onValidate}
      >
        Submit
      </Button>
    </form>
  );
};

export default ReusableForm;
