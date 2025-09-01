import { createContext, type ReactNode, use, useState } from "react";
import type { INote, NotesContextType } from "./types";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../api/db";

const NotesContext = createContext<NotesContextType | null>(null);

export const useNotes = () => {
  const context = use(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const notes = useLiveQuery(() => db.notes.toArray());
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const getNoteById = (id: number) => {
    return notes?.filter((note) => note.id === id)[0];
  };

  const updateNote = async (id: number, data: Partial<INote>) => {
    await db.notes.update(id, data);
  };

  const filteredNotes = (notes: INote[]) => {
    if (!searchValue.trim()) return notes;

    const query = searchValue.toLowerCase();
    return notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(query) ||
        note.description.toLowerCase().includes(query)
      );
    });
  };

  const value = {
    notes: notes ? filteredNotes(notes) : [],
    getNoteById: getNoteById,
    setActiveNote: setActiveNote,
    activeNote: activeNote,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    updateNote: updateNote,
  };

  return <NotesContext value={value}>{children}</NotesContext>;
};
