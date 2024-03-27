import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-2xl mx-auto px-12">
      <h1 className="text-2xl font-semibold mb-2">Something went wrong 😢</h1>
      <p className="mb-2 text-lightGray">Please Try Aging Letter!</p>
      <button
        onClick={() => navigate(-1)}
        className="hover:text-primary transition-colors  duration-300"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
