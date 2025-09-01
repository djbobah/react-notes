import { ActionIcon } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../../../shared/context/NotesProvider";

export const EditNoteButton = () => {
  const navigate = useNavigate();
  const { activeNote } = useNotes();

  const handleEditClick = (id: number | null) => {
    if (id) navigate(`/edit/${id}`);
    else {
      alert("Необходимо выбрать заметку для редактирования");
    }
  };

  return (
    <>
      <ActionIcon
        variant="outline"
        aria-label="Settings"
        onClick={() => handleEditClick(activeNote)}
      >
        <IconEdit />
      </ActionIcon>
    </>
  );
};
