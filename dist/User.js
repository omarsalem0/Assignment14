"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, phone, age) {
        // Aggregation: the user owns notebooks, but notebooks are created outside the user
        // and can exist without it.
        this.notebooks = [];
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    getNotebooks() {
        return this.notebooks;
    }
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
        console.log(`Notebooks: ${this.notebooks.length}`);
    }
}
exports.User = User;
