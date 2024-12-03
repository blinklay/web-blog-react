import React from "react";
import styled from "styled-components";

function ButtonContainer({ className, children, width, ...props }) {
  return (
    <button width={width} className={className} {...props}>
      {children}
    </button>
  );
}

export const Button = styled(ButtonContainer)`
  font-size: 18px;
  width: ${({ width = "100%" }) => width};
  background-color: #eee;
  padding: 5px;
  text-align: center;
  color: inherit;
  text-decoration: none;
`;
