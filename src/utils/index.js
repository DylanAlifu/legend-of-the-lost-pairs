const generateCardData = (numberOfCards) => {
  const numberOfImages = numberOfCards / 2;

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 50 + 1);
  };

  let imageIds = [];

  // while we don't have enough random image ids, keep generating
  while (imageIds.length < numberOfImages) {
    const randomNumber = generateRandomNumber();

    if (!imageIds.includes(randomNumber)) {
      imageIds.push(randomNumber);
    }
  }

  imageIds = [...imageIds, ...imageIds];
  //   imageIds = imageIds.concat(imageIds);

  // sorting this twice just so Jack can rest assured
  imageIds.sort(() => {
    return Math.random() - 0.5;
  });
  imageIds.sort(() => Math.random() - 0.5);

  const cardData = imageIds.map((imageId, index) => {
    return {
      id: index + 1,
      imageUrl: `/assets/${imageId}.webp`,
      isFlipped: false,
      isMatched: false,
    };
  });

  return cardData;
};

export { generateCardData };
