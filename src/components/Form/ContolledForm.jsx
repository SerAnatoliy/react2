import { CustomForm } from "./Form.styled";
import { useState } from "react";

export const ContolledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [description, setDescription] = useState("");
  const handleChange = (e) => {
    // if (e.target.name === "name") {
    //   setName(e.target.value);
    // }
    // if (e.target.name === "email") {
    //   setEmail(e.target.value);
    // }
    // if (e.target.name === "description") {
    //   setDescription(e.target.value);
    // }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <CustomForm onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        value={formData.email}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
      />
      <textarea
        value={formData.description}
        onChange={handleChange}
        name="description"
        placeholder="Message"
      ></textarea>
      <button type="submit">Submit</button>
    </CustomForm>
  );
};
