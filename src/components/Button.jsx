export default function Button({ message, handleClick, href}) {
    return (
      <button onClick={handleClick} className="bg-custom-pink hover:bg-custom-pink-dark text-white text-xl font-bold py-4 mt-6 px-8 rounded-lg drop-shadow-2xl hover:drop-shadow-xl">
        <a href={href}>{message}</a>
      </button>
    );
  }
  