import "../styles/ProcessCard.css";

export default function ProcessCard({ icon, nb, title, text, size, top }) {
  return (
    <div id="processCard">
      <img
        src={icon}
        alt={`${title} ${icon}`}
        style={{ width: `${size}`, top: `${top}` }}
      />
      <p className="cardNB">{nb}</p>
      <p className="cardTitle">{title}</p>
      <p className="cardText">{text}</p>
    </div>
  );
}
