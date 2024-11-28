import styled from "styled-components";

const IconContainer = ({ className, id }) => (
  <div className={className}>
    <i className={`fa ${id}`} aria-hidden="true"></i>
  </div>
);

const Icon = styled(IconContainer)`
  font-size: ${({ size }) => size};
  font-weight: bold;
`;

export default Icon;
