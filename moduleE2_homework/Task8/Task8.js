let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry",    "blue"]

])

for(let key of fruits.keys()){
    console.log(`Ключ — ${key}, значение — ${fruits.get(key)}`)
}