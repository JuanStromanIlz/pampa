import styled from 'styled-components';

const StyledBigItem = styled.li`
  flex: 50%;
  border-bottom: 1px solid black;
  padding: 30px;
  :last-of-type {
    flex: 100%;
    border-bottom: 0;
  }
  ${p => p.sx && p.sx};
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  ${p => p.sx && p.sx};
`;

const StyledLabel = styled.div`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0;
  display: inline-block;
  margin-bottom: 0.5rem;
  ${p => p.sx && p.sx};
`;

const StyledContent = styled.div`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.3px;
  ${p => p.sx && p.sx};
`;

const Item = ({children, sx, ...props}) => <StyledBigItem sx={sx} {...props}>{children}</StyledBigItem>;

const Label = ({children, sx, ...props}) => <StyledLabel sx={sx} {...props}>{children}</StyledLabel>;

const Content = ({children, sx, ...props}) => <StyledContent sx={sx} {...props}>{children}</StyledContent>;

const List = ({children, sx, ...props}) => <StyledList sx={sx} {...props}>{children}</StyledList>;

Item.Label = Label;
Item.Content = Content;

export { Item };

export default List;