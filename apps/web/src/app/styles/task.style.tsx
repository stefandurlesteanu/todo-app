import styled from 'styled-components';

export const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--darkest);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  .content {
    flex: 2 1 0%;
    align-self: center;
  }
  h2 {
    color: var(--pink);
    font-size: 2rem;
    width: 100%;
    display: block;
    transition: 0.4s;
    padding: 0 0 0 3rem;
    cursor: pointer;
    text-align:center;
  }
`;
