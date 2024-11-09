export default function Button({ text, Bcolor, target }) {
  return (
    <a href={target} target="_blank" rel="noopener noreferrer">
      <button
        className="buttonTypeA"
        type="button"
        style={{ backgroundColor: Bcolor === "first" ? "#10AECD" : "#159D1F" }}
      >
        {text}
      </button>
    </a>
  );
}
