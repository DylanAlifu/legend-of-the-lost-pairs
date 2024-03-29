import { createContext, useEffect, useState } from "react";
import { generateCardData } from "../utils";
import { Levels, Speeds } from "../constants";

const CardDataContext = createContext();

const CardDataContextProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const [level, setLevel] = useState(Levels["6x6"]);
  const [speed, setSpeed] = useState(Speeds.medium);

  const [cardData, setCardData] = useState(generateCardData(level));
  const [flippedCard, setFlippedCard] = useState(null);

  const [startedTimeStamp, setStartedTimeStamp] = useState(null);

  const [diffSeconds, setDiffSeconds] = useState(0);
  const [diffMinutes, setDiffMinutes] = useState(0);
  const [diffHours, setDiffHours] = useState(0);

  useEffect(() => {
    const numberOfUnmatchedCards = cardData.filter(
      (cardItem) => !cardItem.isMatched
    ).length;

    if (numberOfUnmatchedCards === 0) {
      setGameCompleted(true);
      setGameStarted(false);
    }
  }, [cardData]);

  const handleStartGame = () => {
    setStartedTimeStamp(new Date());
    setGameStarted(true);
    setGameCompleted(false);
    const newCardData = generateCardData(level);
    setCardData(newCardData);
    setFlippedCard(null);
    setDiffSeconds(0);
    setDiffMinutes(0);
    setDiffHours(0);
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setGameCompleted(false);
    const newCardData = generateCardData(level);
    setCardData(newCardData);
    setFlippedCard(null);
  };

  const handleCardClick = (card) => {
    // if we click on the same card, don't take any actions
    if (flippedCard && card.id === flippedCard.id) {
      return;
    }

    // if there are 2 card already flipped, we don't allow any actions
    const numberOfFlippedCards = cardData.filter(
      (cardItem) => cardItem.isFlipped
    ).length;

    if (numberOfFlippedCards >= 2) {
      return;
    }

    // update the card data to make isFlipped true
    const updatedCardData = cardData.map((cardItem) => {
      if (cardItem.id === card.id) {
        return {
          ...cardItem,
          isFlipped: true,
        };
      }
      return cardItem;
    });
    setCardData(updatedCardData);

    // if there's no flipped yet, we update the current card to flipped card
    if (!flippedCard) {
      setFlippedCard(card);
      return;
    }

    // handle the situation where there is already a flipped card
    if (flippedCard.imageUrl === card.imageUrl) {
      // if matched update isMatched w/ a timeout
      const updatedCardData = cardData.map((cardItem) => {
        if (cardItem.id === card.id || cardItem.id === flippedCard.id) {
          return {
            ...cardItem,
            isMatched: true,
            // reset to false, so we can start look for next match
            isFlipped: false,
          };
        }
        return cardItem;
      });

      setTimeout(() => {
        setCardData(updatedCardData);
      }, speed);
    } else {
      // no match, reset the data back to original
      const updatedCardData = cardData.map((cardItem) => {
        return {
          ...cardItem,
          isFlipped: false,
        };
      });

      setTimeout(() => {
        setCardData(updatedCardData);
      }, speed);
    }
    // reset flippedCard
    setFlippedCard(null);
  };

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    const newCardData = generateCardData(newLevel);
    setCardData(newCardData);
  };

  return (
    <CardDataContext.Provider
      value={{
        gameStarted,
        gameCompleted,
        numberOfCards: level,
        cardData,
        level,
        speed,

        startedTimeStamp,
        diffSeconds,
        setDiffSeconds,
        diffMinutes,
        setDiffMinutes,
        diffHours,
        setDiffHours,

        handleLevelChange,
        setSpeed,
        handleStartGame,
        handleNewGame,
        handleCardClick,
      }}
    >
      {children}
    </CardDataContext.Provider>
  );
};

export { CardDataContext, CardDataContextProvider };
