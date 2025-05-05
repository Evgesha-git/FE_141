import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../store/actinCreators";

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}