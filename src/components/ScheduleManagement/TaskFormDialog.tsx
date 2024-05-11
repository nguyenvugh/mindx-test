import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Input,
  Select,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts";
import { Task, TaskStatus, TaskType } from "./types";
import { DefaultTask, TASK_STATUS, TASK_TYPE } from "./constants";

type TaskFormDialogProp = {
  isOpen: boolean;
  isAddTask: boolean;
  defaultTask?: Task;
  onClose: () => void;
  onSuccess: () => void;
};
function TaskFormDialog({
  isAddTask,
  isOpen,
  defaultTask,
  onClose,
  onSuccess,
}: TaskFormDialogProp) {
  const [newTask, setNewTask] = useState<Task>(defaultTask || DefaultTask);
  const cancelRef = React.useRef(null);

  const { tasks, addTask, updateTask } = useAppContext();
  const toast = useToast();

  useEffect(() => {
    setNewTask(defaultTask || DefaultTask);
  }, [defaultTask]);

  function handleCloseDialog() {
    onClose();
  }

  function handleSubmit() {
    if (newTask) {
      if (!newTask.name) {
        toast({
          title: "Please enter task's name",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        return;
      }
      const newId = (tasks[tasks.length - 1].id || 0) + 1;
      isAddTask ? addTask({ ...newTask, id: newId }) : updateTask(newTask);
      onSuccess();
      toast({
        title: `${isAddTask ? "Add" : "Edit"} task successfully`,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleCloseDialog}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {`${isAddTask ? "Add" : "Edit"} task`}
            </AlertDialogHeader>

            <AlertDialogBody>
              <VStack spacing={3}>
                <Input
                  value={newTask?.name}
                  placeholder="Task name"
                  onChange={(e) =>
                    setNewTask({ ...newTask, name: e.target.value })
                  }
                />
                <Input
                  value={newTask?.startDate}
                  placeholder="Start date"
                  onChange={(e) =>
                    setNewTask({ ...newTask, startDate: e.target.value })
                  }
                />
                <Input
                  value={newTask?.endDate}
                  placeholder="End date"
                  onChange={(e) =>
                    setNewTask({ ...newTask, endDate: e.target.value })
                  }
                />
                <Textarea
                  value={newTask?.description}
                  placeholder="Description"
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                />
                <Select
                  onChange={(e) =>
                    setNewTask({ ...newTask, type: e.target.value as TaskType })
                  }
                >
                  {Object.keys(TASK_TYPE).map((type) => (
                    <option selected={type === newTask?.type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </Select>
                <Select
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      status: e.target.value as TaskStatus,
                    })
                  }
                >
                  {Object.keys(TASK_STATUS).map((status) => (
                    <option
                      selected={status === newTask?.status}
                      value={status}
                    >
                      {status.toUpperCase()}
                    </option>
                  ))}
                </Select>
              </VStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleSubmit} ml={3}>
                {isAddTask ? "Add" : "Edit"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export { TaskFormDialog };
