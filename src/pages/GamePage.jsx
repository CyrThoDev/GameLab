import { useParams } from "react-router-dom";
import { gamesList } from "../data/gamesList";

export default function GamePage() {
  const { id } = useParams();
  const game = gamesList.find((game) => game.id === Number.parseInt(id));

  return (
    <div>
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      {game.component}
    </div>
  );
}
