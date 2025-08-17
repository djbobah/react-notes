import { AppShell, Burger, Group, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "../widgets/header";
import { NotesList } from "../widgets/notesList";
import { Outlet } from "react-router-dom";

export function Main() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding={{ base: 10, sm: 15, lg: "xl" }}
      >
        <AppShell.Header style={{ display: "flex", alignItems: "center" }}>
          <Group px="md" w="100%">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Header />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar>
          <AppShell.Section grow component={ScrollArea}>
            <NotesList />
          </AppShell.Section>
          <AppShell.Section p="md">
            <Text c="lightGray"> ©Kirpichev Vladimir</Text>
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main style={{ minHeight: "fit-content" }}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
