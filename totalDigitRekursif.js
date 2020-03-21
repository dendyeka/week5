function totalDigitRekursif(angka) {
  let index = -1,
      angkaStr = angka.toString()
 
  function puterin(angkaStr, i) {
    if(i === angkaStr.length-1) {
      return 0
    }
    i++
    return parseInt(angkaStr[i]) + puterin(angkaStr, i)
  }
  
  return puterin(angkaStr, index)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5