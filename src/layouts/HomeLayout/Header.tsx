import { Avatar, Box } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      display={"flex"}
      padding={5}
      bg={"#f3f3ff"}
      justifyContent={"space-between"}
    >
      <Box>Schedule Management</Box>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Box>
  );
}

export { Header };
