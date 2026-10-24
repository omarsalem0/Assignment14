import type { User } from "./User";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  // Association: every note has an author (the user who created it)
  public userId: User;

  constructor(id: number, title: string, content: string, userId: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  public preview(): string {
    return this.content.length > 20
      ? this.content.substring(0, 20) + "..."
      : this.content;
  }
}
