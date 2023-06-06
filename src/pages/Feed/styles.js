import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  padding: 30px;

  min-height: calc(100vh - 90px);
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  height: 90px;

  background: var(--color-pink-700);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;