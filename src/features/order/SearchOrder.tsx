import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="hidden md:block">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Order #1246"
        className="p-2 border text-slate-400 w-56 border-orange-300 rounded-lg focus:outline-none focus:ring focus:ring-primary focus:ring-offset-2"
      />
    </form>
  );
}

export default SearchOrder;
