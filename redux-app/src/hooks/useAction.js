import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../store/actionCreators";

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}