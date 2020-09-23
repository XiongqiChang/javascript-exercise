export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source).reduce((item1, item2) => Number(item1) + Number(item2));
}
