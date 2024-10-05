import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";
import pencil from "../../../assets/svg/pencil.svg";

const Task = ({ onTaskNameChange, onTaskComplete, taskName = "", defaultIsEditing = false }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const handleEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };
  const handleEditButtonClick = () => {
    setIsEditing(true);
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input value={taskName} onEditComplete={handleEditComplete} />
      ) : (
        <StyledNameAndEditButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={handleEditButtonClick}>
              <img src={pencil} alt="Edit task" />
            </EditButton>
          </StyledEditButtonWrapper>
        </StyledNameAndEditButtonWrapper>
      )}
    </StyledWrapper>
  );
};

Task.displayName = "Task";

export default Task;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledNameAndEditButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 100%;
`;

const StyledTaskName = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  margin: 0px;
  width: 100%;
`;

const StyledEditButtonWrapper = styled.div`
  margin-left: 10px;
`;
