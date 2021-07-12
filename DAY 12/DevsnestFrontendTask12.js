let operation = prompt("What do you want to do?");
const toDos = ["Learn Web Dev. from Colt Steele"];
while (operation !== "quit" && operation !== "q") {
    if (operation === "list") {
        console.log("***************");
        for (let i = 0; i < toDos.length; i += 1) {
            console.log(`${i}: ${toDos[i]}`);
        }
        console.log("***************");
    } else if (operation === "new") {
        const toDo = prompt("Okay, what've you got to do?");
        toDos.push(toDo);
        console.log(`${toDo} added to the list!`)
    } else if (operation === "delete") {
        const index = parseInt(prompt("Enter the index you wanna delete."));
        if (!Number.isNaN(index)) {
            const deleted = toDos.splice(index, 1);
            console.log(`Okay, ${deleted[0]} deleted!`); // check this out in console to understand!
        } else {
            console.log("Not a valid index form!");
        }
    }
    operation = prompt("What do you want to do?");
}
console.log("Okay, you quit the app.");