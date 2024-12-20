import styled from "styled-components";
import Icon from "../../Icon/Icon";
import { Link } from "react-router-dom";

const LargeText = styled.div`
  font-size: 68px;
  font-weight: bold;
  line-height: 1;
`;

const SmallText = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

function ContainerLogo({ className }) {
  return (
    <Link to="/" className={className}>
      <Icon size="84px" id="fa-code" />

      <TextColumn>
        <LargeText>Блог</LargeText>
        <SmallText>вэб-разработчика</SmallText>
      </TextColumn>
    </Link>
  );
}

export const Logo = styled(ContainerLogo)`
  display: flex;
  align-items: center;
  color: #1c1c1c;
  gap: 17px;
  text-decoration: none;
`;
