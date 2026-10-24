"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Admin_1 = require("./Admin");
const NoteBook_1 = require("./NoteBook");
const Storage_1 = require("./Storage");
// User
const user = new User_1.User(1, "Omar", "omar@example.com", "1234", "01000000000", 25);
user.displayInfo();
// Admin (inheritance)
const admin = new Admin_1.Admin(2, "Ahmed", "ahmed@example.com", "admin123", "01111111111", 30);
admin.displayInfo();
// Aggregation: user owns notebooks
const notebook = new NoteBook_1.NoteBook(1, "Study Notes");
user.addNotebook(notebook);
// Composition: notebook creates its notes (Association: each note has an author)
notebook.addNote(1, "TypeScript", "TypeScript is a typed superset of JavaScript", user);
notebook.addNote(2, "OOP", "Classes, inheritance and polymorphism", user);
// Note preview
console.log(notebook.getNotes()[0].preview());
// Admin manages notes
admin.manageNotes(notebook);
admin.manageNotes(notebook, 2);
// Generic Storage
const numbers = new Storage_1.Storage();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log(numbers.getAllItems());
const names = new Storage_1.Storage();
names.addItem("Omar");
console.log(names.getAllItems());
// Age validation
try {
    new User_1.User(3, "Kid", "kid@example.com", "0000", "01222222222", 15);
}
catch (e) {
    console.log(e.message);
}
