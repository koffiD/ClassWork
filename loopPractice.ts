var todos: Array<string> = [
    "wash the car",
    "get groceries",
    "go to the gym",
    "eat dinner"
]

//for loops have first a declaring variable then a statement to check then an increment or decrement to the variable
//in this loop we start at 0 with i standing for index. this will loop as long as there items in the array index
for( let i = 0; i< todos.length; i++){
    console.log(`Todo #${i + 1} : ${todos[i]}!`)
} 

todos.forEach((todo)=> {
    console.log(`you still need to ${todo}!`)
})
