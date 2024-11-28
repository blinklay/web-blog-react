import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Header = () => <div>Шапка сайта</div>;
const Footer = () => <div>Подвал сайта</div>;

function App() {
  return (
    <>
      <Header />
      <Content>
        <H2>Контент Страницы</H2>

        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<div>Страница авторизации</div>} />
          <Route path="/register" element={<div>Страница регистрации</div>} />
          <Route path="/users" element={<div>Страница пользователей</div>} />
          <Route path="/post" element={<div>Страница новой статьи</div>} />
          <Route path="/post/:postId" element={<div>Страница статьи</div>} />
          <Route path="*" element={<div>Страница not found</div>} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
}

export default App;
