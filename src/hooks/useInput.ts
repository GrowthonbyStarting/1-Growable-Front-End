import { useState } from "react";

type UseInputProps<T> = [T, (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, () => void];

export const useInput = <T>(initialValue: T): UseInputProps<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setValue(event.target.value as T);
  };

  const resetForm = (): void => {
    setValue(initialValue);
  };

  return [value, onChangeForm, resetForm];
};
