import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder({
  type,
  hidden = true,
  search,
}: {
  type: "large" | "small";
  hidden?: boolean;
  search?: () => void;
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    search?.();
    setQuery("");
  }

  const large =
    "p-2 border text-slate-400 w-56 placeholder:text-stone-500 border-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-primary focus:ring-offset-2";
  const small =
    "bg-slate-500 p-3 text-slate-100 placeholder:text-zinc-800 w-full";
  const style = type === "large" ? large : small;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${hidden ? "hidden md:block" : "w-full"}`}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Order #1246"
        className={style}
      />
    </form>
  );
}

export default SearchOrder;
