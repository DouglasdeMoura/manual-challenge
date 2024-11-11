import type { Meta, StoryObj } from "@storybook/react";
import bg from "../../../public/assets/BG.png";

import { Block } from ".";
import { Button } from "../button";
import Image from "next/image";

const meta = {
  title: "Components/Block",
  component: Block,
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    title: "Be good to yourself",
    description:
      "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
    callToAction: <Button>Learn more</Button>,
    image: <Image src={bg} alt="man" fill style={{ objectFit: "contain" }} />,
  },
};