import { Center, Text } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export const NotNotes = () => {
  return (
    <>
      <Notifications position="top-center" zIndex={1000} />
      <Center>
        <Text c="dimmed"> Добавьте заметку или выберите существующую</Text>
      </Center>
    </>
  );
};
