import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/reducers";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
