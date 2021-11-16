import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  border-radius: 32px;
  button {
    cursor: pointer;
    transition: all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 32px;
    color: ${props => props.variant ? props.theme.state[props.variant] : props.theme.state.info};
    border: 1px solid ${props => props.variant ? props.theme.state[props.variant] : props.theme.state.info};
    background-color: #fff;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    max-width: 240px;
    width: fit-content;
    span {
      display: block;
      margin: auto;
      text-align: center;
      font-size: 17px;
      letter-spacing: -0.3px;
      font-weight: 700;
    }
    :disabled {
      opacity: .7;
      pointer-events: none;
    }
    ${p => p.sx && p.sx};
  }
  .filled--button {
    background: ${props => props.variant ? props.theme.state[props.variant] : props.theme.state.info};
    color: #fff;
  }
  @media (hover: hover) {
    .filled--button:hover {
      background: #fff;
      border-color: #fff;
      color: ${props => props.variant ? props.theme.state[props.variant] : props.theme.state.info};
    }
    button:hover {
      background: ${props => props.variant ? props.theme.state[props.variant] : props.theme.state.info};
      color: #fff;
    }
  }
`;

const StyledIconButton = styled.button`
  display: flex;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0px;
  span {
    display: block;
    margin: auto;
  }
  :disabled {
    opacity: .7;
    pointer-events: none;
  }
  @media (hover: hover) {
    :hover {
      opacity: .7;
    }
  }
  ${p => p.sx && p.sx};
`;

const Button = ({children, variant, filled, sx, ...props}) => (
  <StyledButton 
    variant={variant}
  >
    <button 
      sx={sx}
      className={filled && 'filled--button'}
      {...props}
    >
      <span>{children}</span>
    </button>
  </StyledButton>
);

const IconButton = ({children, sx, ...props}) => <StyledIconButton sx={sx} {...props}><span className='material-icons'>{children}</span></StyledIconButton>;

Button.Icon = IconButton;

export default Button;