import { Divider, Flex } from "@mantine/core";
import { ListItem } from "../../../entities/listItem";
import { useNotes } from "../../../shared/context/NotesProvider";
import { useNavigate } from "react-router-dom";

export const NotesList = () => {
  const { notes = [], setActiveNote, activeNote } = useNotes() || {};
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    if (id !== activeNote) {
      setActiveNote?.(id);
      navigate(`/preview/${id}`);
    } else {
      setActiveNote?.(null);
      navigate("/");
    }
  };

  return (
    <Flex wrap="wrap" direction="column" gap={0}>
      {notes.map((note) => (
        <div key={note.id} onClick={() => handleItemClick(note.id)}>
          <ListItem
            title={note.title}
            text={note.description}
            date={note.updatedAt}
            active={note.id === activeNote}
          />
          <Divider />
        </div>
      ))}
    </Flex>
  );
};
