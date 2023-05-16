import { Ref } from "react";

export interface TextAreaProps {
  className?: string;
  label: string;
  onChange?: (e: string) => void;
  textAreaRef?: Ref<HTMLTextAreaElement>;
}

export interface NumberInputProps {
  onChange?: (v: number) => void;
}
