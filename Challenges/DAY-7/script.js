// ACTIVITY:1-->TASK-1
const book = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962
}
console.log(book);
//  TASK-2
console.log(book.title);
console.log(book.author);
// ACTIVITY:2-->TASK-3
const book1 = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962,
    getInfo: function () {
        return `${this.title} by  ${this.author}`;
    }
}
console.log(book1.getInfo());
//  TASK-4
const book2 = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962,
    getInfo: function (year) {
        return this.year = 1968;
    }
}
console.log(book2.getInfo());
console.log(book2);
// ACTIVITY: 3-- > TASK-5
const library = {
    name: "City Library",
    books: [
        {
            title: "Keep it concise",
            author: "William Shakespeare",
            year: 1962
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "BE happy",
            author: "George Orwell",
            year: 1949
        }
    ]
};
console.log(library);

// TASK-6
console.log(library.name);
library.books.forEach(el => {
    console.log(el.title);
});
// ACTIVITY:4-->TASK-7
const book3 = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962,
    getInfo: function () {
        return `${this.title} and ${this.year}`;
    }
}
console.log(book3.getInfo());
//  ACTIVITY:5-->TASK-8
for (const key in book3) {
    const element = book3[key];
    console.log(key + ":" + element);
}
// TASK-9
const book4 = {
    title: "Keep it Concise",
    author: "William Shakespeare",
    year: 1962
};
const keys = Object.keys(book4);
console.log("Keys:", keys);
const values = Object.values(book4);
console.log("Values:", values);

