import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";

function HomeLayout() {
  return (
    <Box w={"100vw"} h={"100vh"} display={"flex"}>
      <SideMenu />
      <Box w={"100%"} h={"100vh"}>
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export { HomeLayout };
