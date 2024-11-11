import type { Meta, StoryObj } from "@storybook/react";

import { List } from ".";

import Image from "next/image";
import hairLoss from "../../../public/assets/hair-loss.png";
import erections from "../../../public/assets/erections.png";

const meta = {
  title: "Components/List",
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "What we can help with",
    items: [
      {
        title: "Hair loss needn’t be irreversible. We can help!",
        topic: "Hair loss",
        description:
          "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
        image: (
          <Image
            src={hairLoss}
            alt="Hair loss"
            fill
            style={{ objectFit: "contain" }}
          />
        ),
      },
      {
        topic: "Erecetile dysfunction",
        title: "Erections can be a tricky thing. But no need to feel down!",
        description:
          "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
        image: (
          <Image
            src={erections}
            alt="Erections"
            fill
            style={{ objectFit: "contain" }}
          />
        ),
      },
    ],
  },
};
