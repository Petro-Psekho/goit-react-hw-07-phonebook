import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { tada } from 'react-animations';

const tadaAnimation = keyframes`${tada}`;

export const TadaDiv = styled.div`
  animation: 1s ${tadaAnimation};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  /* font-size: 20px; */
  color: #4e4e4e;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  color: #4e4e4e;
`;

export const ContactsTitle = styled.h2`
  font-size: 30px;
  color: #4e4e4e;
`;

export const FindContactsTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 100;
  color: #4e4e4e;
`;
