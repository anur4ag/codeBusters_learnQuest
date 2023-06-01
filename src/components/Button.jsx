export default function Button({ message }) {
    return (
      <button className="bg-custom-pink hover:bg-custom-pink-dark text-white font-bold py-2 px-4 rounded-lg">
        {message}
      </button>
    );
  }
  