import { useLoading, Puff } from '@agney/react-loading';

import React from 'react';

const LoadingBar = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    loaderProps: {
      style: {
        position: 'absolute',
        top: '50%',
        left: '45%',
        zIndex: '1000',
      },
    },
    indicator: <Puff width="50" fill="#eec643" stroke="#eec643" />,
  });

  return <section {...containerProps}>{indicatorEl}</section>;
};

export default LoadingBar;
