
let array = ["Я", "Ты", "Он"];

const citi = "Сухум";
const popular = true;
const s = 2;

let myCiti = {
    citi: citi,
    popular: true,
    name: {
        citiName: "Гагра",
        citiAge: 1500
    } ,
    greate:  function() {
        console.log("Привет")
    }
}

console.log(JSON.stringify(myCiti))


console.log(myCiti.citi)

delete myCiti.popular

myCiti["popular"] = false

console.log(myCiti)

console.log(myCiti.greate())


array.push("вывв")
array.unshift("adad")

for(let a of array) {
    console.log(a)
}

for(let a in array) {
    console.log(a)
}

 function getTotalC(a) {
 let c = 0
 a += 1
 c += a + 1
 return c
}

console.log(getTotalC(3))


const myFunction = (a, b) => {
   let c
   a += 1
   c = b + a
   return c
}

console.log(myFunction(3, 6))


try {
    let c = 5 + s
} catch(error) {
    console.log(error)
}