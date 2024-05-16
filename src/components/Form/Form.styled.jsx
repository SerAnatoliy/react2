import styled from "@emotion/styled";

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(2)};
  max-width: 400px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing(5)};
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.spacing(1)};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
