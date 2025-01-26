import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Task from "./../../Molecules/Task";
import { AddTaskButton } from "./../../Atoms/AddTaskButton";
import COLOR from "./../../../variables/color";

const STORAGE_KEY = "todo-app-tasks";

const TodoCard = ({ tasks = [] }) => {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : tasks;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
  }, [taskList]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const handleTaskComplete = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const handleTaskNameChange = (value, index) => {
    if (value.trim() === "") {
      const updatedTaskList = taskList.filter((_, i) => i !== index);
      setTaskList(updatedTaskList);
    } else {
      const updatedTaskList = taskList.map((task, i) =>
        i === index ? { ...task, name: value, initializing: false } : task,
      );
      setTaskList(updatedTaskList);
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => handleTaskComplete(index)}
            onTaskNameChange={(value) => handleTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 10px;
  padding: 20px;
  border-radius: 4px;
  background-color: ${COLOR.LIGHT_BLACK};
  width: 500px;

  @media (max-width: 740px) {
    width: 240px;
  }
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:not(:empty) {
    margin-top: 10px;
  }
`;
