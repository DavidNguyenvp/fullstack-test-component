import Home from "@/app/page";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";


const meta = {
  title: "Component/Page",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test1: Story = {
  args: {
    // itemsData: [
    //   {
    //     id: "3",
    //     text: "30ml",
    //     price: "€10?",
    //     des: "product description",
    //     tags: ["option1", "option2"],
    //   },
    // ],
  },
};