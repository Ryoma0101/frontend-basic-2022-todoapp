import React from "react";
import Input from "./index";

export default { component: Input };

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: "",
  onEditComplete: (value) => console.log(value),
};
