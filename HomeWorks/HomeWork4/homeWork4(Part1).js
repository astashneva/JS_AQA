//Задание 1
// Нарисуйте ромб

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1


let romb = '';
console.log("part1 ===============================");


let newStr = ''
for (let i = 1; i<=5; i++){
    for (let j = 1; j<=i ; j++){
        newStr += j;
    }
    newStr += '\n'
}
console.log(newStr);

console.log("part2 ===============================");

let newStr2 = '';
let x = 5;
let space = ' ';

for (let i = 1; i<= x;i++){
    newStr2 += space.repeat(x-i);
    for (let j = 1; j<=i; j++){
        newStr2 +=j
    }
    newStr2 += "\n"
}
console.log(newStr2);


console.log("part4 ===============================");

let newStr4 = '';
// let x = 5;
// let space = ' ';

for (let i = 1; i<= x;i++){
    newStr4 += space.repeat(i - 1);
    for (let j = 1; j<= x + 1 - i; j++){
        newStr4 +=j
    }
    newStr4 += "\n"
}
console.log(newStr4);


console.log("part5 ===============================");

let newStr5 = '';
// let x = 5;
// let space = ' ';

for (let i = 1; i<= x;i++){
    for (let j = x + 1 - i; j>= 1; j--){
        newStr5 +=j
    }
    newStr5 += "\n"
}
console.log(newStr5);



// for (let i = 1;  i< 9; i++){
//     console.log(i)
//     for (let j = 1 ; j< i ; j++){
//         console.log(j)
//     }


// }

// 2. Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********

let str = '*';
console.log(str);
for (let i = 0;  i< 5; i++){
    str = str + '**'
    console.log(str)

}



console.log("----------------------");

let strTreg = '1';
for (let i = 1;  i< strTreg.length; i++){
    strTreg = strTreg + i
    console.log(strTreg)
}


//задание 4 - Пирамидка верхняя

//          1
//         121
//        12321
//       1234321
//      123454321

let pyramid = '';
let n = 5;
let spacePyramid = '';
for (let i = 1; i<= n ;i++){
    pyramid += space.repeat (n - i)

    for (let j = 1 ; j<= i ;j++){
        pyramid +=j;
    }

    for (let j = i - 1 ; j >= 1 ;j --){
        pyramid +=j;
    }
    pyramid += "\n"
}
console.log(pyramid);

// 3. Нарисуйте треугольник
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15


let str3 = '';
let number = 5;
 for (let i = 1 ; i<= x; i++){
    let num = i;
    for (let j = 1; j<=i; j++){
        str3+= num + space;
        num = num + (x-j);
    }

    str3 += '\n'
 }
 console.log(str3);