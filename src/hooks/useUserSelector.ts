import { type TypedUseSelectorHook, useSelector } from "react-redux";
import { type RootState } from "../store";

const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useUserSelector;
