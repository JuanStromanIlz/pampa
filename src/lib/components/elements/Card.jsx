import styled from 'styled-components';
import Image from './Image';

const StyledCard = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  user-select: none;
  > div > :last-child {
    margin-bottom: 0px;
  }
  ${p => p.sx && p.sx};
`;

const StyledMedia = styled.figure`
  margin: 0;
  cursor: pointer;
  img {
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
  figcaption {
    margin: 5px 0;
    font-size: 17px;
  }
  ${p => p.sx && p.sx};
`;

const StyledHeader = styled.header`
  margin: 15px 0;
  ${p => p.sx && p.sx};
`;

const StyledContent = styled.div`
  margin: 15px 0;
  display: flex;
  ${p => p.sx && p.sx};
`;

const StyledActions = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  gap: 8px;
  ${p => p.sx && p.sx};
`;

const Media = ({src, children, sx, ...props}) => (
  <StyledMedia sx={sx} {...props}>
    <Image src={src} alt=''/>
    <figcaption>{children}</figcaption>
  </StyledMedia>
);

const Card = ({children, sx, ...props}) => {
  return (
    <StyledCard sx={sx} {...props}>
      <div>{children}</div>
    </StyledCard>
  );
}

Card.Media = Media;
Card.Header = StyledHeader;
Card.Content = StyledContent;
Card.Actions = StyledActions;

export default Card;