import { useParams } from "react-router-dom";
import { marked } from "marked";
import { useNotes } from "../../shared/context/NotesProvider";
import DOMPurify from "dompurify";
import { Text } from "@mantine/core";

export const PreviewNotePage = () => {
  const { id } = useParams();
  const { getNoteById } = useNotes();

  const note = getNoteById(Number(id));

  if (note?.description) {
    const cleanHtml = DOMPurify.sanitize(marked.parse(note?.description));
    return (
      <>
        <Text size="lg" fw={500}>
          {note?.title}
        </Text>
        <div dangerouslySetInnerHTML={{ __html: marked.parse(cleanHtml) }} />
      </>
    );
  } else return "";
};
