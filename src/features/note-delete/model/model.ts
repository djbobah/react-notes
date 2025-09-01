import { db } from "../../../shared/api/db";

export const deleteNote = async (id: number) => {
  await db.notes.delete(id);
};
