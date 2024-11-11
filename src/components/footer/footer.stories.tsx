import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from ".";

function Google() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
      <path
        fill="#7E0707"
        d="M17.902 7.361H9.18v3.683h4.942c-.79 2.455-2.741 3.273-4.984 3.273a5.463 5.463 0 0 1-2.495-.598 5.376 5.376 0 0 1-1.932-1.666 5.246 5.246 0 0 1-.654-4.872 5.315 5.315 0 0 1 1.426-2.105A5.423 5.423 0 0 1 7.735 3.86a5.478 5.478 0 0 1 2.567-.055c.848.186 1.638.57 2.302 1.12l2.717-2.548A9.177 9.177 0 0 0 11.467.298 9.268 9.268 0 0 0 7.074.232a9.186 9.186 0 0 0-3.916 1.962A9.002 9.002 0 0 0 .624 5.731a8.877 8.877 0 0 0 .97 8.348 9.093 9.093 0 0 0 3.279 2.881A9.246 9.246 0 0 0 9.138 18c5.038 0 9.594-3.274 8.764-10.639Z"
      />
    </svg>
  );
}

function Facebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        fill="#7E0707"
        d="M9.529 22 9.5 13.25H5.75V9.5H9.5V7c0-3.374 2.09-5 5.1-5 1.441 0 2.68.107 3.041.155v3.526l-2.087.001c-1.637 0-1.954.778-1.954 1.92V9.5h4.65L17 13.25h-3.4V22H9.529Z"
      />
    </svg>
  );
}

function Twitter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        fill="#7E0707"
        d="M19.995 6.688a4.3 4.3 0 0 0 1.887-2.374 8.59 8.59 0 0 1-2.725 1.041 4.3 4.3 0 0 0-7.316 3.915 12.184 12.184 0 0 1-8.844-4.484 4.3 4.3 0 0 0 1.328 5.73 4.276 4.276 0 0 1-1.943-.538v.054a4.294 4.294 0 0 0 3.443 4.208 4.3 4.3 0 0 1-1.938.074 4.3 4.3 0 0 0 4.009 2.98 8.61 8.61 0 0 1-5.33 1.837c-.343 0-.685-.02-1.025-.059A12.148 12.148 0 0 0 8.12 21 12.127 12.127 0 0 0 20.33 8.789c0-.186-.004-.371-.013-.555a8.718 8.718 0 0 0 2.142-2.222 8.58 8.58 0 0 1-2.464.676Z"
      />
    </svg>
  );
}

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: [
      {
        title: "Product",
        items: [
          {
            name: "Popular",
            url: "#",
          },
          {
            name: "Trending",
            url: "#",
          },
          {
            name: "Guided",
            url: "#",
          },
          {
            name: "Products",
            url: "#",
          },
        ],
      },
      {
        title: "Company",
        items: [
          {
            name: "Press",
            url: "#",
          },
          {
            name: "Mission",
            url: "#",
          },
          {
            name: "Strategy",
            url: "#",
          },
          {
            name: "About",
            url: "#",
          },
        ],
      },
      {
        title: "Info",
        items: [
          {
            name: "Support",
            url: "#",
          },
          {
            name: "Customer Service",
            url: "#",
          },
          {
            name: "Get Started",
            url: "#",
          },
        ],
      },
    ],
    social: [
      { icon: <Facebook />, name: "Facebook", url: "#" },
      { icon: <Google />, name: "Google", url: "#" },
      { icon: <Twitter />, name: "Twitter", url: "#" },
    ],
  },
};
