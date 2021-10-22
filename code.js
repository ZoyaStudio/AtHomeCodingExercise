
class takeHome {

  constructor () {}

  stringRotation (string, index) {
   return string.slice(string.length - index) + string.slice(0, string.length - index)
  }
}

