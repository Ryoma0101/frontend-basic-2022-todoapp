import { EditButton } from "./index";
import pencil from "../../../assets/svg/pencil.svg";
import { Children } from "react";

export default {
  component: EditButton,
  title: "Atoms/EditButton",
};

const Template = (args) => <EditButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("clicked"),
  children: <img src={pencil} alt="pencil" />,
};
