import { useNotes } from "../../../shared/context/NotesProvider";

export const useHandleSearchChange = () => {
  const { searchValue, setSearchValue } = useNotes();
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
  };

  return { searchValue, setSearchValue, handleChange };
};
