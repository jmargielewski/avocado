import React, { FunctionComponent } from 'react';
import Styled from './Input.Styles';
import { InputProps } from './Input.Types';
import Icon from '../Icon';

const Input: FunctionComponent<InputProps> = ({ focus, loading, icon }): JSX.Element => {
  return (
    <Styled.InputWrapper focus={focus} loading={loading} icon={icon}>
      <Styled.Input type="text" placeholder="Search.." />
      {!!icon && <Icon icon={icon} />}
    </Styled.InputWrapper>
  );
};

Input.defaultProps = {
  focus: false,
  loading: false,
  icon: '',
};

export default Input;
