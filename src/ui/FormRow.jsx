/* eslint-disable react/prop-types */
import styled from 'styled-components';
const FormRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
  width: 30%;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  align-self: flex-end;
`;
const DivStyle= styled.div`
display: flex;
align-items:center;
gap: 0.5;
width: 100%;
`

function FormRow({label,children,error}) {
  return (
    <FormRowStyled>
      <DivStyle>
        <Label htmlFor={children?.props?.id}>{label}</Label>
        {children}
      </DivStyle>
      <Error>{error}</Error>
    </FormRowStyled>
  );
}

export default FormRow