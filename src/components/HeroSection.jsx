import Button from "./Button";
import joystick from "../assets/manette2.png";
import "../styles/HeroSections.css";

export default function HeroSection() {
  return (
    <section id="heroSection">
      <hgroup>
        <h1>Du jeu à la programmation, un défi à la fois</h1>
        <p>
          Chaque jeu illustre un concept clé, comme les boucles ou les
          conditions, et propose des exercices adaptés pour progresser étape par
          étape.
        </p>
        <Button
          text="Explorer les jeux."
          Bcolor="Second"
          target="#gamesSection"
        />
      </hgroup>
      <figure>
        <img src={joystick} alt="joystick figure" />
      </figure>
    </section>
  );
}
