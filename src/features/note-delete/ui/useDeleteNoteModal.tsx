import { useState } from "react";
import { DeleteModal } from "../../../widgets/modal";
import { useNotes } from "../../../shared/context/NotesProvider";
import { deleteNote } from "../model";

export const useDeleteNoteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeNote, getNoteById, setActiveNote } = useNotes();

  const note = activeNote ? getNoteById(activeNote) : undefined;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ModalComponent = activeNote ? (
    <DeleteModal
      opened={isOpen}
      onClose={closeModal}
      onConfirm={() => {
        deleteNote(activeNote);
        setActiveNote(null);
        closeModal();
      }}
      title={note ? note.title : ""}
    />
  ) : null;

  return { openModal, DeleteNoteModal: () => ModalComponent };
};
