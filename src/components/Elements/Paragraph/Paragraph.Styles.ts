import styled from 'styled-components';
import { ParagraphProps } from './Paragraph.Types';

const Paragraph = styled.p`
  font-size: ${({ theme }): string => theme.FontSize.md};
  font-weight: ${({ light, theme }: ParagraphProps): number =>
    light ? theme.Wights.light : theme.Wights.normal};
`;

export default Paragraph;
