import { db } from "../../../shared/api/db";

type AddNoteType = {
  title: string;
  description: string;
};

export async function addNote({ title, description }: AddNoteType) {
  try {
    const data = await db.notes.add({
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return data;
  } catch (error) {}
}
