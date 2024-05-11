import { TASK_STATUS, TASK_TYPE } from "../constants";

export type TaskStatus = keyof typeof TASK_STATUS;
export type TaskType = keyof typeof TASK_TYPE;
export type Task = {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
  startDate: string;
  endDate: string;
  type: TaskType;
};
