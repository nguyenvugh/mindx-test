import { cloneDeep, findIndex } from "lodash";
import React, { createContext, useContext, useState } from "react";
import { DEFAULT_TASK } from "../components/ScheduleManagement/constants";
import { Task } from "../components/ScheduleManagement/types";
import { AppContextState } from "../types/app-context";

const appContextState: AppContextState = {
  tasks: DEFAULT_TASK,
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
};

export const AppContext = createContext<AppContextState>(appContextState);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [states, setStates] = useState(appContextState);

  function addTask(task: Task) {
    setStates({ ...states, tasks: [...states.tasks, task] });
  }

  function updateTask(task: Task) {
    const updated = cloneDeep(states.tasks);
    const index = findIndex(updated, { id: task.id });
    updated.splice(index, 1, task);
    setStates({ ...states, tasks: updated });
  }

  function removeTask(taskId: number) {
    const newTasks = states.tasks.filter((it) => it.id !== taskId);
    setStates({ ...states, tasks: newTasks });
  }

  return (
    <AppContext.Provider value={{ ...states, addTask, removeTask, updateTask }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
