// Console

// log

console.log("Hola, JavaScript!")

// error

console.error("Este es un mensaje de error.")
console.log("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")

// table

let data = [
    ["Tomas", 20],
    ["Sata", 21]
]


console.table(data)

data = [
    {name: "Tomas", age: 20},
    {name: "Sara", age: 21}
]

console.table(data)

// group 

console.group("Usuario:")
console.log("Nombre: Tomas")
console.log("Edad: 20")