import "./card-list.styles.css";
import "../card/card.component";
import Card from "../card/card.component";

const CardList = ({ monsters }) => (
  //props is the same as this.props(for classes)

  <div className="card-list">
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return <Card name={name} email={email} id={id} />;
    })}
  </div>
);
export default CardList;
