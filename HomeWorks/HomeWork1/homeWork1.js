//HomeWork1

/*
1.1 Объявите две переменные: firstName и lastName.
 1.2 Передайте значение “John”в переменную firstName 
 и значение “Adams”  в переменную lastName.
 1.3 Выведите на страницу значение firstName и lastName (должно показать John Adams).
1.4 Используйте те же переменные (перезапишите) firstName и lastName для того,
 чтобы вывести новое значение (Anna Karenina). 

 В итоге на экране должно быть две строки:
John Adams
Anna Karenina
*/

 let firstName;
 let lastName;
 firstName = "John";
 lastName = "Adams"

 console.log(firstName + " " + lastName);

 firstName = "Anna"
 lastName = "Karenina"
 console.log(firstName + " " + lastName);

 console.log("------------------------------------------");
 /*
 2  Выведите в консоль тип данных следующих переменных:
let a,                                                                                                                                             let c = 9,                                                                                                                                     let str = “Hi 5!”,                                                                                                                           let b = true,                                                                                                                                 let y = 9 + ‘1’ ,                                                                                                                            let x =  'a' / 6
let c = 9,
let str = “Hi 5!”,
let b = true,
let y = 9 + ‘1’ ,
let x =  'a' / 6  
 */

let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + '1';
let x = 'a' / 6;

console.log("typeof 'a' - " + typeof(a));
console.log("typeof 'c' - " +typeof(c));
console.log("typeof 'str' - " +typeof(str));
console.log("typeof 'b' - " +typeof(b));
console.log("typeof 'y' - " +typeof(y));
console.log("typeof 'x' - " +typeof(x));

console.log("------------------------------------------");

/* 
3 Подумайте, какие переменные логично объявить через const.
 Придумайте 3 разных,  объявите их и  выведите на экран
*/

const myFirthday = "10.10.2010";
const mySeriesNumber = "0000";
const pi = 3.14;

console.log(myFirthday);
console.log(mySeriesNumber);
console.log(pi);
console.log("------------------------------------------");

