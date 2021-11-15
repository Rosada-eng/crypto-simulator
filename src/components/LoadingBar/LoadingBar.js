import { useLoading, Puff } from '@agney/react-loading';

import React from 'react';

const LoadingBar = ({ top, left, width }) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    loaderProps: {
      style: {
        position: 'absolute',
        top: `${top}`,
        left: `${left}`,
        zIndex: '1000',
      },
    },
    indicator: <Puff width={width} fill="#eec643" stroke="#eec643" />,
  });

  return <section {...containerProps}>{indicatorEl}</section>;
};

export default LoadingBar;
