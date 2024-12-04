import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { server } from "../../../bff/server";
import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { H2 } from "../../H2/H2";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/actions/set-user";

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Поле логин не заполнено!")
    .matches(/\w+$/, "Неверный формат логина. ")
    .min(3, "Минимальная длинна логина - 3 сивола")
    .max(15, "Максимальная длинна логина - 15 сивволов"),
  password: yup
    .string()
    .required("Поле пароль не заполнено!")
    .matches(/^[\w#%]+$/, "Неверный формат пароля.")
    .min(3, "Минимальная длинна пароля - 3 сивола")
    .max(30, "Максимальная длинна пароля - 30 сивволов"),
});

function AuthPageContanier({ className }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const onSubmit = ({ login, password }) => {
    console.log(login);

    server.autorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }

      dispatch(setUser(res));
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;

  const errorMessage = formError || serverError;
  const StyledLink = styled(Link)`
    text-align: center;
    font-size: 18px;
    text-decoration: underline;
    margin-top: 20px;
  `;

  const ErrorMessage = styled.div`
    background-color: #fcadad;
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
    padding: 10px;
  `;

  return (
    <div className={className}>
      <H2>Авторизация</H2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          {...register("login", {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register("password", {
            onChange: () => setServerError(null),
          })}
        />

        <Button type="submit" disabled={!!formError}>
          Войти
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
      <StyledLink to="/register">Регистрация</StyledLink>
    </div>
  );
}

const AuthPage = styled(AuthPageContanier)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;

  & > form {
    display: flex;
    flex-direction: column;
  }
`;

export default AuthPage;
