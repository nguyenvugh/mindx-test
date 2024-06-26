import { Task, TaskType } from "../types";

export const TASK_TYPE = {
  important: "important",
  notes: "notes",
  links: "links",
  meetings: "meetings",
  trash: "trash",
} as const;

export const TASK_STATUS = {
  inReview: "inReview",
  inProgress: "inProgress",
  approved: "approved",
} as const;

export const STATUS_COLOR_MAP: Record<keyof typeof TASK_STATUS, string> = {
  inProgress: "orange",
  inReview: "purple",
  approved: "green",
};

export const DefaultTask: Task = {
  name: "",
  description: "",
  id: 0,
  startDate: "",
  endDate: "",
  status: "inReview",
  type: "important",
};

export const DEFAULT_TASK: Task[] = [
  {
    id: 1,
    name: "Important Task 1",
    description: "Description for Important Task 1",
    status: TASK_STATUS.inProgress,
    startDate: "2024-05-10",
    endDate: "2024-05-15",
    type: "important",
  },
  {
    id: 2,
    name: "Important Task 2",
    description: "Description for Important Task 2",
    status: TASK_STATUS.inReview,
    startDate: "2024-05-12",
    endDate: "2024-05-20",
    type: "important",
  },
  {
    id: 3,
    name: "Important Task 3",
    description: "Description for Important Task 3",
    status: TASK_STATUS.approved,
    startDate: "2024-05-08",
    endDate: "2024-05-12",
    type: "important",
  },
  {
    id: 4,
    name: "Note 1",
    description: "Description for Note 1",
    status: TASK_STATUS.inProgress,
    startDate: "2024-05-10",
    endDate: "2024-05-15",
    type: "notes",
  },
  {
    id: 5,
    name: "Note 2",
    description: "Description for Note 2",
    status: TASK_STATUS.inReview,
    startDate: "2024-05-12",
    endDate: "2024-05-20",
    type: "notes",
  },
  {
    id: 6,
    name: "Note 3",
    description: "Description for Note 3",
    status: TASK_STATUS.approved,
    startDate: "2024-05-08",
    endDate: "2024-05-12",
    type: "notes",
  },
  {
    id: 7,
    name: "Link 1",
    description: "Description for Link 1",
    status: TASK_STATUS.inProgress,
    startDate: "2024-05-10",
    endDate: "2024-05-15",
    type: "links",
  },
  {
    id: 8,
    name: "Link 2",
    description: "Description for Link 2",
    status: TASK_STATUS.inReview,
    startDate: "2024-05-12",
    endDate: "2024-05-20",
    type: "links",
  },
  {
    id: 9,
    name: "Link 3",
    description: "Description for Link 3",
    status: TASK_STATUS.approved,
    startDate: "2024-05-08",
    endDate: "2024-05-12",
    type: "links",
  },
  {
    id: 10,
    name: "Meeting 1",
    description: "Description for Meeting 1",
    status: TASK_STATUS.inProgress,
    startDate: "2024-05-10",
    endDate: "2024-05-15",
    type: "meetings",
  },
  {
    id: 11,
    name: "Meeting 2",
    description: "Description for Meeting 2",
    status: TASK_STATUS.inReview,
    startDate: "2024-05-12",
    endDate: "2024-05-20",
    type: "meetings",
  },
  {
    id: 12,
    name: "Meeting 3",
    description: "Description for Meeting 3",
    status: TASK_STATUS.approved,
    startDate: "2024-05-08",
    endDate: "2024-05-12",
    type: "meetings",
  },
  {
    id: 13,
    name: "Trash Task 1",
    description: "Description for Trash Task 1",
    status: TASK_STATUS.inProgress,
    startDate: "2024-05-10",
    endDate: "2024-05-15",
    type: "trash",
  },
  {
    id: 14,
    name: "Trash Task 2",
    description: "Description for Trash Task 2",
    status: TASK_STATUS.inReview,
    startDate: "2024-05-12",
    endDate: "2024-05-20",
    type: "trash",
  },
  {
    id: 15,
    name: "Trash Task 3",
    description: "Description for Trash Task 3",
    status: TASK_STATUS.approved,
    startDate: "2024-05-08",
    endDate: "2024-05-12",
    type: "trash",
  },
];
