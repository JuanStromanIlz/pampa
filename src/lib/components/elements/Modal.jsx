import styled from 'styled-components';
import { createPortal } from 'react-dom';
import usePortal from '../../hooks/usePortal';
import Box from './Box';
import Button from './Button';
import Text from './Text';



const Container = styled.div`
  .modal--container {
    display: grid;
    width: 100%;
    height: 100%;
  }
  .show {
    opacity: 1;
  }
  ${p => p.sx && p.sx};
`;

const StyledMask = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  background: rgba(234, 235, 237, 0.6);
  transition: opacity 0.8s ease-out;
  backdrop-filter: blur(3px);
`;

const StyledDialog = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  .dialog--wrapper {
    display: flex;
    flex-direction: column;
    margin: 30px;
    > button {
      margin-left: auto;
      margin-bottom: 8px;
    }
  }
`;

const StyledBox = styled(Box)`
  padding: 25px;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  margin-bottom: 15px;
  ${p => p.sx && p.sx};
`;

const StyledContent = styled.div`
  margin-bottom: 15px;
  ${p => p.sx && p.sx};
`;

const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  ${p => p.sx && p.sx};
`;

const Title = ({children, sx, ...props}) => <StyledTitle sx={sx} {...props}><Text component='h4' type={400}>{children}</Text></StyledTitle>;

const Content = ({children, sx, ...props}) => <StyledContent sx={sx} {...props}><Text component='p' type={300}>{children}</Text></StyledContent>;

const Actions = ({children, sx, ...props}) => <StyledActions sx={sx} {...props}>{children}</StyledActions>;

const Modal = ({ open, close, id, children, sx, ...props }) => {
  const target = usePortal(id ? id : 'modal-view');

  return (
    open &&
    createPortal(
      <Container {...props}>
        <StyledMask className={open && 'show'}>
          <StyledDialog>
            <div className='dialog--wrapper'>
              <Button.Icon onClick={close}>close</Button.Icon>
              <StyledBox>
                {children}
              </StyledBox>
            </div>
          </StyledDialog>
        </StyledMask>
      </Container>,
      target,
    )
  );
};

Modal.Title = Title;
Modal.Content = Content;
Modal.Actions = Actions;

export default Modal;