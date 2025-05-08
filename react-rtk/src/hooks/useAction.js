import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { action } from "../store/actionCreators";

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(action, dispatch)
}