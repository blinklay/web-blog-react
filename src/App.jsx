import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import AuthPage from "./components/pages/AuthPage/AuthPage";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1320px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const Content = styled.div`
  padding: 147px 0;
`;

function App() {
  return (
    <AppColumn>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<div>Страница регистрации</div>} />
          <Route path="/users" element={<div>Страница пользователей</div>} />
          <Route path="/post" element={<div>Страница новой статьи</div>} />
          <Route path="/post/:postId" element={<div>Страница статьи</div>} />
          <Route path="*" element={<div>Страница not found</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default App;
