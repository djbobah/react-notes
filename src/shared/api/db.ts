import Dexie, { type EntityTable } from "dexie";
import type { INote } from "../context/types";

const db = new Dexie("NotesDatabase") as Dexie & {
  notes: EntityTable<INote, "id">;
};

db.version(1).stores({
  notes: "++id, title, description, createdAt, updatedAt",
});

export type { INote };
export { db };
