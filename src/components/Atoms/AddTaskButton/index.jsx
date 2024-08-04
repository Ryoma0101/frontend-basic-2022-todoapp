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
  background-color: ${COLOR.primary};
  font-family: ${FONTFAMILY.primary};
  /* その他のスタイル */
`;

const PlusButton = styled.img`
  width: 20px;
  height: 20px;
  /* その他のスタイル */
`;

const AddTaskText = styled.span`
  color: ${COLOR.text};
  font-size: ${TEXT.size};
  /* その他のスタイル */
`;
