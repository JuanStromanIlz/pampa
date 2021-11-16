import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { useEffect, useState, createContext, useContext } from 'react';
import usePortal from 'lib/hooks/usePortal';
import Text from './Text';
import Button from './Button';

const GalleryContext = createContext();

const GalleryContainer = styled.div`
  z-index: 1024;
  position: fixed;
  inset: 0;
  margin: 0;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  outline: none;
`;

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledSlide = styled.div`
  > div {
    pointer-events: none;
    opacity: 0;
    position: absolute;
    inset: 0;
    display: flex;
    margin: auto;
    transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .show {
    opacity: 1;
    pointer-events: auto;
  }
`;

const StyledCloseContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 16px;
  right: 16px;
  @media(min-width: 920px) {
    right: 25px;
  }
`;

const StyledInfo = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .buttons {
    display: none;
    flex-direction: row;
    gap: 8px;
  }
  @media(min-width: 920px) {
    padding-left: 25px;
    padding-right: 25px;
    justify-content: space-between;
    .buttons {
      display: flex;
    }
  }
`;

const CloseButton = ({children, ...props}) => {
  let { onClick, ...rest } = props;

  return (
    <StyledCloseContainer>
      <Button.Icon {...rest} onClick={onClick}>{children}</Button.Icon>
    </StyledCloseContainer>
  );
};

const PrevButton = ({children, ...props}) => {
  const { prev, index } = useContext(GalleryContext);

  return (
    <Button.Icon disabled={index === 0} onClick={prev} {...props}>{children}</Button.Icon>
  );
};

const NextButton = ({children, ...props}) => {
  const { next, index, items } = useContext(GalleryContext);

  return (
    <Button.Icon disabled={index + 1 === items} onClick={next} {...props}>{children}</Button.Icon>
  );
};

const Info = ({children, ...props}) => {
  const { items, index } = useContext(GalleryContext);

  return (
    <StyledInfo {...props}>
      <Text>{`${index + 1} / ${items}`}</Text>
      <div className='buttons'>
        {children}
      </div>
    </StyledInfo>
  );
}

const Slider = ({children, ...props}) => <StyledSlider {...props}>{children}</StyledSlider>;

const Slide = ({slide, children, ...props}) => {
  const { index } = useContext(GalleryContext);

  return (
    <StyledSlide {...props}>
      <div className={`${slide === index && 'show'}`}>
        {children}
      </div>
    </StyledSlide>
  );
}

const Gallery = ({open, items, index, children, ...props}) => {
  const target = usePortal('modal-gallery');
  const [galleryData, setGalleryData] = useState({
    items: 0,
    index: 0
  });
  const [touch, setTouch] = useState({
    startPoint: 0,
    direction: true
  });

  function prevImage() {
    setGalleryData(prev => {
      if (prev.index === 0) {
        return {...prev}
      }
      return {
        items: prev.items,
        index: prev.index -1
      }
    });
  }

  function nextImage() {
    setGalleryData(prev => {
      let lastCard = prev.index + 1;
      if (lastCard === prev.items) {
        return {...prev}
      }
      return {
        items: prev.items,
        index: prev.index +1
      }
    });
  }

  /* Touch */
  function touchStart(e) {
    setTouch(prev => {
      return {
        startPoint: e.changedTouches[0].clientX,
        direction: prev.direction
      }
    });
  }
  function touchMove(e) {
    setTouch(prev => {
      return {
        startPoint: prev.startPoint,
        direction: e.changedTouches[0].clientX < prev.startPoint
      }
    });
  }
  function touchEnd() {
    if (!touch.direction) {
      return prevImage();
    }
    nextImage();
  }

  /* Keys */
  function keyPress(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      nextImage();
    }
    if (e.keyCode === 37 || e.keyCode === 38) {
      prevImage();
    }
  }

  useEffect(() => {
    if (open) {
      setGalleryData({
        items: items,
        index: index
      });
    }
  }, [open, items, index]);

  return (
    open &&
    createPortal(
      <GalleryContainer
        {...props}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        onTouchMove={touchMove}
        onKeyDown={keyPress}
        tabIndex={0}
      >
        <GalleryContext.Provider value={{
          prev: prevImage,
          next: nextImage,
          index: galleryData.index,
          items: galleryData.items
        }}>
          {children}
        </GalleryContext.Provider>
      </GalleryContainer>,
      target,
    )
  );
}

Gallery.Info = Info;
Gallery.Prev = PrevButton;
Gallery.Next = NextButton;
Gallery.Close = CloseButton;
Gallery.Slider = Slider;
Gallery.Slide = Slide;

export { StyledSlide as Slide };

export default Gallery;