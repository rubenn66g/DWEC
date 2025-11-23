function Card({ titulo, children }) {
  return (
    <div>
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

export default Card;
