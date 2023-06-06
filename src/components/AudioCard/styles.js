import { styled } from "styled-components";

export const Container = styled.div`
  background: var(--color-pink-800);
  box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.35);
  border-radius: 8px;

  display: flex;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    padding: 6px 14px 14px;

    span {
      font-size: 27px;
      font-weight: 400;
      margin-bottom: 8px;
      color: var(--color-gray-100);
      width: 200px;
      height: 75px;
      vertical-align: middle;

      display: flex;
      align-items: center;
      justify-content: center;

      text-align: center;
    }

    img {
      width: 200px;
      height: 185px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  
  > div:nth-child(2) {
    display: flex;
    position: relative;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;

  > button {
    border: none;
    border-radius: 3px 8px 8px 3px;
    cursor: pointer;
    height: 100%;
    padding: 0px 5px 0px 10px;
  }

  svg {
    fill: var(--color-pink-500);
  }

  &::before {
    content: '';
    position: absolute;
    align-self: flex-start;
    width: 5px;
    height: 100%;
    max-height: ${({playertime}) => playertime}%;
    z-index: 1;
    background-color: var(--color-pink-300);
    border-radius: 10px;
    transition: max-height 1s;
  }

  &::after {
    content: '';
    position: absolute;
    top:0;
    width: 5px;
    height: 100%;
    background-color: var(--color-gray-400);
    border-radius: 4px;
  }
`;