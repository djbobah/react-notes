import { Box, Group, Text } from "@mantine/core";
import { formatLocalDate } from "../../../shared/helpers/formatLocalDate";

type ListItemProps = {
  title: string;
  text: string;
  date: Date;
  active: boolean;
};

export const ListItem = ({ title, text, date, active }: ListItemProps) => {
  const sanitizeDescription = text
    .replace(
      /(^#+\s+)|(\*\*|__)(.*?)\2|(\*|_)(.*?)\4|~~(.*?)~~|!?\[(.*?)\]\(.*?\)|`(.*?)`|```[\s\S]*?```|^[\s]*[-*+]\s+|^[\s]*\d+\.\s+|^>\s+|^[-*_]{3,}\s*$/gm,
      ""
    )
    .trim();
  return (
    <Box ps={10} bg={active ? "lightGray" : "transparent"}>
      <Text fw={500} w={280} truncate="end">
        {title}
      </Text>
      <Group>
        <Text w={280} truncate="end" size="sm" c="dimmed">
          {`${formatLocalDate(date)} : ${sanitizeDescription}`}
        </Text>
      </Group>
    </Box>
  );
};
