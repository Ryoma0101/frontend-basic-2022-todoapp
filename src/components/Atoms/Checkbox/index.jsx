import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbox onClick={onClick}>
      <img src={check} className="check" />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  background: none;
  position: relative;
  cursor: pointer;
  padding: 0;

  .check {
    display: none;
    align-self: stretch;
  }

  :hover .check {
    display: block;
  }
`;
