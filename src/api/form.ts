export const types = {
  ChoiceType: "ChoiceType",
} as const;

export interface Question {
  questions: {
    question: string;
    type: (typeof types)[keyof typeof types];
    options: {
      display: string;
      value: string | boolean;
      isRejection: boolean;
    }[];
  }[];
}

export function getFormById(id: string) {
  return fetch(`https://manual-case-study.herokuapp.com/questionnaires/${id}.json`)
    .then(res => res.json())
    .then((data: Question) => data.questions);
}