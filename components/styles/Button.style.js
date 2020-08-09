import styled from 'styled-components';

const Button = styled.div`
  border: 1px solid ${(props) => props.theme.red};
  font-weight: 400;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: pointer;
  margin: 2px;
  padding: 5px 10px;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.red};
    border: 1px solid ${(props) => props.theme.red};
  }
  &:disabled,
  &[disabled] {
    color: ${(props) => props.theme.lightgrey}!important;
  }
`;

export default Button;
