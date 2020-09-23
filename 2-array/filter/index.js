function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = collection.filter(item => item % 3 === 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((item, index) => collection.indexOf(item) == index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
