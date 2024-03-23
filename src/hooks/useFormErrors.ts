import { useActionData as useActionDataOriginal } from "react-router-dom";

interface UseActionDataHook {
  <T>(): T;
}

const useFormErrors: UseActionDataHook = function () {
  const useLoaderDataRef = useActionDataOriginal as UseActionDataHook;
  return useLoaderDataRef();
};

export default useFormErrors;
