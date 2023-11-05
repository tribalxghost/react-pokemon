
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hook";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [data, addData] = useAxios();
      const url = "https://deckofcardsapi.com/api/deck/new/draw/"
      const handleClick = () => addData(url)


  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleClick}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
