# Simple Notes Management System (TypeScript OOP)

Run:
    npm install
    npm start

Structure:
- src/User.ts      -> User (access modifiers, displayInfo, age 18-60, Aggregation with NoteBook)
- src/Admin.ts     -> Admin extends User (Inheritance, manageNotes)
- src/Note.ts      -> Note (preview, Association with User)
- src/NoteBook.ts  -> NoteBook (Composition with Note, addNote / removeNote)
- src/Storage.ts   -> Generic Storage<T>
- src/index.ts     -> Demo
- diagram/         -> UML class diagram (PNG + SVG)
