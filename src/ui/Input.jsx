import styled from "styled-components";


const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  &:disabled {
    background: gray;
    color: #fff;
    cursor: not-allowed;
  }
`;
export default Input