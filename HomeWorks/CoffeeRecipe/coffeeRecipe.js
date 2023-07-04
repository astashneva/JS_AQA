//1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).

// Креативное задание*(не показываем решение до понедельника):
// 2.1 Напишите следующую программу:
// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе 
//(используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
// 2.2 Нарисуйте блок-схему вашей программы (так проще будет написать саму программу).
// Можете использовать следующий сайт https://miro.com/app/board или от руки

//declare all variables


let cupSize = 'large' // small, middle, large

let cup = 'plastic cup';
let water = 'ice cubes';
let iceCubesColunt = 3;
let price = 0;
let coffeType = 'Bumble';  //cappuccino, bumble, filterCoffee
let coffee = 'coffee'
let juice = 'orange';
let topic = 'caramel syrup';
let straw = 'straw'; //трубочка

if (cupSize == 'small'){
    price = 100
}
else if( cupSize == 'middle'){
    price = 150
}
else if(cupSize == 'large'){
    price = 250
}

console.log(`You chooced ${coffeType} coffee`)
// steps for coffee recipe
console.log("Steps for coffee recipe")
console.log("*************************************")

let step1 = "1." + ` Take a ${cup}`
let step2 = "2." + ` Pour ${coffee} and ${juice} in ${cup}`
let step3 = "3." + ` Throw ${iceCubesColunt} cube of ${water}`
let step4 = "2." + ` Add ${topic} in ${cup}`
let step5 = "2." + ` Add ${straw} in ${cup}`
let orderPrice = `The order price is ${price}`
let result = `Enjoy your coffee!`


console.log(step1 + "\n" 
          + step2 + "\n" 
          + step3 + "\n"
          + step4 + "\n" 
          + step5 + "\n" 
          + orderPrice + "\n" 
          + result)


          

