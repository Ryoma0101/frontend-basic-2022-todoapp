import React from "react";
import MainPage from "./index";

export default {
  title: "Pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
