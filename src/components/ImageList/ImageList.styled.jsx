import styled from "@emotion/styled/macro";

export const ImageListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing(2)};
  list-style: none;
  padding: 0;
  margin: 0;
`;
