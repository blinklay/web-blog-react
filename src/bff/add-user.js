import { generateRandomDate } from "./generate-date";

export const addUser = (login, password) => fetch("http://localhost:3000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json;charset=utf-8" },
  body: JSON.stringify({
    login,
    password,
    registed_at: generateRandomDate(),
    role_id: 2
  })
})