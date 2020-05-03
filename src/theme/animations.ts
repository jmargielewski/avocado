import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export default {
  rotate,
};
