import { Task } from "../components/ScheduleManagement/types";

export type AppContextState = {
  tasks: Task[];
  updateTask: (task: Task) => void;
  addTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
};
