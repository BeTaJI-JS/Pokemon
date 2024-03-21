import styled from "styled-components";

export const Wrapper = styled.div`
  border: 3px solid red;
  max-height: ${props => props.containerHeight}px;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  `;

export const PokemonCard = styled.div`
  background-color: white;
  border: 1px solid blue;
  box-sizing: border-box;
  color: red;
  height: ${props => props.itemHeight};
  top: 0;
`;