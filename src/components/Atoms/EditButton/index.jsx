import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const EditButton = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
  :hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
