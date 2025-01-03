import React from "react";
import TodoCard from "../../Organisms/TodoCard";
import { Title } from "../../Atoms/Title";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Title />
      <TodoCard />
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  display: flex;
  padding: 60px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 740px) {
    padding: 20px;
  }
`;
