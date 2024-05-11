import {
  Box,
  Button,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TaskTable } from "./TaskTable";
import { TaskType } from "./types";
import { AddIcon } from "@chakra-ui/icons";
import { TaskFormDialog } from "./TaskFormDialog";
const tabIndexMap: Record<TaskType | "all", number> = {
  all: 0,
  important: 1,
  notes: 2,
  links: 3,
  meetings: 4,
  trash: 5,
};
function ListTask() {
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [searchParams] = useSearchParams();
  const taskType = searchParams.get("tab") as TaskType;

  useEffect(() => {
    handleChangeTabIndex(tabIndexMap[taskType] || 0);
    setTitle(`${taskType} task`.toUpperCase());
  }, [taskType]);

  function handleChangeTabIndex(index: number) {
    const taskType = Object.keys(tabIndexMap).find(
      (key) => tabIndexMap[key as TaskType | "all"] === index
    );
    setTitle(`${taskType} task`.toUpperCase());
    setTabIndex(index);
  }
  return (
    <Box>
      <HStack justifyContent={"space-between"}>
        <Text fontSize={"26px"} fontWeight={"bold"}>
          {title}
        </Text>
        <Button
          colorScheme="green"
          leftIcon={<AddIcon />}
          onClick={() => setIsOpenAddDialog(true)}
        >
          Add Task
        </Button>
      </HStack>
      <Tabs index={tabIndex} onChange={(index) => handleChangeTabIndex(index)}>
        <TabList>
          <Tab>All</Tab>
          <Tab>Important</Tab>
          <Tab>Notes</Tab>
          <Tab>Links</Tab>
          <Tab>Meetings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TaskTable taskType="all" />
          </TabPanel>
          <TabPanel>
            <TaskTable taskType="important" />
          </TabPanel>
          <TabPanel>
            <TaskTable taskType="notes" />
          </TabPanel>
          <TabPanel>
            <TaskTable taskType="links" />
          </TabPanel>
          <TabPanel>
            <TaskTable taskType="meetings" />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {isOpenAddDialog && (
        <TaskFormDialog
          isOpen={isOpenAddDialog}
          isAddTask={true}
          onClose={() => setIsOpenAddDialog(false)}
          onSuccess={() => setIsOpenAddDialog(false)}
        />
      )}
    </Box>
  );
}

export { ListTask };
