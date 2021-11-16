import styled from 'styled-components';
import { StyledTag } from './Tag';

const StyledText = styled.div`
  display: flex;
  .type900 {
    font-weight: 900;
    font-size: 105px;
    line-height: 104px;
  }
  .type800 {
    font-weight: 800;
    font-size: 70px;
    line-height: 80px;
  }
  .type700 {
    font-weight: 700;
    font-size: 42px;
    line-height: 48px;
  }
  .type600 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
  }
  .type500 {
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
  }
  .type400 {
    font-weight: 400;
    font-size: 21px;
    line-height: 32px;
  }
  .type300 {
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
  }
  .type200 {
    font-weight: 200;
    font-size: 13px;
    line-height: 28px;
  }
  .type100 {
    font-weight: 100;
    font-size: 11px;
    line-height: 20px;
  }
`;

const Field = styled.span`
  ${StyledTag} & {
    line-height: inherit;
  }
  ${p => p.sx && p.sx};
`;

const Text = ({component, type, children, sx, ...props}) => {
  let { className, ...rest } = props;
  return (
    <StyledText>
      <Field as={component} sx={sx} {...rest} className={`type${type || 400} ${className || ''}`}>
        {children}
      </Field>
    </StyledText>
  );
}

export default Text;