// 1. Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 


console.log('Задание 1')

let num1 = 10;
let num2 = 0;
let operator = "/"

switch(operator){
    case "+":
        result = num1 + num2;
        console.log("The result is " + result);
        break;
    case "-":
        result = num1 - num2;
        console.log("The result is " + result);
        break;
    case "*":
        result = num1 * num2;
        console.log("The result is " + result);
        break;
    case "/":
        if(num2 != 0){
            result = num1 / num2;
        }
        else result = "you can't divide by 0"
        console.log("The result is " + result);
        break;
}

console.log('---------------------------------------------')
console.log('Задание 3')


// 3. При помощи цикла for выведите чётные числа от 2 до 10

for (let i = 2; i<=10; i++){
    if(i % 2 == 0){
        console.log(i);
        i++
    }
}

for (let i = 2; i<=10; i+=2){
        console.log(i);
}
// 4. Задача с интервью
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

let sum1 = 0;
let sum2 = 0;

//let str = ['(', ')', '(', ')', ')']
let str = ['(', ')', '(', ')', '[']

for (let i = 0; i < str.length; i++){
    if(str[i] == '('){
        sum1++;
    }
    else if (str[i] == ')'){
        sum2++;
    }
}

console.log('opening ' + sum1 + ' closing ' + sum2)

if (sum1 == sum2){
    console.log('equal')
}
else console.log('not equal')


// Креативное задание*:
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

let text = "You are the best QA ever";
let newText = '';
let count = 0;

for (let i =0; i< text.length; i++){

    if(count % 2 == 0){
        newText = newText + text[i] + "br";
    }

    count +=2;
}
console.log(newText);

//decoder

let decodedResult = '';
for (let i = 0; i< newText.length; i+=3){
    decodedResult += newText[i];
}
console.log(decodedResult);