import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  background: #c4c8d9;
  overflow: hidden;
  padding-bottom: 30px;
`;

export const CharacterContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #c4c8d9;
`;

export const CharacterTitle = styled.h3`
  text-align: center;
  font-size: 30px;
  color: #202261;
`;