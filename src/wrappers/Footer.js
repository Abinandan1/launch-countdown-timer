import styled from "styled-components";
import bg from "../../public/assets/images/pattern-hills.svg";
export const Wrapper = styled.footer`
  background: url(${bg}) right/cover no-repeat;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  .social-icons {
    display: flex;
    gap: 1rem;
  }
  .icon {
    background: transparent;
    color: var(--grayish-blue);
    border: none;
    font-size: 1.5rem;
    transition: 0.3s all linear;
    cursor: pointer;
  }
  .icon:hover {
    color: var(--soft-red);
  }
  @media (width>768px) {
    background: url(${bg}) center/cover no-repeat;
  }
`;
