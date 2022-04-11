import { IButton } from '@todo-app/common';
import { FC } from 'react';
import { StyledBtn } from '../styles/btn.style';

//

export const Button: FC<IButton> = (props: IButton) => {
  return (
    <StyledBtn action={props.action} onClick={props.onClick} type={props.type || undefined}>
      {props.message}
    </StyledBtn>
  );
};

export default Button;
