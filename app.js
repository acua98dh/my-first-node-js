'use strict'
//process.argv コマンドラインの因数が入ってる配列
//[0] node file pass
//[1] include program file pass
//[2] first argument
//第一引数||駄目な時の代替
const number = process.argv[2] || 0;

let sum = 0;
for (let i =1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);

