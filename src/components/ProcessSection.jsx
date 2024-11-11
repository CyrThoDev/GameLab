import ProcessCard from "./ProcessCard";
import play from "../assets/manette.png";
import pseudoCode from "../assets/reflexion.png";
import success from "../assets/reussir.png";
import "../styles/ProcessSection.css";

export default function ProcessSection() {
  return (
    <section id="processSection">
      <div id="processCardContainer">
        <ProcessCard
          icon={play}
          nb="1"
          title="Joue"
          text="lorem ipsum dolor sit amet"
          size="75px"
          top="-10px"
        />
        <ProcessCard
          icon={pseudoCode}
          nb="2"
          title="Pseudo Code"
          text="lorem ipsum dolor sit amet"
          size="65px"
          top="-20px"
        />
        <ProcessCard
          icon={success}
          nb="3"
          title="Résous"
          text="lorem ipsum dolor sit amet"
          size="65px"
          top="-20px"
        />
      </div>
      <div id="speechProcess">
        <h1>Lorem Ipsum Dolor sit amet</h1>
        <p>
          Cupcake ipsum dolor sit amet. Cupcake dragée tart I love cookie
          shortbread. Sweet roll chocolate bar lollipop caramels chocolate bar
          danish carrot cake cotton candy. Fruitcake cupcake topping cookie
          cotton candy icing pastry. Jelly gingerbread lemon drops lollipop
        </p>
      </div>
    </section>
  );
}
