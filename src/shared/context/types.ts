export type UserType = {
  email: string;
  password: string;
};

export type AuthContextType = {
  user: UserType | null;
  signIn: (props: SignInProps) => void;
  signOut: () => void;
};

export interface INote {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export type NoteType = {
  id: number;
  title: string;
  description: string;
  updatedAt: Date;
};

export type NotesContextType = {
  notes: INote[] | undefined;
  getNoteById: (id: number) => INote | undefined;
  activeNote: number | null;
  setActiveNote: React.Dispatch<React.SetStateAction<number | null>>;
  updateNote: (id: number, data: Partial<INote>) => Promise<void>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export type SignInProps = {
  newUser: UserType;
  callback: () => void | undefined;
};
