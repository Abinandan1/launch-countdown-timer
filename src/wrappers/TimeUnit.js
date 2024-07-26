import styled from "styled-components";

export const Wrapper = styled.div`
  .card {
    width: 70px;
    background: var(--dark-desaturated-blue);
    display: grid;
    place-items: center;
    height: 60px;
    border-radius: 0.25rem;
    font-size: 36px;
    font-weight: 700;
    color: var(--soft-red);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.5rem;
    color: var(--grayish-blue);
    font-weight: 700;
    letter-spacing: 2.96px;
  }
  @media (width>768px) {
    .card {
      width: 148px;
      height: 140px;
      font-size: 80px;
    }
    p {
      font-size: 1rem;
      letter-spacing: 5.92px;
    }
  }
`;
