let mass = [5, '5', 5, 5, 5, 5]
let a = mass[0]
let s = 0
//== при условие что не учитываем тип, === что учитываем тип
for (let i=0; i<mass.length; i++){
    if(a==mass[i])
        s ++
}

if (s==mass.length)
    console.log('true')
else
    console.log('false')
