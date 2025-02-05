import styled from '@emotion/styled';

import { colors, media } from '../../styles/theme';
import { breakpointDesktop } from '../../styles/vars';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  justify-items: center;
  margin: 0 auto !important;
  gap: 16px;
  @media screen and (${media.tablet}) {
    grid-template-columns: 224px 224px;
  }
  @media screen and (${media.desktop}) {
    grid-template-columns: 286px 286px 286px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  max-width: 335px;
  border-radius: 8px;
  & > a {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px 16px;
    border-radius: 8px;
    background-color: #fdf5dd;
    cursor: pointer;
    &:hover {
      background-color: #fde8af;
    }
    &:active {
      background-color: #fcdc7f;
    }
  }
`;

export const FirstBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > button {
    margin-right: 8px;
    width: 40px;
  }
  & > button + button {
    margin-right: auto;
  }
  & > p {
    width: min-content;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid ${colors.mainText};
    color: ${colors.mainText};
    @media screen and (${media.tablet}) and (max-width: ${breakpointDesktop}px) {
      width: 191px;
      margin-top: 8px;
      text-align: center;
    }
  }
`;

export const SecondBlockWrapper = styled.div<{ type: 'participants' | 'projects' }>`
  & > h2 {
    margin-bottom: 8px;
    color: ${colors.mainText};
    font-size: ${({ type }) => (type === 'participants' ? '24px' : '22px')};
    font-weight: 700;
    line-height: calc(30 / 24);
  }
  & > p {
    color: ${colors.mainPlaceholder};
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ThirdBlockWrapper = styled.div``;

export const ThirdBlockElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 400;
  line-height: calc(24 / 16);
  color: ${colors.mainText};
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  & > p#name {
    margin-right: auto;
  }
  & > p#value {
    font-weight: 500;
  }
  & > div#icon-wrapper {
    display: flex;
    height: min-content;
    margin-right: 8px;
    padding: 8px;
    border-radius: 4px;
    background: #fcfcfc;
  }
  & > div#complexity {
    display: flex;
    & > div#complexity-icon {
      display: flex;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
