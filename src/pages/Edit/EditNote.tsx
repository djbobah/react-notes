import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input, Space } from "@mantine/core";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useNotes } from "../../shared/context/NotesProvider";

const NoteEditor = () => {
  const { id } = useParams();
  const { getNoteById, updateNote } = useNotes();
  const note = getNoteById?.(Number(id));
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (note) {
      setData({ title: note.title, description: note.description });
    }
  }, [note]);

  const handleTitleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    const newData = { ...data, title: newTitle };
    setData(newData);
    await updateNote(Number(id), newData);
  };

  const handleDescriptionChange = async (value: string) => {
    const newData = { ...data, description: value };
    setData(newData);
    await updateNote(Number(id), newData);
  };

  return (
    <>
      <Input.Wrapper label="Наименование заметки">
        <Input
          name="title"
          placeholder="Введите название заметки..."
          value={data.title}
          onChange={handleTitleChange}
          autoFocus
        />
      </Input.Wrapper>
      <Space h="md" />
      <SimpleMdeReact
        value={data?.description}
        onChange={handleDescriptionChange}
      />
    </>
  );
};

export const EditNotePage = () => {
  return <NoteEditor />;
};
