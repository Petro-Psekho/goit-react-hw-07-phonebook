import { RotatingLines } from 'react-loader-spinner';

import { SpinnerWrap } from 'components/Spinner/Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrap>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="60"
        visible={true}
      />
    </SpinnerWrap>
  );
};
