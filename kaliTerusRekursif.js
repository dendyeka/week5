function kaliTerusRekursif(angka) {
  if(angka < 10) return angka
  let angkaStr = angka.toString(),
      total = 1

  for(let i=0; i<angkaStr.length; i++) {
    total *= angkaStr[i]
  }

  return kaliTerusRekursif(total)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6