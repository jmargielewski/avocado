import React, { FunctionComponent } from 'react';
import Styled from './Input.Styles';
import { InputProps } from './Input.Types';
import Icon from '../Icon';

const Input: FunctionComponent<InputProps> = ({
  id,
  className,
  type,
  name,
  value,
  onChange,
  placeholder,
  loading,
  icon,
}): JSX.Element => {
  return (
    <Styled.InputWrapper loading={loading} icon={icon}>
      <Styled.Input
        id={id}
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
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
