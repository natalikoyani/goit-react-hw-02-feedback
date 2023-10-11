import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: ${p => p.theme.spacing(4)};
`;

export const Button = styled.button`
  background-color: ${p => p.theme.lightColor};
  border: 0.1px solid ${p => p.theme.grayColor};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: 1px 1px 3px gray;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};;
`;