import { ROLE } from "../constants/role";
import { removeComment } from "./session/remove-comment";

export const createSession = (roleId) => {
  let session = {
    logout() {
      Object.keys(session).forEach((key) => {
        delete session[key]
      })
    },
  };

  switch (roleId) {
    case ROLE.ADMIN: {
      session.removeComment = removeComment
      break
    }

    case ROLE.MODERATOR: {
      session.removeComment = removeComment
      break
    }

    case ROLE.READER: {
      break
    }

    default:
    // nothing
  }

  return session
}