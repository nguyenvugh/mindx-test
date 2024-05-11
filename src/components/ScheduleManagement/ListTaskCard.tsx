import { VStack } from "@chakra-ui/react";
import { useAppContext } from "../../contexts";
import { TaskCard } from "./TaskCard";

function ListTaskCard() {
  const { tasks } = useAppContext();
  return (
    <VStack height={"100%"} overflow={"auto"} spacing={4}>
      {tasks.map((task) => {
        return <TaskCard task={task} />;
      })}
    </VStack>
  );
}

export { ListTaskCard };
