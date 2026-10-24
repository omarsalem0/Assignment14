import { Note } from "./Note";
import type { User } from "./User";

export class NoteBook {
  public id: number;
  public name: string;
  // Composition: the notebook creates and owns its notes.
  // Notes are private and only exist through the notebook.
  private notes: Note[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public addNote(id: number, title: string, content: string, author: User): Note {
    const note = new Note(id, title, content, author);
    this.notes.push(note);
    return note;
  }

  public removeNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  public getNotes(): Note[] {
    return this.notes;
  }
}
