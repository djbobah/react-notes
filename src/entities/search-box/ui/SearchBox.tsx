import { CloseButton, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useHandleSearchChange } from "../model";

export const SearchBox = () => {
  const { searchValue, setSearchValue, handleChange } = useHandleSearchChange();

  return (
    <Input
      placeholder="Search..."
      leftSection={<IconSearch size={16} />}
      value={searchValue}
      onChange={handleChange}
      rightSectionPointerEvents="all"
      rightSection={
        <CloseButton
          aria-label="Clear input"
          onClick={() => setSearchValue("")}
          style={{ display: searchValue ? undefined : "none" }}
        />
      }
    />
  );
};
