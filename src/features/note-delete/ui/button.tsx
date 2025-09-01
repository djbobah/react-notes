import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useNotes } from "../../../shared/context/NotesProvider";
import { useDeleteNoteModal } from "./useDeleteNoteModal";

export const DeleteNoteButton = () => {
  const { openModal, DeleteNoteModal } = useDeleteNoteModal();
  const { activeNote } = useNotes();

  return (
    <>
      <ActionIcon
        variant="outline"
        aria-label="Settings"
        onClick={activeNote ? () => openModal() : undefined}
      >
        <IconTrash />
      </ActionIcon>
      <DeleteNoteModal />
    </>
  );
};
