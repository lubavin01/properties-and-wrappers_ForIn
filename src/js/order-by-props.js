export default function orderByProps(obj, sortingArray) {
  const keys = Object.keys(obj);
  keys.sort(
    (a, b) => {
      let aIndex = sortingArray.findIndex((i) => i === a);
      let bIndex = sortingArray.findIndex((i) => i === b);

      if (aIndex < 0) {
        aIndex = 999;
      }

      if (bIndex < 0) {
        bIndex = 999;
      }

      if (aIndex === 999 && bIndex === 999) {
        return a > b ? 1 : -1;
      }

      return aIndex - bIndex;
    },
  );

  return keys.map((i) => ({ key: i, value: obj[i] }));
}
