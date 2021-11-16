import styled from 'styled-components';

export const StyledTag = styled.span`
  font-size: 11px;
  display: inline-block;
  border: 1px solid #000;
  padding: 3px 10px;
  border-radius: 30px;
  margin: 8px 10px 0px 0px;
  ${p => p.sx && p.sx};
`;

const Tag = ({children, sx, ...props}) => <StyledTag sx={sx} {...props}>{children}</StyledTag>;

export default Tag;