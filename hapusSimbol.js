function hapusSimbol(str) {
    // you can only write your code here!
    return output = str.replace(/[^a-z0-9]+/g,"");
    // atau CARA 2
    // return str.match(/[a-z/\d/]/g).join('');
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100