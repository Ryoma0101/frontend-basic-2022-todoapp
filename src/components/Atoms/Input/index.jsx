import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import COLOR from "../../../variables/color";
// import FONTFAMILY from "../../../variables/font_family";
// import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue = "" }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = defaultValue;
      inputRef.current.focus();
    }
  }, [defaultValue]);
  const handleBlur = () => {
    if (inputRef.current) {
      onEditComplete(inputRef.current.value);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputRef.current) {
      onEditComplete(inputRef.current.value);
    }
  };
  return (
    <StyledInput
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;

const StyledInput = styled.input``;
