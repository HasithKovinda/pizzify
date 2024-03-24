import { useDispatch } from "react-redux";

import { type AppDispatch } from "../store";

type DispatchFunction = () => AppDispatch;

const useAppDispatch: DispatchFunction = useDispatch;

export default useAppDispatch;
