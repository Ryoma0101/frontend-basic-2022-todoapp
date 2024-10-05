import React from "react";
import Task from "./index";

export default {
  component: Task,
  title: "Molecules/Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  taskName: "",
  onTaskNameChange: (value) => console.log("Task name changed:", value),
  onTaskComplete: () => console.log("Task completed"),
  defaultIsEditing: false,
};
