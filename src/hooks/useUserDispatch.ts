import { useDispatch } from "react-redux";

import { type AppDispatch } from "../store";

type DispatchFunction = () => AppDispatch;

const useUserDispatch: DispatchFunction = useDispatch;

export default useUserDispatch;
