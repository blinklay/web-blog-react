import styled from "styled-components";
import { Logo } from "./components/logo";
import ControlPanel from "./ControlPanel/ControlPanel";

const Description = styled.div`
  max-width: 195px;
  font-style: italic;
  font-size: 25px;
`;

function HeaderContainer({ className }) {
  return (
    <header className={className}>
      <Logo />
      <Description>Веб-технологии Написание кода Разбор ошибок</Description>
      <ControlPanel />
    </header>
  );
}

export const Header = styled(HeaderContainer)`
  min-height: 120px;
  position: fixed;
  top: 0;
  width: 1320px;
  padding: 25px 54px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
