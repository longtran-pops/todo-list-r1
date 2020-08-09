import styled from 'styled-components';

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  margin: 0 auto -1px;
  justify-content: center;
  max-width: 80%;
  border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  border-top: 1px solid ${(props) => props.theme.lightgrey};
  p {
    margin-right: 10px;
    flex: 1 0 auto;
  }
`;

export default TaskWrapper;
