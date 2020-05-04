import React, { FunctionComponent } from 'react';
import Styled from './Input.Styles';
import { InputProps } from './Input.Types';
import Icon from '../Icon';

const Input: FunctionComponent<InputProps> = ({ loading, icon, className }): JSX.Element => {
  return (
    <Styled.InputWrapper loading={loading} icon={icon}>
      <Styled.Input type="text" placeholder="Search.." className={className} />
      {!!icon && <Icon icon={icon} />}
    </Styled.InputWrapper>
  );
};

Input.defaultProps = {
  icon: '',
  className: '',
  loading: false,
};

export default Input;
