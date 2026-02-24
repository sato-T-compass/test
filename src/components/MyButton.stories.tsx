import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyButton } from "./MyButton";

const meta: Meta<typeof MyButton> = {
  title: "MUI/MyButton",
  component: MyButton,
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: "Click me",
  },
};
