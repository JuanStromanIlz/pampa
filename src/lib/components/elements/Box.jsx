import styled from 'styled-components';

const StyledBox = styled.div`
  border: 1px solid #000;
  border-radius: 12px;
  ${p => p.sx && p.sx};
`;

const Box = ({children, sx, ...props}) => <StyledBox sx={sx} {...props}>{children}</StyledBox>;

export default Box;