import { User } from "./User";
import type { NoteBook } from "./NoteBook";

export class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    super(id, name, email, password, phone, age);
  }

  // Lets the admin manage notes: list all notes of a notebook,
  // and optionally remove one of them.
  public manageNotes(notebook: NoteBook, removeNoteId?: number): void {
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
