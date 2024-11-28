import styled from "styled-components";
import { Logo } from "./components/logo";

function HeaderContainer({ className }) {
  return (
    <header className={className}>
      <Logo />
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
`;
