import type { NoteBook } from "./NoteBook";

export class User {
  public id: number;
  public name: string;
  public email: string;
  private password: string;
  protected phone: string;
  protected age: number;

  // Aggregation: the user owns notebooks, but notebooks are created outside the user
  // and can exist without it.
  protected notebooks: NoteBook[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
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

  public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  public getNotebooks(): NoteBook[] {
    return this.notebooks;
  }

  public displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Age: ${this.age}`);
    console.log(`Notebooks: ${this.notebooks.length}`);
  }
}
