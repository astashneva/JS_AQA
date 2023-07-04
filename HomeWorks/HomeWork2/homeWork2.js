// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца.
//  Если месяц “July” или “August”, то программа должна показать - ‘approved’, 
//  если другие месяцы, то - “denied”


console.log('Задание 1')

let month = 'Augut'

if( month == 'July' || month == 'August'){
    console.log('approved')
}
else{
    console.log('denied')
}

console.log('---------------------------------------------')
console.log('Задание 2')

// 1.2 Напишите простенький калькулятор (*, /, +, -). 
// Проверьте ваш код на охват исключений для арифметических операций.
// У вас должны быть две переменные для исходных чисел и одна для оператора.
//  В зависимости от оператора, должно происходить то или иное арифметическое действие
//   и выводиться результат в консоль.

let num1 = 5;
let num2 = 'a';
let operator = "+";

if(operator == "+"){
    console.log(num1 + num2)
}

else if(operator == "-"){
    console.log(num1 - mum2)
}

else if(operator == "*"){
    console.log(num1 * num2)
}

else if(operator == "/" && num2!=0){
    console.log(num1 / num2)
}
else console.log("Please, enter correct number!")


console.log('---------------------------------------------')
console.log('Задание 3')

// 1.3 Решите задачу с помощью пройденных тем:
// «Улитка ползёт вверх по стене высотой 5 метров.
//  Каждый день она проползает вверх на 3 метра, 
//  а каждую ночь съезжает вниз на 2 метра.
//   За сколько дней она доползёт до вершины стены.»

let dayDistance = 3  // сколько ползет вверх
let nightDown = -2// сколько ползет вниз
let distance = 0;
let days = 0;

//step1

if((distance += dayDistance) <=5){
    days++;
    console.log (`Current distance at the end of the day ${days} is ${distance} meter(s)`);
    distance += nightDown;
}

//step2

if((distance += dayDistance) <=5){
    days++;
    console.log (`Current distance at the end of the day ${days} is ${distance} meter(s)`);
    distance += nightDown;
}

//step3

if((distance += dayDistance) <=5){
    days++;
    console.log (`Current distance at the end of the day ${days} is ${distance} meter(s)`);
    distance += nightDown;
}

//step4

if((distance += dayDistance) <=5){
    days++;
    console.log (`Current distance at the end of the day ${days} is ${distance} meter(s)`);
    distance += nightDown;
}

else
{
    console.log('Finish!')
}

