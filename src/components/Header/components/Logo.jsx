import styled from "styled-components";

const IconContainer = ({ className }) => (
  <div className={className}>
    <i className="fa fa-code" aria-hidden="true"></i>
  </div>
);

const Icon = styled(IconContainer)`
  font-size: 85px;
  font-weight: bold;
`;

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
    <div className={className}>
      <Icon />

      <TextColumn>
        <LargeText>Блог</LargeText>
        <SmallText>вэб-разработчика</SmallText>
      </TextColumn>
    </div>
  );
}

export const Logo = styled(ContainerLogo)`
  display: flex;
  align-items: center;
  color: #1c1c1c;
  gap: 17px;
`;
