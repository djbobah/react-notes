import { type ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import { AuthProvider } from "../../shared/context/AuthProvider";
import { NotesProvider } from "../../shared/context/NotesProvider";
type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <MantineProvider>{children}</MantineProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
