import { User } from "./User";
import { Admin } from "./Admin";
import { NoteBook } from "./NoteBook";
import { Storage } from "./Storage";

// User
const user = new User(1, "Omar", "omar@example.com", "1234", "01000000000", 25);
user.displayInfo();

// Admin (inheritance)
const admin = new Admin(2, "Ahmed", "ahmed@example.com", "admin123", "01111111111", 30);
admin.displayInfo();

// Aggregation: user owns notebooks
const notebook = new NoteBook(1, "Study Notes");
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
const numbers = new Storage<number>();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log(numbers.getAllItems());

const names = new Storage<string>();
names.addItem("Omar");
console.log(names.getAllItems());

// Age validation
try {
  new User(3, "Kid", "kid@example.com", "0000", "01222222222", 15);
} catch (e) {
  console.log((e as Error).message);
}
