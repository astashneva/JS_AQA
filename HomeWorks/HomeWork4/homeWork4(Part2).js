// Часть 2
// 1. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 

console.log("Задание 1------------------------------------")

let dayDistance = 3  // сколько ползет вверх
let nightDown = -2// сколько ползет вниз
let distance = 0;
let days = 0;

//step1

while ((distance += dayDistance) <=5){
    days++;
    console.log (`Current distance at the end of the day ${days} is ${distance} meter(s)`);
    distance += nightDown;
}

console.log('Finish!')

console.log("Задание 2------------------------------------")

// 2. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов 
//и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности
// (открывающая и затем закрывающая). Также, скобки могут быть вложенными, 
//но тем не менее, если последовательность соблюдена, то они считаются парными.
//  Пример:
// [ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары

let countOpen = 0;
let countClose = 0;

//let str = ['{', ')', '(', ')', ')', '}', '[', ']', ')']

let str = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']

for (let i = 0; i < str.length; i++){
    if(str[i] == '(') {
    countOpen++;
    }
    else if (str[i] == ')'){
        countClose++;
    }

    result = countOpen - countClose;
    console.log(result);

    if(result < 0){
        console.log("Wrong sequance");
    }
    
}

if(countOpen == countClose){
    console.log('equal')
}
else 
console.log('not equal')


// for (let i = 0; i < str.length; i++){
//     if(str[i] == '('){
//         sum1++;
//     }
//     else if (str[i] == ')'){
//         sum2++;
//     }
// }

// console.log('opening ' + sum1 + ' closing ' + sum2)

// if (sum1 == sum2){
//     console.log('equal')
// }
// else console.log('not equal')