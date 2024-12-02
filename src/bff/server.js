import { addUser } from "./add-user"
import { createSession } from "./create-session"
import { getUser } from "./get-user"

export const server = {
  async register(regLogin, regPassword) {
    const user = getUser(regLogin)

    if (user) {
      return {
        error: "Такой логин уже занят!",
        res: null
      }
    }

    await addUser(regLogin, regPassword)


    return {
      error: null,
      res: createSession(user.role_id)
    }
  },
  async autorize(authLogin, authPassword) {
    const user = await getUser(authLogin)

    if (!user) {
      return {
        error: "Такой пользователь не найден!",
        res: null
      }
    }

    if (authPassword !== user.password) {
      return {
        error: "Неверный пароль!",
        res: null
      }
    }

    return {
      error: null,
      res: createSession(user.role_id)
    }
  }
}