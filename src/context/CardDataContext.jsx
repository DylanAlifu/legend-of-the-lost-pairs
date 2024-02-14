import { createContext, useState } from "react";
import { generateCardData } from "../utils";

const CardDataContext = createContext();

const CardDataContextProvider = ({ children }) => {
  const numberOfCards = 36;
  const [cardData, setCardData] = useState(generateCardData(numberOfCards));
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (card) => {
    // if we clicked on the same card, don't take any action
    if (flippedCard && card.id === flippedCard.id) {
      return;
    }

    // if there's already 2 cards that's flipped, we don't take any actions
    const numberOfFlippedCards = cardData.filter(
      (cardItem) => cardItem.isFlipped
    ).length;
    if (numberOfFlippedCards >= 2) {
      return;
    }

    // update the card data to flip the card
    const updatedCardData = cardData.map((cardItem) => {
      if (cardItem.id === card.id) {
        return {
          ...cardItem,
          isFlipped: true,
        };
      }
      // return the cardItem as is
      return cardItem;
    });
    setCardData(updatedCardData);

    // if there's no flippedCard yet, we're gonna update that, and that's it
    if (!flippedCard) {
      setFlippedCard(card);
      return;
    }

    // handle the situation where there's already a flippedCard
    if (flippedCard.imageUrl === card.imageUrl) {
      // match
      const updatedCardData = cardData.map((cardItem) => {
        if (cardItem.id === card.id || cardItem.id === flippedCard.id) {
          return {
            ...cardItem,
            isMatched: true,
            isFlipped: false,
          };
        }
        // return the cardItem as is
        return cardItem;
      });

      setTimeout(() => {
        setCardData(updatedCardData);
      }, 1000);
    } else {
      // no match
      // reset the data back to original
      const updatedCardData = cardData.map((cardItem) => {
        return {
          ...cardItem,
          isFlipped: false,
        };
      });

      setTimeout(() => {
        setCardData(updatedCardData);
      }, 1000);
    }
    // rest
    setFlippedCard(null);
  };

  return (
    <CardDataContext.Provider
      value={{
        numberOfCards,
        cardData,
        handleCardClick,
      }}
    >
      {children}
    </CardDataContext.Provider>
  );
};

export { CardDataContextProvider, CardDataContext };
