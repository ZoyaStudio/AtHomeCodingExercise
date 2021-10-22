
class takeHome {

  constructor () {}

  aboveBelow (collection, integer) {
    let result = {"above": 0, "below": 0};
    for (let num of collection) {
      if (num > integer) {
        result.above++;
      } else if (num < integer) {
        result.below++;
      }
    }
    return result;
   }

  stringRotation (string, index) {
   return string.slice(string.length - index) + string.slice(0, string.length - index)
  }
}

