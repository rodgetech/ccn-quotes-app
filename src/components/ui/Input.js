import styled from 'styled-components';

export default styled.input`
  width: 100%;
  line-height: 33px;
  border: 0;
  border-bottom: ${props => props.border || '1px solid #E8E8E8'};
  border-radius: 0;
  padding: 0;
  font-size:${props => props.theme.fonts.xs};
  color: #2f3640;
  &:focus{
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.blue};
  }
`;