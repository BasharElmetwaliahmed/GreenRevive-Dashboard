/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Select from "./Select";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmEdit({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  onChange,
  currentRole,
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Edit {resourceName}</Heading>
      <Select
        options={[
          { value: "admin", label: "Admin" },
          { value: "coordinator", label: "Coordinator" },
          { value: "user", label: "User" },
        ]}
        value={currentRole}
        onChange={onChange}
      />

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}>
          Cancel
        </Button>
        <Button
          variation="primary"
          onClick={() => onConfirm(onCloseModal)}
          disabled={disabled}>
          Edit
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmEdit;
