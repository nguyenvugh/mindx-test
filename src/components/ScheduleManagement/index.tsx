import { Box } from "@chakra-ui/react";
import { ListTask } from "./ListTask";
import { ListTaskCard } from "./ListTaskCard";

function ScheduleManagement() {
  return (
    <Box padding={3} overflow={"auto"} height={"800px"}>
      <Box display={"flex"} height={"100%"}>
        <Box width={"70%"} height={"100%"} borderRight="1px solid grey">
          <ListTask />
        </Box>

        <Box flexGrow={1} height={"100%"} overflow={"auto"}>
          <ListTaskCard />
        </Box>
      </Box>
    </Box>
  );
}

export { ScheduleManagement };
