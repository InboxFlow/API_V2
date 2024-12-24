import { styled } from "@linaria/react";

const Container = styled.div`
  background: var(--background);
  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  padding-top: 64px; // header
  padding-left: 260px; // sidebar
`;

export { Container };
