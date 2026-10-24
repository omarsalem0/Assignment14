"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteBook = void 0;
const Note_1 = require("./Note");
class NoteBook {
    constructor(id, name) {
        // Composition: the notebook creates and owns its notes.
        // Notes are private and only exist through the notebook.
        this.notes = [];
        this.id = id;
        this.name = name;
    }
    addNote(id, title, content, author) {
        const note = new Note_1.Note(id, title, content, author);
        this.notes.push(note);
        return note;
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
    }
    getNotes() {
        return this.notes;
    }
}
exports.NoteBook = NoteBook;
