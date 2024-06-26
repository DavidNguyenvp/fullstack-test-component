import BuyButton from "@/components/BuyButton";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Component/BuyButton",
  component: BuyButton,
  parameters: {},
  tags: ["Components"],
  argTypes: {},

  args: { handleClick: fn() },
} satisfies Meta<typeof BuyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  
  },
};