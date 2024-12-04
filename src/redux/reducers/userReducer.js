import { ROLE } from "../../constants/role";
import { ACTION_TYPE } from "../actions/type";

const initialUserState = {
  session: null,
  id: null,
  login: null,
  roleId: ROLE.GUEST,
}

export const userReducer = (state = initialUserState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...payload
      }

    default:
      return state
  }
}