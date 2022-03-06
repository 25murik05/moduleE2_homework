let mass1 = ['Привет', 'Hello', 'Пока', 'Goodbye']

console.log(mass1.length)

//1варинт
mass1.forEach(function (array_item,index){
    console.log(array_item)
})
console.log('-------------------------------------')
//2вариант
for(let i=0; i<mass1.length; i++){
    console.log(mass1[i])
}
