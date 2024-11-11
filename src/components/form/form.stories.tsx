import type { Meta, StoryObj } from "@storybook/react";

import { Form } from ".";

const meta = {
  title: "Components/Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    questions: [
      {
        question: "Which image best matches your hair loss?",
        type: "ChoiceType",
        options: [
          {
            display:
              '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />',
            value: "Temples",
            isRejection: false,
          },
          {
            display:
              '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x"/>',
            value: "Temples & Crown",
            isRejection: false,
          },
          {
            display:
              '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>',
            value: "Patchy",
            isRejection: true,
          },
          {
            display:
              '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x" />',
            value: "Moderate",
            isRejection: false,
          },
          {
            display:
              '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x"/>',
            value: "Extensive",
            isRejection: true,
          },
          {
            display:
              '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x" />',
            value: "Complete",
            isRejection: true,
          },
        ],
      },
      {
        question:
          "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
        type: "ChoiceType",
        options: [
          {
            display: "Yes",
            value: true,
            isRejection: true,
          },
          {
            display: "No",
            value: false,
            isRejection: false,
          },
        ],
      },
      {
        question:
          "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
        type: "ChoiceType",
        options: [
          {
            display: "Yes",
            value: true,
            isRejection: true,
          },
          {
            display: "No",
            value: false,
            isRejection: false,
          },
        ],
      },
    ],
    rejectedMessage:
      "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.",
    successMessage: (
      <>
        Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
        <a href="https://www.manual.co">www.manual.co</a>, and prepare to say
        hello to your new hair!
      </>
    ),
  },
};
