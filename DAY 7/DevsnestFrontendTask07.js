// a JavaScript program to list the properties of a JavaScript object
const person = {
    Name: "Gokulnaath B",
    Job: "Animal Rights Activist",
    Goal: "Animal Liberation",
    favoriteAnimal: "Chicken"
};

for (let property in person) {
    console.log(property);
}

// a JavaScript program to delete the rollno property from the following object-
const student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};
delete student.rollno;
console.log("After deleting rollno property, the object looks like-");
for (let property in student) {
    console.log(`${property}: ${student[property]}`);
}

// a JavaScript program to get the length of a JavaScript object
const properties = Object.keys(student);
console.log(`The length of student object is ${properties.length}`);

// a JavaScript program to display the reading status of the following books
const library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];
console.log("The reading statuses of books are as follows-")
for (let book of library) {
    if (book.readingStatus) {
        console.log(`I've completed reading the book "${book.title}" by ${book.author}`);
    } else {
        console.log(`I'm yet to finish the book "${book.title}" by ${book.author}`);
    }
}
