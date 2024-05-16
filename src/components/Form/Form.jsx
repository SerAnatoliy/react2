import { CustomForm } from "./Form.styled";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, description } = e.target.elements;
    console.log(name.value, email.value, description.value);
  };
  return (
    <CustomForm onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <textarea name="description" placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </CustomForm>
  );
};
