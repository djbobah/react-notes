import { ActionIcon } from "@mantine/core";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import { addNote } from "../api/add-note";
import { useNavigate } from "react-router-dom";

export const CreateNoteButton = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const nodeId = await addNote({ title: "Новая заметка", description: "" });
    navigate(`/edit/${nodeId}`);
  };
  return (
    <ActionIcon variant="outline" aria-label="Settings" onClick={handleClick}>
      <IconCircleDashedPlus />
    </ActionIcon>
  );
};
