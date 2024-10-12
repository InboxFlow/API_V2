import { styled } from "@linaria/react";

import codeJPG from "~/client/assets/code.jpg";
import signBackgroundSVG from "~/client/assets/sign-background.svg";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-image: url(${signBackgroundSVG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  height: 637px;
  width: 1100px;

  background-color: var(--card-foreground-primary);

  overflow: hidden;
  border-radius: var(--rounded-cards);
`;

const Hero = styled.div`
  padding: 50px;
  flex: 1;

  background-image: url(${codeJPG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    font-size: 34px;
    font-weight: 600;
    text-align: left;
    color: white;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 454px;

  margin: auto 0;
  padding: 40px;
  gap: 10px;
`;

export { Container, Content, FormContainer, Hero };
