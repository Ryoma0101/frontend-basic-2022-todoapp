import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusButton src={plus} alt="plus icon" />
      <AddTaskText>タスクを追加</AddTaskText>
    </Button>
  );
};

// styled-components の定義を追加
const Button = styled.button`
  cursor: pointer;
  display: inline-flex;
  padding: 2px 6px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  position: relative;
  border: none;
  background: none;
  outline: none;
  &:hover::before {
    background: ${COLOR.GREEN};
    opacity: 0.2;
    content: "";
    position: absolute;
    width: 9.5em;
    height: 100%;
    border-radius: 12px;
    left: -1px;
  }
`;

const PlusButton = styled.img`
  width: 20px;
  height: 20px;
`;

const AddTaskText = styled.p`
  margin: 0;
  font-size: ${TEXT.S};
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
`;
