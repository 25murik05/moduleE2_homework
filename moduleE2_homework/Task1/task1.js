//По заданию не понял для чего проверка typeof, если мы будем ее использовать в условиях, то оно не будет правильно работать...
//Так же для удобства я добавил вместе с выводом в консоль вывод на экран


let a = prompt('Введите значение')
let b = +a
let type = typeof b
console.log(type)
if (Boolean(a)) {
    if (Number.isInteger(b)) {
        let text = (b % 2) === 1 ? 'Число не четное' : 'Число четное'
        console.log(text)
        alert(text)
    } else {
        console.log('Упс, кажется, вы ошиблись')
        alert('Упс, кажется, вы ошиблись')
    }
}
else
    alert('Вы ввели NaN')
