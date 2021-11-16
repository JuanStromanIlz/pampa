import styled from 'styled-components';
import { useState } from 'react';
import Text from './Text';

const StyledContainer = styled.div`
  position: relative;
  margin-top: 8px;
  margin-bottom: 16px;
  .container--wrapper {
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    ${p => p.sx && p.sx};
  }
  ${props => props.valid ?
      `label {
        color: ${props.theme.state.success};
      }
      fieldset {
        border-color: ${props.theme.state.success} !important;
      }`
    : props.error &&
      `label {
        color: ${props.theme.state.error};
      }
      fieldset {
        border-color: ${props.theme.state.error} !important;
      }`
  };
`;

const StyledMessage = styled.div`
  overflow: hidden;
  transform-origin: top;
  transition: all .1s linear;
  transform: scaleY(${props => props.show ? 1 : 0});
  height: ${props => props.show ? 'auto' : '0px'};
  .message--wrapper {
    padding-left: 25px;
    color: ${props => props.variant ? props.theme.state[props.variant] : props.theme.state.error};
  }
  ${p => p.sx && p.sx};
`;

const StyledInput = styled.div`
  position: relative;
  fieldset {
    color: grey;
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0px 25px;
    overflow: hidden;
    border: 1px solid grey;
    border-radius: 32px;
    pointer-events: none;
    label {
      text-transform: Capitalize;
      line-height: 15px;
      font-size: 15px;
      font-weight: 500;
    }
  }
  input {
    appearance: none;
    border-radius: 32px;
    outline: none;
    font: inherit;
    border: none;
    width: 100%;
    padding: 10px 25px;
    padding-top: 15px;
    ${p => p.sx && p.sx};
  }
  :focus-within {
    fieldset {
      color: ${props => props.theme.state.info};
      border-color: ${props => props.theme.state.info};
    }
  }
  .filled {
    color: ${props => props.theme.state.info};
    border-color: ${props => props.theme.state.info};
  }
`;

const Container = ({error, valid, children, sx, ...props}) => <StyledContainer error={error} valid={valid}><div className='container--wrapper' sx={sx} {...props}>{children}</div></StyledContainer>;

const Message = ({show, variant, children, sx, ...props}) => <StyledMessage show={show} variant={variant} sx={sx} {...props}><Text className='message--wrapper' type={200}>{children}</Text></StyledMessage>;

const Input = ({...props}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  let { name, id, sx, ...restProps } = props;
  
  return (
    <StyledInput>
      <input 
        id={id} 
        sx={sx}
        {...restProps}
        onChange={(e) => setFilled(Boolean(e.target.value.length))}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <fieldset
        className={!focused && filled ? 'filled' : ''}
      >
        <legend>
          <label htmlFor={name}><Text type={300}>{name}</Text></label>
        </legend>
      </fieldset>
    </StyledInput>
  );
};

Input.Container = Container;
Input.Message = Message;

export default Input;