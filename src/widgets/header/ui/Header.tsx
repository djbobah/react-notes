import { Flex, Group } from "@mantine/core";
import { SearchBox } from "../../../entities/search-box";
import { CreateNoteButton } from "../../../features/note-create";
import { DeleteNoteButton } from "../../../features/note-delete";
import { EditNoteButton } from "../../../features/note-edit";

export const Header = () => {
  return (
    <Group justify="space-between" w="100%">
      <Flex
        mih={50}
        gap="md"
        justify="flex-"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <CreateNoteButton />
        <EditNoteButton />
        <DeleteNoteButton />
      </Flex>
      <SearchBox />
    </Group>
  );
};
