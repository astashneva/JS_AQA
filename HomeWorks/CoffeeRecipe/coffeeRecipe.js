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


// 2. Попробуйте внедрить в свою программу с кофе вложенный if



//declare all variables


let cupSize = 'large' // small, middle, large

let cup = 'plastic cup';
let water = 'ice cubes';
let iceCubesColunt = 3;
let price = 0;
let coffeType = 'cappuccino';  //cappuccino, bumble, filterCoffee
let coffee = 'coffee'
let juice = 'orange';
let topic = 'caramel syrup';
let straw = 'straw'; //трубочка

if(coffeType == 'Bumble')
{
if (cupSize == 'small'){
    price = 100
}
else if( cupSize == 'middle'){
    price = 150
}
else if(cupSize == 'large'){
    price = 250
}
}

else if(coffeType == 'cappuccino'){
    if (cupSize == 'small'){
        price = 50
    }
    else if( cupSize == 'middle'){
        price = 110
    }
    else if(cupSize == 'large'){
        price = 160
    }
    
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


          

// Внедрите в свой код про кофе цикл, там, где это может понадобиться.
// Добавьте комментарии в код с пояснениями изменений, зачем они нужны.

// Продумайте на будущее план развития своего кода с кофе, 
//где в реальной жизни он мог бы быть использован. 
//Начните создавать мини-документацию к своему проекту. 
//Пропишите требования так, как вы хотели бы их видеть на своем проекте 
///и чтобы посторонний человек мог в них разобраться.
// Скорее всего, что-то придется добавить или изменить позже.
// Очень полезно, если вы сможете работать парами и проверять друг у друга.
//  (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)
