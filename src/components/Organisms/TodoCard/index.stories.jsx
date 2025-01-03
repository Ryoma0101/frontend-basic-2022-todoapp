import TodoCard from "./index";

export default {
  title: "Organisms/TodoCard",
  component: TodoCard,
};

// デフォルトのストーリー（タスクなし）
export const Default = {
  args: {
    tasks: [],
  },
};
