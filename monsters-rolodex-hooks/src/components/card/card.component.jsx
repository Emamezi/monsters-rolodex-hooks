import "./card.styles.css";

const Card = (monsters) => {
  const { name, email, id } = monsters;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster -${name}`}
        src={`https://robohash.org/${id}?set=set2&size=100x100`}
      ></img>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
