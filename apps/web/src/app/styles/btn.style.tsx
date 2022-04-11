import styled from 'styled-components';
import * as Props from 'styled-components/cssprop';

interface IBtn {
  action: string;
}

export const StyledBtn = styled.button<Pick<IBtn, 'action'>>`
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.4s;
  color: ${(props) => (props.action === 'delete' ? '#db4848' : '#82b4ee')};
  &[type='submit'] {
    text-align: right;
  }
`;
