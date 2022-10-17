const sampleSquares = [1, 2, 3, 4, 5]
const totalArea = (squareList) => squareList.map(e => e * e).reduce((a,e) => a+e, 0)

console.log(totalArea(sampleSquares))