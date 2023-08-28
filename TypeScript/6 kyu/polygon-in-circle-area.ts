export let areaOfPolygonInsideCircle = (
  circleRadius: number,
  numberOfSides: number
) =>
  +(((numberOfSides * circleRadius ** 2) / 2) *
  Math.sin((2 * Math.PI) / numberOfSides)).toFixed(3);

console.log(areaOfPolygonInsideCircle(3, 3));
console.log(areaOfPolygonInsideCircle(2, 4));
console.log(areaOfPolygonInsideCircle(2.5, 5));
