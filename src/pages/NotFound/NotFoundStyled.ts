import styled from 'styled-components';

export const NotFoundStyled = styled.section`
  margin: 0rem auto;
  background-color: rgb(148 143 143);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .image {
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .image img {
    width: 40vw;
  }
  .info {
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 4rem;
    gap: 1rem;
  }
`;
