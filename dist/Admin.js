"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin extends User_1.User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    // Lets the admin manage notes: list all notes of a notebook,
    // and optionally remove one of them.
    manageNotes(notebook, removeNoteId) {
        if (removeNoteId !== undefined) {
            notebook.removeNote(removeNoteId);
            console.log(`Admin ${this.name} removed note ${removeNoteId}`);
        }
        console.log(`Notes in "${notebook.name}":`);
        for (const note of notebook.getNotes()) {
            console.log(`- [${note.id}] ${note.title}: ${note.preview()}`);
        }
    }
}
exports.Admin = Admin;
