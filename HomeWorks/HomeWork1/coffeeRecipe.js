//1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).

//declare all variables

let cup = 'plastic cup';
let water = 'ice cubes';
let iceCubesColunt = 3;
let price = 240;
let coffeeName = 'Bumble';
let coffee = 'coffee'
let juice = 'orange';
let topic = 'caramel syrup';
let straw = 'straw'; //трубочка

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