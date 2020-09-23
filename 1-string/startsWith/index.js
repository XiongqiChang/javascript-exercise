export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].substring(0, 2) == '粤A') count++;
  }
  return count;
}
