import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Text from './Text';

const Container = styled.div`
  position: fixed;
  bottom: 30px;
  left: 30px;
  @keyframes showAlert {
    from {
      opacity: 0;
    }
    to {
      opactiy: 1;
    }
  }
  .alert--open {
    transition: all .2s linear;
    opacity: 1;
    pointer-events: auto;
  }
`;

const StyledAlert = styled.div`
  border-radius: 32px;
  background: ${props => props.theme.state[props.variant]};
  transition: all .2s linear;
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: row;
  .icon {
    display: flex;
    padding: 10px 10px 10px 25px;
    span {
      margin: auto;
      color: #fff;
    }
  }
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 25px 10px 0px;
    span {
      color: #fff;
      font-size: 16px;
      line-height: 16px;
    }
  }
  ${p => p.sx && p.sx};
`;

const StyledMessage = styled.div`
  padding: 10px;
  flex-grow: 1;
  display: flex;
  p {
    color: #fff;
  }
  ${p => p.sx && p.sx};
`;

function Alert({open, close, delay, variant, action, children, sx, ...props}) {
  const [icon, setIcon] = useState('info');
  const alertRef = useRef(null);

  function closeAlert() {
    alertRef.current.classList.remove('alert--open');
    close();
  }

  useEffect(() => {

    function alertConfig(variant) {
      switch (variant) {
        case 'success':
          setIcon('check');
          break;
        case 'warning':
          setIcon('warning');
          break;
        case 'error':
          setIcon('error');
          break;
        case 'info':
          setIcon('info');
          break;
        default:
          setIcon('info');
      }
    }

    alertConfig(variant);

    if (open) {
      setTimeout(() => {
        alertRef.current.classList.remove('alert--open');
      }, delay || 3000);
    }
  }, [open, delay, variant]);

  return (
    <Container>
      <StyledAlert
        sx={sx}
        {...props}
        ref={alertRef}
        className={`${open ? 'alert--open' : ''}`}
        onClick={()=> console.log(alertRef)}
        variant={variant}
      >
        <div className='icon'>
          <span className='material-icons'>{icon}</span>
        </div>
        {children}
        <div className='actions'>
          {action}
          <Button.Icon onClick={closeAlert}>close</Button.Icon>
        </div>
      </StyledAlert>
    </Container>
  )
}

const Message = ({children, sx, ...props}) => <StyledMessage sx={sx} {...props}><Text component='p' type={300}>{children}</Text></StyledMessage>;

Alert.Message = Message;

export default Alert;