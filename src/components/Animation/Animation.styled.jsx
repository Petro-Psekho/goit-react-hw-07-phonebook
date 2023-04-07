import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { tada, fadeInUp } from 'react-animations';

const tadaAnimation = keyframes`${tada}`;

export const AnimationTada = styled.div`
  animation: 1s ${tadaAnimation};
`;

const pulseAnimation = keyframes`${fadeInUp}`;

export const AnimationPulse = styled.div`
  animation: 1s ${pulseAnimation};
`;
