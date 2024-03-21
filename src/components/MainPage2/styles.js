import styled from "styled-components";

export const Wrapper = styled.div`
  border: 3px solid red;
  // height: containerHeight;
  max-height:700px;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  `;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;
