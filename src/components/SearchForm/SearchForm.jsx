import { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
