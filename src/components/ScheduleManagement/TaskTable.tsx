import {
  Box,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useAppContext } from "../../contexts";
import { Task, TaskType } from "./types";
import { STATUS_COLOR_MAP } from "./constants";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { TaskFormDialog } from "./TaskFormDialog";
import { useState } from "react";

type TaskTableProps = {
  taskType: TaskType | "all";
};
function TaskTable({ taskType }: TaskTableProps) {
  const toast = useToast();
  const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
  const { tasks, addTask, removeTask, updateTask } = useAppContext();
  const taskByType =
    taskType === "all" ? tasks : tasks.filter((it) => it.type === taskType);

  function handleDeleteIcon(id: number) {
    removeTask(id);
    toast({
      title: "Delete task successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  }

  function handlePressEdit(task: Task) {
    setSelectedTask(task);
    setIsOpenUpdateDialog(true);
  }

  return (
    <Box h={"650px"} overflow={"auto"}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Schedule management</TableCaption>
          <Thead>
            <Tr>
              <Th>Task name</Th>
              <Th>Start date</Th>
              <Th>End date</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {taskByType.map((task) => {
              return (
                <Tr>
                  <Td>{task.name}</Td>
                  <Td>{task.startDate}</Td>
                  <Td>{task.endDate}</Td>
                  <Td>
                    <Tag
                      size={"lg"}
                      borderRadius="full"
                      variant="solid"
                      colorScheme={STATUS_COLOR_MAP[task.status]}
                    >
                      <TagLabel>{task.status}</TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <HStack>
                      <DeleteIcon
                        cursor={"pointer"}
                        color={"red"}
                        onClick={() => handleDeleteIcon(task.id)}
                      />
                      <EditIcon
                        cursor={"pointer"}
                        color={"green"}
                        onClick={() => handlePressEdit(task)}
                      />
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <TaskFormDialog
        isOpen={isOpenUpdateDialog}
        isAddTask={false}
        defaultTask={selectedTask}
        onClose={() => setIsOpenUpdateDialog(false)}
        onSuccess={() => setIsOpenUpdateDialog(false)}
      />
    </Box>
  );
}

export { TaskTable };
