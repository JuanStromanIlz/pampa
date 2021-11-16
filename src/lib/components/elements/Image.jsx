import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Slide } from './Gallery';

const StyledImage = styled.img`
  margin: auto;
  border-radius: 12px;
  object-fit: contain;
  display: block;
  ${Slide} & {
    object-fit: scale-down;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    margin: auto;
  }
  @media (min-width: 920px) {
    ${Slide} & {
      padding: 16px 25px;
      width: 70%;
      height: 70%;
    }
  }
  ${p => p.sx && p.sx};
`;

const StyledLazyLoad = styled.div`
  border-radius: 12px;
  span {
    display: block !important;
    width: 100%;
    height: 100%;
    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  ${p => p.sx && p.sx};
`;

const Image = ({children, sx, ...props}) => <StyledImage sx={sx} {...props} />;

const LazyLoad = ({children, sx, ...props}) => <StyledLazyLoad sx={sx}><LazyLoadImage {...props}>{children}</LazyLoadImage></StyledLazyLoad>;

export { LazyLoad };

export default Image;