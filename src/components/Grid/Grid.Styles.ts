import styled from 'styled-components';
import { ColumnProps } from './Grid.Types';

const colSize = (size: number): string => `flex: 0 1 calc(${size}/ 12 * 100% - 2rem)`;

const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: inherit;
  align-items: stretch;
  width: 100% !important;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-height: 50px;
`;

const Column = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  border: 1px solid green;
  min-height: 50px;

  ${({ theme }): string => theme.media.tablet} {
    flex: 1 1 100%;
    margin: 1rem !important;
  }
  ${({ size }: ColumnProps): string => colSize(size)};

  margin-left: ${({ floatedRight }): string => (floatedRight ? 'auto!important' : '1rem')};
  margin-right: ${({ floatedLeft }): string => (floatedLeft ? 'auto!important' : '1rem')};
`;

const StyledGrid = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0;

  & > ${Row} {
    & > ${Column} {
      margin: 0 1rem;
    }
  }

  & > ${Column} {
    margin: 1rem;
  }
`;

export default {
  StyledGrid,
  Column,
  Row,
};
