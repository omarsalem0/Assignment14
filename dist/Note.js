"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.length > 20
            ? this.content.substring(0, 20) + "..."
            : this.content;
    }
}
exports.Note = Note;
