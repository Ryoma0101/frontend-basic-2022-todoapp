import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbox onClick={onClick}>
      <img src={check} className="check" />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.button`
  /* ここに必要なスタイルを書く */
`;
