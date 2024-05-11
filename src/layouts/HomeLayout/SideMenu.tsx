import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TaskType } from "../../components/ScheduleManagement/types";
import { routes } from "../../constants";
import { MenuConfigs } from "./const";

function SideMenu() {
  const navigate = useNavigate();

  function handleRedirect(taskType: TaskType) {
    navigate(`${routes.schedule}?tab=${taskType}`);
  }

  return (
    <Box w={"300px"} height="100%" bg={"#ede8e8"} padding={2}>
      {MenuConfigs.map(({ name, taskType }) => {
        return (
          <Box
            w={"100%"}
            padding={3}
            cursor={"pointer"}
            borderRadius={5}
            _hover={{
              bg: "#a5e7aa",
              color: "black",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleRedirect(taskType)}
          >
            {name}
          </Box>
        );
      })}
    </Box>
  );
}

export { SideMenu };
