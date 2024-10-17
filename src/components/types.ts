type Input = {
  type: string;
  modelValue: any;
  label?: string;
  placeholder?: string;
};

export type Step = {
  title: string;
  description: string;
  inputs: Array<Input>;
};
