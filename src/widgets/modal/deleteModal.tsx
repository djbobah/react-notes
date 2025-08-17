import { Modal, Button, Text, Center, Space } from "@mantine/core";

interface DeleteModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export const DeleteModal = ({
  opened,
  onClose,
  onConfirm,
  title,
}: DeleteModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Подтверждение удаления"
      centered
    >
      <Text mb="md">Вы уверены, что хотите удалить заметку "{title}"?</Text>

      <Center>
        <Button color="red" onClick={onConfirm}>
          Удалить
        </Button>
        <Space w="md" />
        <Button variant="outline" onClick={onClose}>
          Отмена
        </Button>
      </Center>
    </Modal>
  );
};
