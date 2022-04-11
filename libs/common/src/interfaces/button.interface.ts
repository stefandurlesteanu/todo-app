import { ButtonActions } from '../types';

export interface IButton {
  action: ButtonActions;
  message: string;
  onClick: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
}
